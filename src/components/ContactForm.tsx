"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { checkRateLimit, recordSubmission, formatResetTime } from "@/lib/rate-limit";
import { trackFormSubmission } from "@/lib/analytics";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [problemCategory, setProblemCategory] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rate-limited">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [remaining, setRemaining] = useState(5);

  useEffect(() => {
    const { remaining: r } = checkRateLimit();
    setRemaining(r);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Check rate limit
    const { allowed, remaining: remainingAttempts, resetTime: resetTimeValue } = checkRateLimit();
    
    if (!allowed) {
      setStatus("rate-limited");
      setRemaining(remainingAttempts);
      setErrorMsg(`Bahut zada messages bhej diye! ${formatResetTime(resetTimeValue)} baad dobara try karein.`);
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      
      // Record successful submission for rate limiting
      recordSubmission();
      
      // Track form submission
      trackFormSubmission('contact', true);
      
      setStatus("success");
      formRef.current.reset();
      setProblemCategory("");
      setRemaining(Math.max(0, remainingAttempts - 1));
    } catch (err: unknown) {
      const msg = err && typeof err === "object" && "text" in err
        ? String((err as { text: string }).text)
        : "Message bhejne mein problem hui. Dobara try karein.";
      setErrorMsg(msg);
      setStatus("error");
      
      // Track failed submission
      trackFormSubmission('contact', false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card border rounded-3xl p-12 shadow-sm text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Bhej Diya!</h3>
        <p className="text-muted-foreground">
          Shukriya! Aapka message aa gaya hai. Hum 24-48 ghante mein reply karenge.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-3xl p-8 shadow-sm">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Aapka Naam *</label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Rahul Kumar"
            required
            disabled={status === "loading" || status === "rate-limited"}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
          <input
            type="email"
            id="email"
            name="reply_to"
            className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="rahul@example.com"
            required
            disabled={status === "loading" || status === "rate-limited"}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="problemCategory" className="text-sm font-medium">Problem Category (Optional)</label>
          <select
            id="problemCategory"
            name="problem_category"
            value={problemCategory}
            onChange={(e) => setProblemCategory(e.target.value)}
            className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            disabled={status === "loading" || status === "rate-limited"}
          >
            <option value="">Select karein...</option>
            <option value="mobile">Mobile</option>
            <option value="google">Google / Gmail</option>
            <option value="payment">Payment</option>
            <option value="government">Government Documents</option>
            <option value="sim-network">SIM / Network</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="apps">Apps</option>
            <option value="laptop-pc">Laptop / PC</option>
            <option value="real-life">Real Life</option>
            <option value="home-desi">Home & Desi Solutions</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Aapka Message / Problem *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Mera phone bahut heat ho raha hai..."
            required
            disabled={status === "loading" || status === "rate-limited"}
          />
        </div>

        {(status === "error" || status === "rate-limited") && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {errorMsg}
          </div>
        )}

        {remaining < 5 && status !== "rate-limited" && (
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {remaining} message(s) remaining aaj ke liye
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "loading" || status === "rate-limited"}
          className="w-full h-12 text-lg"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Send className="w-5 h-5 mr-2" />
          )}
          Message Bhejein
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Direct email: <a href="mailto:hunterboyz73770@gmail.com" className="underline hover:text-primary">hunterboyz73770@gmail.com</a>
        </p>
      </form>
    </div>
  );
}

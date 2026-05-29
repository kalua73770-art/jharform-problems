"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "./ui/button";

interface FeedbackButtonsProps {
  categorySlug: string;
  problemSlug: string;
}

export function FeedbackButtons({ categorySlug: _categorySlug, problemSlug: _problemSlug }: FeedbackButtonsProps) {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  if (feedback) {
    return (
      <div className="p-6 bg-muted/50 rounded-xl border border-border mt-8 text-center">
        <p className="text-primary font-medium text-lg">Shukriya! Aapka feedback humari help karta hai.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-muted/30 rounded-xl border border-border mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-medium text-lg">Kya yeh solution kaam kiya?</p>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() => setFeedback("up")}
          className="hover:bg-green-50 hover:text-green-700 hover:border-green-200"
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          Haan
        </Button>
        <Button
          variant="outline"
          onClick={() => setFeedback("down")}
          className="hover:bg-red-50 hover:text-red-700 hover:border-red-200"
        >
          <ThumbsDown className="w-4 h-4 mr-2" />
          Nahi
        </Button>
      </div>
    </div>
  );
}

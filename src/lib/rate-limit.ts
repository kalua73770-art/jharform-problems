// Simple rate limiter using localStorage (client-side)
// For production, use server-side rate limiting with Redis or similar

interface RateLimitEntry {
  timestamp: number;
  count: number;
}

const RATE_LIMIT_KEY = 'jharform_form_submissions';
const MAX_ATTEMPTS = 5;
const TIME_WINDOW = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const createDefaultEntry = (now: number): RateLimitEntry => ({ timestamp: now, count: 0 });

const safeReadEntry = (stored: string | null): RateLimitEntry | null => {
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored) as Partial<RateLimitEntry>;
    if (
      parsed &&
      typeof parsed.timestamp === 'number' &&
      Number.isFinite(parsed.timestamp) &&
      typeof parsed.count === 'number' &&
      Number.isFinite(parsed.count)
    ) {
      return {
        timestamp: parsed.timestamp,
        count: Math.max(0, Math.floor(parsed.count)),
      };
    }
  } catch {
    // Ignore corrupt JSON and fall back to a clean record below.
  }

  return null;
};

const normalizeEntry = (entry: RateLimitEntry, now: number): RateLimitEntry => {
  if (now - entry.timestamp > TIME_WINDOW) {
    return createDefaultEntry(now);
  }
  return entry;
};

export const checkRateLimit = (): { allowed: boolean; remaining: number; resetTime: number } => {
  if (typeof window === 'undefined') {
    return { allowed: true, remaining: MAX_ATTEMPTS, resetTime: 0 };
  }

  const now = Date.now();
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const parsed = safeReadEntry(stored);
  const data = normalizeEntry(parsed ?? createDefaultEntry(now), now);

  if (!parsed && stored) {
    localStorage.removeItem(RATE_LIMIT_KEY);
  }

  const isAllowed = data.count < MAX_ATTEMPTS;

  return {
    allowed: isAllowed,
    remaining: Math.max(0, MAX_ATTEMPTS - data.count),
    resetTime: data.timestamp + TIME_WINDOW,
  };
};

export const recordSubmission = (): void => {
  if (typeof window === 'undefined') return;

  try {
    const now = Date.now();
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const parsed = safeReadEntry(stored);
    const data = normalizeEntry(parsed ?? createDefaultEntry(now), now);

    data.count += 1;
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Rate limit record error:', error);
  }
};

export const formatResetTime = (resetTime: number): string => {
  if (resetTime === 0) return '';

  const now = Date.now();
  const remaining = resetTime - now;

  if (remaining <= 0) return 'Abhi';

  const hours = Math.floor(remaining / (60 * 60 * 1000));
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));

  if (hours > 0) {
    return `${hours} ghante ${minutes} minute mein`;
  }
  return `${minutes} minute mein`;
};

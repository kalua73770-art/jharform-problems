// Sentry is optional in this repo. Keep these helpers as no-ops unless a
// real integration is added back with the dependency installed.

export const initSentry = () => {
  return;
};

export const captureException = (_error: Error, _context?: Record<string, any>) => {
  return;
};

export const captureMessage = (
  _message: string,
  _level: "info" | "warning" | "error" = "info"
) => {
  return;
};

export const startTransaction = (_name: string) => {
  return null;
};

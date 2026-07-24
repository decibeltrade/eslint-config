// Type-aware violations; requires oxlint --type-aware (tsgolint).
async function doWork(): Promise<void> {
  return Promise.resolve();
}

export function floatingPromise(): void {
  // typescript/no-floating-promises MUST flag this call.
  doWork();
}

export function unsafeCall(value: unknown): void {
  // typescript/no-unsafe-call MUST flag this call.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (value as any)();
}

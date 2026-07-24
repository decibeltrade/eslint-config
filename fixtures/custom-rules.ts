// Each statement below MUST be flagged by the corresponding custom rule.
declare function globalAccountsState(): void;
declare function globalPerpEngineState(): void;
declare const client: { getAccountResource: () => void };

export function violations(): void {
  globalAccountsState();
  globalPerpEngineState();
  client.getAccountResource();
}

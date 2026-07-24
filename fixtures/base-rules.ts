// Classic (non-type-aware) violations for rules carried over from the ESLint config.
export function explicitAny(value: any): void {
  // typescript/no-explicit-any MUST flag the parameter above.
  // eslint/object-shorthand MUST flag the longhand property below.
  const wrapped = { value: value };
  console.log(wrapped);
}

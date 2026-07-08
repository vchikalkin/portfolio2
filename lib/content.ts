export function isPlaceholder(value: string): boolean {
  return value.trim().toUpperCase().startsWith('TODO');
}

export function hasValue(value: string | null | undefined): value is string {
  return Boolean(value && !isPlaceholder(value));
}

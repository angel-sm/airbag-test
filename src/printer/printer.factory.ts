export interface PrinterFactory {
  print<T extends { print: () => void }>(items: T | T[]): void
}

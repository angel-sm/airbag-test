import { PrinterFactory } from './printer.factory';

/**
 * Class implementing the PrinterFactory interface to handle printing of items.
 * The Printer class can print individual items or an array of items that have a `print` method.
 * @implements {PrinterFactory}
 */
export class Printer implements PrinterFactory {
  /**
   * Prints a single item or an array of items that each have a `print` method.
   * If the input is an array, it iterates over the array and prints each item.
   *
   * @param {T[] | T} items - A single item or an array of items, each having a `print` method.
   * @template T - The type of the items, which must have a `print` method.
   */
  print<T extends { print: () => void }>(items: T[] | T): void {
    if (Array.isArray(items)) {
      items.forEach((item) => item?.print());
    } else {
      items.print();
    }
  }
}

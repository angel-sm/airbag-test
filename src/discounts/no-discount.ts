import { DiscountFactory } from './discount.factory';

/**
 * Class implementing the DiscountFactory interface that applies no discount.
 * This class returns the original total amount without any modifications.
 * @implements {DiscountFactory}
 */
export class NoDiscount implements DiscountFactory {
  /**
   * Returns the original total amount without applying any discount.
   *
   * @param {number} total - The original total amount before the discount.
   * @returns {number} The total amount without any discount applied (same as the original total).
   */
  applyDiscount(total: number): number {
    return total;
  }
}

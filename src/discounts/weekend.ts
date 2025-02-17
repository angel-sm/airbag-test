import { DiscountFactory } from './discount.factory';

/**
 * Class implementing the DiscountFactory interface to apply a weekend discount.
 * The weekend discount applies a 10% discount on the total amount.
 * @implements {DiscountFactory}
 */
export class WeekendStrategy implements DiscountFactory {
  /**
   * Applies a 10% weekend discount to the total amount.
   *
   * @param {number} total - The original total amount before the discount.
   * @returns {number} The total amount after applying the weekend discount (90% of the original total).
   */
  applyDiscount(total: number): number {
    return total * 0.9;
  }
}

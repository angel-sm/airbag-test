import { DiscountFactory } from './discount.factory';

/**
 * Class implementing the DiscountFactory interface to apply a Black Friday discount.
 * The Black Friday discount applies a 50% discount on the total amount.
 * @implements {DiscountFactory}
 */
export class BlackFridayStrategy implements DiscountFactory {
  /**
   * Applies the Black Friday discount to the total amount.
   * The discount is a 50% reduction of the original total.
   *
   * @param {number} total - The original total amount before the discount.
   * @returns {number} The total amount after applying the Black Friday discount.
   */
  applyDiscount(total: number): number {
    return total * 0.5;
  }
}

export interface DiscountFactory {
  applyDiscount(total: number): number;
}

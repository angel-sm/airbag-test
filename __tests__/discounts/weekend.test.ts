import { WeekendStrategy } from '../../src/discounts/weekend'

describe("NoDiscountStrategy", () => {
  let strategy: WeekendStrategy;

  beforeEach(() => {
    strategy = new WeekendStrategy();
  });

  it('should apply a 10% discount to the total', () => {
    const total = 100;
    const discountedTotal = strategy.applyDiscount(total);

    expect(discountedTotal).toBe(90);
  });

  it('should return 0 if the total is 0', () => {
    const total = 0;
    const discountedTotal = strategy.applyDiscount(total);

    expect(discountedTotal).toBe(0);
  });
});
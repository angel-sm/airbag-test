import { NoDiscount } from '../../src/discounts/no-discount'

describe("NoDiscountStrategy", () => {
  let strategy: NoDiscount;

  beforeEach(() => {
    strategy = new NoDiscount();
  });

  it("should return same total", () => {
    const total = 100;
    const discountedTotal = strategy.applyDiscount(total);

    expect(discountedTotal).toBe(100);
  });
});
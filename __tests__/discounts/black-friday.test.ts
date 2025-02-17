import { BlackFridayStrategy } from '../../src/discounts/black-friday'

describe("BlackFridayStrategy", () => {
  let strategy: BlackFridayStrategy;

  beforeEach(() => {
    strategy = new BlackFridayStrategy();
  });

  it("should apply a 50% discount", () => {
    const total = 100;
    const discountedTotal = strategy.applyDiscount(total);

    expect(discountedTotal).toBe(50);
  });

  it("should return 0 if total is 0", () => {
    expect(strategy.applyDiscount(0)).toBe(0);
  });

  it("should correctly apply discount on different values", () => {
    expect(strategy.applyDiscount(200)).toBe(100);
    expect(strategy.applyDiscount(50)).toBe(25);
  });
});
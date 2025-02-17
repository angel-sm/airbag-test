import { ShoppingCart } from '../src';
import { Product } from '../src/product.entity';
import { DiscountFactory } from '../src/discounts/discount.factory';
import { BlackFridayStrategy } from '../src/discounts/black-friday';
import { PrinterFactory } from '../src/printer/printer.factory';
import { Printer } from '../src/printer/console-printer';
import { WeekendStrategy } from '../src/discounts/weekend';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;
  let product: Product;
  let mockPrinter: PrinterFactory;
  let mockDiscount: DiscountFactory;

  beforeEach(() => {
    product = Product.create('Test Product', 100);
    mockPrinter = { print: jest.fn() } as any;
    mockDiscount = { applyDiscount: jest.fn() } as any;
    cart = new ShoppingCart(mockDiscount, mockPrinter);
  });

  it('should add an item and update total price', () => {
    cart.addItem(product);
    expect(cart.getTotal).toBe(100);
  });

  it('should remove an item and update total price', () => {
    cart.addItem(product);
    cart.removeItem('Test Product');
    expect(cart.getTotal).toBe(0);
  });

  it('should print the list of items', () => {
    cart.addItem(product);
    cart.printItems();
    expect(mockPrinter.print).toHaveBeenCalledWith([product]);
  });

  it('should apply BlackFriday  discount  strategy', () => {
    const blackFridayStrategy = new BlackFridayStrategy();
    cart.setDiscountStrategy = blackFridayStrategy;
    cart.addItem(product);
    cart.applyDiscount();
    console.log(cart.getTotal);
    expect(cart.getTotal).toBe(50);
  });

  it('should update the discount strategy', () => {
    const weekendStrategy = new WeekendStrategy();
    cart.setDiscountStrategy = weekendStrategy;
    cart.addItem(product);
    cart.applyDiscount();
    console.log(cart.getTotal);
    expect(cart.getTotal).toBe(90);
  });
});

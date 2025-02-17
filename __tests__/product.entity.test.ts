// Product.test.ts
import { Product } from '../src/product.entity';

describe('Product', () => {
  let product: Product;

  beforeEach(() => {
    product = Product.create('Test Product', 100);
  });

  it('should create a product with the correct attributes', () => {
    const productAttributes = product.toPrimitive;
    expect(productAttributes.name).toBe('Test Product');
    expect(productAttributes.price).toBe(100);
  });

  it('should have default values when no arguments are passed', () => {
    const defaultProduct = Product.create();
    const productAttributes = defaultProduct.toPrimitive;
    expect(productAttributes.name).toBe('Default Product');
    expect(productAttributes.price).toBe(0);
  });

  it('should print the correct product information', () => {
    console.log = jest.fn(); // Mock console.log

    product.print();

    expect(console.log).toHaveBeenCalledWith('Test Product - $100');
  });
});

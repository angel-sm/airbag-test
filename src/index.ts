import { BlackFridayStrategy } from './discounts/black-friday';
import { DiscountFactory } from './discounts/discount.factory';
import { NoDiscount } from './discounts/no-discount';
import { Printer } from './printer/console-printer';
import { PrinterFactory } from './printer/printer.factory';
import { Product } from './product.entity';

/**
 * Class representing a shopping cart that can hold items, apply discounts, and print the cart.
 * The cart maintains a list of items, calculates the total price, and applies a discount strategy.
 * @class
 */
export class ShoppingCart {
  private items: Product[] = [];
  private totalPrice: number = 0;

  /**
   * @constructor
   * @param {DiscountFactory} [discountStategy=new NoDiscount()] - The strategy used to apply discounts to the total price.
   * @param {PrinterFactory} [printer=new Printer()] - The printer used to print items in the cart.
   */
  constructor(
    private discountStategy: DiscountFactory = new NoDiscount(),
    private printer: PrinterFactory = new Printer(),
  ) {}

  /**
   * Adds a product to the shopping cart and updates the total price.
   * 
   * @param {Product} product - The product to add to the shopping cart.
   * @returns {void}
   */
  addItem(product: Product): void {
    this.items.push(product);
    this.totalPrice += product.toPrimitive.price;
  }

  /**
   * Removes a product from the shopping cart based on its name and updates the total price.
   * 
   * @param {string} name - The name of the product to remove from the cart.
   * @returns {void}
   */
  removeItem(name: string): void {
    for (let i = 0; i < this.items.length; i++) {
      const product = this.items[i].toPrimitive;
      if (product.name === name) {
        this.totalPrice -= product.price;
        this.items.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Logs and returns the total price of the items in the shopping cart.
   * 
   * @returns {number} The total price of the items in the cart.
   */
  get getTotal(): number {
    console.log('Total price: ' + this.totalPrice);
    return this.totalPrice;
  }

  /**
   * Prints the items in the shopping cart using the specified printer strategy.
   * 
   * @returns {void}
   */
  printItems(): void {
    this.printer.print(this.items);
  }

  /**
   * Applies the current discount strategy to the total price of the cart.
   * 
   * @returns {void}
   */
  applyDiscount(): void {
    this.totalPrice = this.discountStategy.applyDiscount(this.totalPrice);
  }

  /**
   * Sets a new discount strategy for the shopping cart.
   * 
   * @param {DiscountFactory} strategy - The new discount strategy to apply.
   * @returns {void}
   */
  set setDiscountStrategy(strategy: DiscountFactory) {
    this.discountStategy = strategy;
  }

  /**
   * Sets a new printer strategy for printing items in the cart.
   * 
   * @param {PrinterFactory} printer - The new printer strategy to use for printing items.
   * @returns {void}
   */
  set setPrinter(printer: PrinterFactory) {
    this.printer = printer;
  }
}

const blackFridayStrategy = new BlackFridayStrategy();
const cart = new ShoppingCart();

const apple = Product.create('Apple', 10);
const bannana = Product.create('Banana', 20);
cart.addItem(apple);
cart.addItem(bannana);

cart.setDiscountStrategy = blackFridayStrategy;
cart.removeItem('Apple');
cart.getTotal;
cart.printItems();

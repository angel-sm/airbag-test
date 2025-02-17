interface PrimitiveProduct {
  name: string;
  price: number;
}

/**
 * Class representing a product, with the ability to create, access its primitive attributes, and print them.
 * @class
 */
export class Product {
  constructor(private attributes: PrimitiveProduct) {}

  /**
   * Creates a new Product instance with optional parameters for name and price.
   * If no name or price is provided, default values are used.
   *
   * @param {string} [name='Default Product'] - The name of the product.
   * @param {number} [price=0] - The price of the product.
   * @returns {Product} A new Product instance.
   */
  public static create(
    name: string = 'Default Product',
    price: number = 0,
  ): Product {
    return new Product({
      name,
      price,
    });
  }

  /**
   * Retrieves the primitive attributes of the product (name and price).
   * @readonly
   * @returns {PrimitiveProduct} The primitive product attributes.
   */
  public get toPrimitive() {
    return this.attributes;
  }

  /**
   * Prints the name and price of the product to the console.
   * @returns {void}
   */
  public print() {
    console.log(this.attributes.name + ' - $' + this.attributes.price);
  }
}

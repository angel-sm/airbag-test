import { Printer } from '../../src/printer/console-printer';

describe('Printer', () => {
  let printer: Printer;

  beforeEach(() => {
    printer = new Printer();
  });

  it('should call print method on a single item', () => {
    const item = { print: jest.fn() }; // Mock the print method

    printer.print(item);

    expect(item.print).toHaveBeenCalled(); // Check that print was called
  });

  it('should call print method on each item in an array', () => {
    const item1 = { print: jest.fn() };
    const item2 = { print: jest.fn() };
    const items = [item1, item2];

    printer.print(items);

    expect(item1.print).toHaveBeenCalled();
    expect(item2.print).toHaveBeenCalled();
  });
});

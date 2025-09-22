export class Stack<T = number> {
  private _items: T[] = [];
  private _maxSize: number;

  constructor(maxSize: number) {
    this._maxSize = maxSize;
  }

  public push(item: T) {
    if (this._items.length > this._maxSize) {
      throw "stack is full";
    }
    this._items.push(item);
  }

  public pop(): T | undefined {
    return this._items.pop();
  }

  public peak(): T | undefined {
    return this._items.length ? this._items[this._items.length - 1] : undefined;
  }

  public isFull(): boolean {
    return this._items.length === this._maxSize;
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): void {
    this._items = [];
  }

  public size(): number {
    return this._items.length;
  }

  public display(): T[] {
    return this._items;
  }
}

const stack: Stack = new Stack(10);

stack.push(10);
stack.push(1);
stack.push(0);
stack.push(7);
stack.push(-2);

console.log(stack.display());
console.log(stack.pop());
console.log(stack.peak());
console.log(stack.isFull());
console.log(stack.isEmpty());
console.log(stack.display());
console.log(stack.clear());
console.log(stack.display());

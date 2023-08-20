class Queue<T = number> {
  private _items: Record<number, T> = {};
  private _head: number = 0;
  private _tail: number = 0;

  constructor() {}

  public push(item: T): void {
    this._items[this._tail] = item;
    this._tail++;
  }

  public pop(): T {
    const item: T = this._items[this._head];
    delete this._items[this._head];
    this._head++;
    return item;
  }

  public peak(): T {
    return this._items[this._head];
  }

  public isEmpty(): boolean {
    return Object.keys(this._items).length === 0;
  }

  public display(): Record<number, T> {
    return this._items;
  }
}

const queue: Queue<number> = new Queue<number>();

queue.push(9);
queue.push(12);
queue.push(15);
queue.push(2);
queue.push(5);

console.log(queue.display());
console.log(queue.peak());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.display());
console.log(queue.isEmpty());

class Queue<T = number> {
  private _items: Record<number, T> = {};
  private _front: number = 0;
  private _rear: number = 0;

  constructor() {}

  public enqueue(item: T): void {
    this._items[this._rear] = item;
    this._rear++;
  }

  public dequeue(): T {
    const item: T = this._items[this._front];
    delete this._items[this._front];
    this._front++;
    return item;
  }

  public peak(): T {
    return this._items[this._front];
  }

  public isEmpty(): boolean {
    return Object.keys(this._items).length === 0;
  }

  public display(): Record<number, T> {
    return this._items;
  }
}

const queue: Queue<number> = new Queue<number>();

queue.enqueue(9);
queue.enqueue(12);
queue.enqueue(15);
queue.enqueue(2);
queue.enqueue(5);

console.log(queue.display());
console.log(queue.peak());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.display());
console.log(queue.isEmpty());

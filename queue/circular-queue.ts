class CircularQueue<T> {
  public _items: (T | null)[];
  public _capacity: number;
  public _currentLength: number = 0;
  public _rear: number = -1;
  public _front: number = -1;

  constructor(capacity: number) {
    this._items = new Array(capacity);
    this._capacity = capacity;
  }

  public isFull() {
    return this._currentLength === this._capacity;
  }

  public isEmpty() {
    return this._currentLength === 0;
  }

  public enqueue(element: T): void {
    if (!this.isFull()) {
      this._rear = (this._rear + 1) % this._capacity;
      this._items[this._rear] = element;
      this._currentLength += 1;
      if (this._front === -1) {
        this._front = this._rear;
      }
    }
  }

  public dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item: T | null = this._items[this._front];
    this._items[this._front] = null;
    this._front = (this._front + 1) % this._capacity;
    this._currentLength--;
    if (this.isEmpty()) {
      this._front = -1;
      this._rear = -1;
    }
    return item;
  }

  public peek(): T | null {
    if (!this.isEmpty()) {
      return this._items[this._front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i: number;
      let str: string = "";
      for (i = this._front; i !== this._rear; i = (i + 1) % this._capacity) {
        str += this._items[i] + " ";
      }
      str += this._items[i];
      console.log(str);
    }
  }
}

const q: CircularQueue<number> = new CircularQueue<number>(5);

console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

console.log(q.isFull());
q.print();

console.log(q.dequeue());
console.log(q.peek());
q.print();

q.enqueue(60);
console.log(q.dequeue());
q.print();

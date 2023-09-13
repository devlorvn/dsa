type ElementType<T = number> = { value: T; priority: number };

class PriorityQueue<T = number> {
  private _items: ElementType<T>[] = [];

  constructor() {}

  push(item: T, priority: number) {
    const element: ElementType<T> = { value: item, priority: priority };
    let contain: boolean = false;

    for (let i = 0; i < this._items.length; i++) {
      if (this._items[i].priority > element.priority) {
        this._items.splice(i, 0, element);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this._items.push(element);
    }
  }

  pop(): ElementType<T> | undefined {
    if (this.isEmpty()) return undefined;
    return this._items.shift();
  }

  peak(): ElementType<T> | undefined {
    if (this.isEmpty()) return undefined;
    return this._items[0];
  }

  rear(): ElementType<T> | undefined {
    if (this.isEmpty()) return undefined;
    return this._items[this._items.length - 1];
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  display(): ElementType<T>[] {
    return this._items;
  }
}

const priorityQueue: PriorityQueue<string> = new PriorityQueue<string>();

priorityQueue.push("A", 1);
priorityQueue.push("C", 3);
priorityQueue.push("D", 4);
priorityQueue.push("B", 2);
priorityQueue.push("a", 1);
console.log(priorityQueue.display());

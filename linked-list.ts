class Node<T> {
  public next: Node<T> | null;
  public prev: Node<T> | null;
  public value: T;
  constructor(value: T) {
    this.value = value
  }
};

export class LinkedList<T = number> {
  private _head: Node<T> | null = null;
  private _size: number = 0;

  constructor() {}

  push(item: T) {
    const newNode: Node<T> = new Node<T>(item)

    if (!this._head) {
      this._head = newNode;
    } else {
      let current: Node<T> = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this._size++;
  }

  insertAt(item: T, index: number): boolean {
    if (index === 0) {
        const newNode: _Node<T> = {
            value: item,
            next: null,
          };
          newNode.next = this._head;
          this._head = newNode;
        return true
    }

    if (index < 0 || index > this._size) {
        return false
    }

    let current = this._head;
    while (--index) {
        if (this._head)
    }
      this._size++;
      return true;
    
  }
}

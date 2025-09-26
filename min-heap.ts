export class MinHeap {
  private heap: number[] = [];
  private size: number = 0;

  constructor() {}

  add(num: number): void {
    this.heap.push(num);
    this.size++;
    this.bubbleUp();
  }

  bubbleUp(): void {
    let index: number = this.size - 1;
    while (index > 0) {
      let parentIndex: number = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}
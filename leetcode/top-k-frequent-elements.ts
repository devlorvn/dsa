import { MinHeap } from "@datastructures-js/heap";
type HeapElement = {
  num: number;
  count: number;
};

function topKFrequent(nums: number[], k: number): number[] {
  const freq: { [key: number]: number } = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;

  const heap = new MinHeap<HeapElement>((value: HeapElement) => value.count);
  for (const [numStr, count] of Object.entries(freq)) {
    heap.push({ num: Number(numStr), count });
    if (heap.size() > k) heap.pop();
  }

  return heap.toArray().map((el) => el.num);
}

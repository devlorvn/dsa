const recursiveBS = (items: number[], key: number, start: number, end: number): number => {
  if (start > end) {
    return -1;
  }
  const mid: number = Math.floor((start + end) / 2);
  if (items[mid] === key) return mid;
  else if (items[mid] > key) return recursiveBS(items, key, start, mid - 1);
  else return recursiveBS(items, key, mid + 1, end);
};

const iterativeBS = (items: number[], key: number): number => {
  let start: number = 0,
    end = items.length - 1;
  while (start <= end) {
    let mid: number = Math.floor((start + end) / 2);

    if (items[mid] === key) return mid;
    else if (items[mid] < key) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

const array: number[] = [1, 2, 7, 3, 9, 4, 1];

const sortedArray: number[] = array.sort((a, b) => a - b);

console.log(sortedArray);

console.log(recursiveBS(sortedArray, 5, 0, sortedArray.length));
console.log(recursiveBS(sortedArray, 4, 0, sortedArray.length));
console.log(iterativeBS(sortedArray, 2));
console.log(iterativeBS(sortedArray, 10));

// Big-O = O(logn)

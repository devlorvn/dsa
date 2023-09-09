function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const mid: number = Math.floor(arr.length / 2);

  const leftArr: number[] = arr.slice(0, mid);
  const rightArr: number[] = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]) {
  const sortedArr: number[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift() as number);
    } else {
      sortedArr.push(rightArr.shift() as number);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr: number[] = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

// Big-O = O(nlogn)

function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  let pivot: number = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr: number[] = [8, 20, -2, 4, -6];
quickSort(arr);
console.log(arr);

// worst case = O(n^2)
// AVG case = O(nlogn);
// tốn nhiều bộ nhớ

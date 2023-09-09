function insertSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert: number = arr[i];
    let j: number = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

let arr: number[] = [8, 20, -2, 4, -6];
insertSort(arr);
console.log(arr);

// Big-O = O(n^2)

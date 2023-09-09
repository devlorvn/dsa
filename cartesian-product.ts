function cartesianProduct(arr1: number[], arr2: number[]) {
  const result: number[][] = [];
  arr1.forEach((el1: number) => {
    arr2.forEach((el2: number) => result.push([el1, el2]));
  });
  return result;
}

const arr1: number[] = [1, 2];
const arr2: number[] = [3, 4, 5];

console.log(cartesianProduct(arr1, arr2));

// Big-O = O(nm)

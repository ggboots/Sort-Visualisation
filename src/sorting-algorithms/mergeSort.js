// divide array into smaller subarrays, sorting each subarray,
// and then merging the sorted arrays back together to form
// divide algorithm log

export const mergeSort = (array, animations = []) => {
  // check that array is can be divide, for edge cases
  if (array.length === 1) {
    return array;
  }

  const midValue = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, midValue));
  const secondHalf = mergeSort(array.slice(midValue));
  const sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sortedArray.push(firstHalf[i++]);
    } else {
      sortedArray.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) {
    sortedArray.push(firstHalf[i++]);
  }
  while (j < secondHalf.lenght) {
    sortedArray.push(secondHalf[j++]);
  }
  return sortedArray;
};

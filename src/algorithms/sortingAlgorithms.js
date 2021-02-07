export function mergeSorts(array) {
  if (array.length === 1) return array;
  // breaks the array in half
  const middleIdx = Math.floor(array.length / 2);
  // saves the fist half of the array to left array
  const leftArray = mergeSorts(array.slice(0, middleIdx));
  // saves the right half to the array to right array
  const rightArray = mergeSorts(array.slice(middleIdx));
  // the new sorted array will be saved in here
  const sortedArray = [];

  let i = 0,
    j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i]);
      // without adding the shift the array if just basically looping through the first set of datas and is not able to move on because its all the same
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[j]);
      rightArray.shift();
    }
  }

  // while (i < leftArray.length) sortedArray.push(leftArray[i++]);
  // while (j < rightArray.length) sortedArray.push(rightArray[j++]);
  return sortedArray.concat(leftArray).concat(rightArray);
}

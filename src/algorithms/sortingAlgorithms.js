export const mergeSort = (array) => {
  if (array.length === 1) return array;
  // breaks the array in half
  const middleIdx = Math.floor(array.length / 2);
  // saves the fist half of the array to left array
  const leftArray = mergeSort(array.slice(0, middleIdx));
  // saves the right half to the array to right array
  const rightArray = mergeSort(array.slice(middleIdx));
  // the new sorted array will be saved in here
  const sortedArray = [];

  let i = 0,
    j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i]);
      // code wasnt working before because we weren't removing the first index of the array
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[j]);
      rightArray.shift();
    }
  }

  // while (i < leftArray.length) sortedArray.push(leftArray[i++]);
  // while (j < rightArray.length) sortedArray.push(rightArray[j++]);
  return sortedArray.concat(leftArray).concat(rightArray);
};

export const bubbleSort = (array) => {
  let swapping = true;

  while (swapping) {
    // while swapping is true keep sorting if its false stop
    swapping = false;
    // keep on looping until you reach second to the last array index
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // saves the neighbouring array to the current array in a temp const
        const temp = array[i + 1];
        // saves the current array to the neighbouring array because its bigger than the neighbouring array
        array[i + 1] = array[i];
        // saves the temp or neighbouring to the current array because the old current array is bigger than the neighbouring indx
        array[i] = temp;

        // while loop will keep on traking as long as there are data in the array
        swapping = true;
      }
    }
  }

  return array;
};

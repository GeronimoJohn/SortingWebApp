export const mergeSort = (array) => {
  const length = array.length;
  if (length === 1) {
    return array;
  }

  const mid = Math.floor(length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid, length);
  const sortedArray = [];

  let i = 0,
    j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      sortedArray.push(leftArray[i++]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[j++]);
      rightArray.shift();
    }
  }

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

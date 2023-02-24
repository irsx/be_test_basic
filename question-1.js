const arr = [5, 2, 8, 12, 1, 8, 19];

// FUNCTION 1 
// Berapa kompleksitas waktu fungsi dibawah ini?
function firstSortFunction(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log('firstSortFunction ->', firstSortFunction(arr)); 
// END OF FUNCTION 1

// FUNCTION 2
// Berapa kompleksitas waktu fungsi dibawah ini?
function secondSortFunction(arr) {
  if (arr.length <= 1) return arr;
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(secondSortFunction(left), secondSortFunction(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log('secondSortFunction ->', secondSortFunction(arr)); 
// END OF FUNCTION 2








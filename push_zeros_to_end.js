// CodeWars challenge: Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.
//

function moveZeros(arr) {
  //track the position of the nonZeroIndex element
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
}

const arrangedArray = moveZeros([1, 0, 3, 0, 7, 5, 7, 8]);
console.log(arrangedArray);

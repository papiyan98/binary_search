function binary_search(array, target) {
  let infimum = 0;
  let supremum = array.length - 1;

  while (infimum <= supremum) {
    let middle = Math.floor((infimum + supremum) / 2);

    if (array[middle] == target) {
      return middle;
    } else if (array[middle] > target) {
      supremum = middle - 1;
    } else if (array[middle] < target) {
      infimum = middle + 1;
    }
  }

  return null;
}

const numArr = [];

for (let i = 1; i < 1000000; i += 2) {
  numArr.push(i);
}

let input = prompt('Enter the odd number (1-999999)', '');

let result = binary_search(numArr, input);

console.log('Index of digit to search for', result);
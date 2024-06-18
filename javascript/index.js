// custom map method

Array.prototype.customMap = function (callback) {
  // Create an empty array to store the mapped values
  const mappedArray = [];

  // Iterate over each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function with the current element and index
    const mappedValue = callback(this[i], i, this);

    // Add the mapped value to the new array
    mappedArray.push(mappedValue);
  }

  // Return the new mapped array
  return mappedArray;
};

// Example usage:
const numbers = [1, 2, 3];
const squaredNumbers = numbers.customMap((num) => num * num);
//console.log(squaredNumbers); // Output: [1, 4, 9]

// custom filter method
Array.prototype.customFilter = function (callback) {
  // Create an empty array to store filtered elements
  const filteredArray = [];

  // Iterate over each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function with the current element and index
    if (callback(this[i], i, this)) {
      // If the callback returns true, add the element to the filtered array
      filteredArray.push(this[i]);
    }
  }

  // Return the filtered array
  return filteredArray;
};

// Example usage:
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.customFilter((num) => num % 2 === 0);
//console.log(evenNumbers); // Output: [2, 4]

// custom reduce method

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});

// console.log(sum);


// map vs foreach 

const arr = [1,2,3,4,5,6]

const mapResult = arr.map((ar) => {
    return ar + 2
})

const forEachResult = arr.forEach((ar,i) => {
    // return ar + 2
    arr[i] = ar + 2
})

//console.log(mapResult)
console.log(arr) // this does not return anything. prints undefined
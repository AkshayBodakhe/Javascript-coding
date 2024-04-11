// custom map method

Array.prototype.customMap = function(callback) {
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
  const squaredNumbers = numbers.customMap(num => num * num);
  console.log(squaredNumbers); // Output: [1, 4, 9]
  
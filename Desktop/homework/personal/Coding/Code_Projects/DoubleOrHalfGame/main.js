// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.



const squareOrSquareRoot = arr => arr.map((int) => Number.isInteger(Math.sqrt(int))? Math.sqrt(int):Math.pow(int,2))

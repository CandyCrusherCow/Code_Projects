//Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(...arr){
    let newArr = arr.filter((x) => !(arr[0]%x ===0))
   return newArr.length===0
   }
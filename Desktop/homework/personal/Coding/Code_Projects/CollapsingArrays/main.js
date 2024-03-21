// Task
// Write a function that takes an array containing numbers and functions. The output of the function should be an array of only numbers. So how are we to remove the functions from the array?

// All functions must be applied to the number before it prior to the function being discarded from the array. It is as if the functions are collapsing left in the array modifying the first number to the left of the function. The functions should apply in order of index in the array. After a function has been applied to the number before it, it should be "removed" from the array to allow any following functions to also modify that new number.

// Example
// [ 3, f(x) = x + 2, f(x) = x * 5, 4, f(x) = x - 1 ] => [ 25, 3 ]

// function operationArguments(arr){
 
//   if(arr.length>0 && !(arr[0] === Number(arr[0]))){
//            arr.unshift(0)}
 
//        let xArr = arr.filter((n)=>n===Number(n))

// let i = -1
// let p = 0
// let x = 0


// let Array =[]

// for(let j = 0;j<arr.length;j++){
//   if(j===(arr.length-1)&& arr[j]===Number(arr[j])){
//     Array.push(arr[j])
//   }else if(arr[j]===Number(arr[j])&& !(arr[j+1] === Number(arr[j+1]))){
//      i += 1
//     x = xArr[i]
//     Array.push('pop')
//   }else if(arr[j]===Number(arr[j])&& (arr[j+1] === Number(arr[j+1]))){
//     Array.push(arr[j])
  
//   }else{
//       x = arr[j](x)
//     Array.push(x)
//   }
// }
// let product =[]
// for(let k=0;k<Array.length;k++){
// if(Array[k] == 'pop'){
  
// }else if(Array[k-1]== 'pop' && Array[k+1]=='pop'){
//   product.push(Array[k])
// }else if(Array[k+1]=='pop'|| k===Array.length-1){ 
//   product.push(Array[k])
// }
// }  
  
//   if(arr.filter((n)=>n===Number(n)).length === arr.length){
//     return arr
//   }else{return product}
  

// }

// the solution above is alomst complete i couldnt figure out how to deal with long lengths of numbers 

function operationArguments(arr){
    const q= [];
    
    for(const x of arr)
      q.push(typeof x === 'function'? x(q.pop()??0):x);
    
    return q
  }
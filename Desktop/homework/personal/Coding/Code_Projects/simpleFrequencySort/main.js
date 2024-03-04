// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve(arr){
    if(arr.includes((a)=>a<10)){
   let sorted = arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]).sort((a,b)=>a-b)
   let result = []
   let results= []
   for(let i=0;i<sorted.length;i++){
     result.push(arr.filter((num)=>num===sorted[i]))
   }
    
   let Array= result.sort((a,b)=>b.length-a.length)
     return results.concat(...Array)}
    else{
    return [...arr].sort((a,b) => (arr.filter(e => e==b).length-arr.filter(e => e==a).length)||a-b);
  
    }
  }
// In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

// Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

// For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

// More examples in the test cases.


function solve(a,b) {
  
    if(a.length>b.length){
     // b.map((letter)=>a.filter((L)=>L===letter).length>1? 0:a.length-b.length)
      const A = [...a];
      const B = [...b];
      for(let i = 0; i < B.length ; i ++){
        const index = A.indexOf(B[i])
        if(index === -1) return 0
        A.splice(index,1)
      } 
      return A.length
      
    }else{
      return 0
    }
    };
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



function switcheroo(x){
    let word = x.split('')
    for(let i=0;i<word.length;i++){
       if(word[i] == 'a'){
        word[i]='b'
      }else if(word[i] =='b'){
               word[i] = 'a'
               }
    }
      return word.join('') 
    
    }
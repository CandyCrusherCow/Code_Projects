// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".



//first solution Design 

//function disemvowel(str) {
//   let vowels = ['a','e','i','o','u']
//   let string = str.replaceAll('a','').replaceAll('A','').replaceAll('e','').replaceAll('E','').replaceAll('i','').replaceAll('I','').replaceAll('o','').replaceAll('O','').replaceAll('u','').replaceAll('U','')
//   return string;
// }

function disemvowel(str){
    let vowels = ['a','e','i','o','u','A','E','I','O',"U"]
    for(let i=0;i<vowels.length;i++){
     str = str.replaceAll(vowels[i],'')
      }
    return str 
  }
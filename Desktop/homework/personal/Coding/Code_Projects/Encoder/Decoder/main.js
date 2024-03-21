// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.


var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

let string = ""

function SubstitutionCipher(abc1, abc2) {
  
  this.encode = function (str) {
    let string = ""
    for(let i=0;i<str.length;i++){
      if (abc1.indexOf(str[i])<0){
     string += str[i]
    }else{
      let letter = str[i]
      let index = abc1.indexOf(letter)
      
     string += abc2[index]
    }
      }
    
    return string
    //...
  }
  this.decode = function (str) {
   let string = ""
    for(let i=0;i<str.length;i++){
      if (abc1.indexOf(str[i])<0){
      string += str[i]
    }else{
      let letter = str[i]
      let index = abc2.indexOf(letter)
      
      string += abc1[index]
    }
      }
    return string
    //...
  }
}
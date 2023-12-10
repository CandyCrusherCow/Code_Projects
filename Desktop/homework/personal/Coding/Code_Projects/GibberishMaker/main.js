// Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

// Notes:

// Spaces and special characters should remain the same.
// Capital letters should transfer in the same way but remain capitilized.
// Examples
// "Hello"               -->  "Ifmmp"
// "What is your name?"  -->  "Xibu jt zpvs obnf?"
// "zoo"                 -->  "app"
// "zzZAaa"              -->  "aaABbb"

const alpha ={
    A:'B', a:'b',
    B:'C',b:'c',
    C:'D',c:'d',
    D:'E',d:'e',
    E:'F',e:'f',
    F:'G',f:'g',
    G:'H',g:'h',
    H:'I',h:'i',
    I:'J',i:'j',
    J:'K',j:'k',
    K:'L',k:'l',
    L:'M',l:'m',
    M:'N',m:'n',
    N:'O',n:'o',
    O:'P',o:'p',
    P:'Q',p:'q',
    Q:'R',q:'r',
    R:'S',r:'s',
    S:'T',s:'t',
    T:'U',t:'u',
    U:'V',u:'v',
    V:'W',v:'w',
    W:'X',w:'x',
    X:'Y',x:'y',
    Y:'Z',y:'z',
    Z:'A',z:'a',
  }
  
  function nextLetter(str) {
    if (str.length > 0) return str.replace(/./g, c => alpha[c] || c)
  }
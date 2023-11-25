// Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.

// All cards in the list are represented as strings, so that sorted list of cards looks like this:

// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']


function sortCards(array){
    for(let i = 0;i<array.length;i++){
      if(array[i]=='A'){
    array[i]= 1}
      else if(array[i]== 'T'){
        array[i] = 10
      }
      else if(array[i]== 'J'){
    
    array[i] = 11
      }else if(array[i]== 'Q'){
    
    array[i] = 12
      }else if(array[i]== 'K'){
    
    array[i] = 13}
      }
      array.sort((a,b)=> a-b)
      for(let i = 0;i<array.length;i++){
      if(array[i]==1){
    array[i]= 'A'}
      else if(array[i]== 10){
        array[i] = 'T'
      }
      else if(array[i]== 11){
    
    array[i] = 'J'
      }else if(array[i]== 12){
    
    array[i] = 'Q'
      }else if(array[i]== 13){
    
    array[i] = 'K'}
      }
      return array
      }

      //alternative solution 

      function sortCards(array){
        const sorted = 'A23456789TJQK'
        return array.sort((a,b)=> sorted.indexOf(a)-sorted.indexOf(b))
        }
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".


function balance(left,right){
 
    let countLeft = left.split('').map((sym)=> sym == '!' ?  2 : 3 ).reduce((acc,curr)=>acc+curr,0)
    let countRight = right.split('').map((sym)=> sym == '!' ?  2 : 3 ).reduce((acc,curr)=>acc+curr,0)
    if(countLeft>countRight){
      return "Left"
    }else if(countRight>countLeft){
      return 'Right'
    }else{
      return 'Balance'
    }
}
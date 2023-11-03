// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = 'Fanta'
favDrink = favDrink.trim()

console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let fruits = [ 'apple', 'banana', 'kiwi','grapes']

console.log(fruits.includes('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors (){
    let outcome = Math.random()
if (outcome<=0.3){
    return 'rock'
}
else if( 0.3<outcome<=0.6){
    return 'paper'
}else{ return 'scissors'}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function prize(person){
    let bot = rockPaperScissors()
    if(person=='paper' && bot=='rock' ||person=='rock' && bot=='scissors' || person=='scissors' && bot=='paper' ){
        return console.log(' You have won')
    }
    else if(person === bot){
        return console.log('It is a tie try again')
    }
    else{
        return console.log('HAHA bot beat you')
    }
}
prize('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let botChoices = ['rock','paper','scissors']

function playTime(arr){
    arr.forEach(choice => prize(choice))
}

playTime(botChoices
)

//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [5,5,5,5,5,5,5,5,5,,5,5,5,5]

let sum = 0
nums.forEach((sum) =>sum+=nums[i])
//     alert(sum)

// let sum = nums.reduce((acc,c)=> acc + c, 0)

alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squaredArr(arr){
    arr.map(arr[i]^2)
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(arr){
    console.log(arr.reverse())
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palidormeChecker(word){
    let orginalWord = word.split()
    let reverseWord = originalWord.reverse()

    if (originalWord===reverseWord){
        alert('This is a palindrome')
    }else{alert('This is not a Palindrome')}

}
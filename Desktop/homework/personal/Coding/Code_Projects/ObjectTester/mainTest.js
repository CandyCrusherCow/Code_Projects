const bob = {
    series : {
      1: [1,2,4,6],
      2: [4,2,6,8,'test']
    },
    jobs: {
      developer:['jr.developer', 'developer','sr.developer','developer'],
      consultant: ['consutant I', 'consutant II','consutant I','consutant III'],
    },
    items: [{123:{'location 1': 5, 'location 2': 6}},{234:{'location 1': 10, 'location 2': 15}},{235:{'location 1': 15, 'location 2': 3,'location':7}},{'ipad':{'location 1': 2, 'location 2': 3}}]
  }
  // Summ up how much each item has for ex(123) and has 11 
  //new object 

  let itemTotals = {

  }
//first get items property
let itemObj = bob.items
console.log(itemObj)
//loop through array of objects
for ( let key in itemObj){
    console.log(itemObj[key])
    //values of those object 
    for( let loc in itemObj[key]){
        console.log(itemObj[key][loc])
        itemTotals[Object.keys(itemObj[key])] = Object.values(itemObj[key][loc]).reduce((acc,curr)=>acc+curr,0)
    }
}

console.log(itemTotals)

//

  // Update header text
  //document.querySelector('#header').innerHTML = object['series']['1'][0]
  
  //TASKS
  //Sum up everything in series as long as it is a number
  //Get into bob series

  //concat the 2 arrays 
  let seriesArr=[]
for(let arr in bob.series){
  console.log(bob.series[arr])
  seriesArr = seriesArr.concat(...bob.series[arr])
}
console.log(seriesArr)
  //filter and  reduce the arrays 
  let seriesTot = seriesArr.reduce((acc,curr)=> curr!=Number(curr)?acc:acc+curr,0)
  console.log('series total', seriesTot)
  
  //Remove all duplicate jobs and return 2 objects with unique jobs
 
  //Give me the total number of items on hand
  

//Create an Array and sum the values using forEach , map, every  ,and reduce 
let nums = [5,5,5,5,5]

let forEachTotal = 0
nums.forEach((val)=>forEachTotal+=val)
console.log('forEach', forEachTotal)

let mapTot = 0
nums.map((val)=>mapTot += val)
console.log('map',mapTot)

let everyTot=0
nums.every((val)=>everyTot+=val)
console.log('every', everyTot)


console.log('reduce',nums.reduce((acc,curr)=>acc+curr,0))

 //Create a car Object(literal notation and other one), then clone object, Display window in the console and how many parts  
 let honda = {
    color:'Pink',
    parts:['widow','wheel','tiger']
 }

 let clone = structuredClone(honda)

 console.log(honda.color)
console.log(honda.parts[1], honda.parts.length)
 // Use Map to create an object bike, create 3 properties, display the value of each property in console, console how many properties are in the object. check if the bike has parts 

 let bike = new Map();

 bike.set('parts',['wheel','handleBars','brake','stand'])
 bike.set('color','pink')
 bike.set('accessories', ['helemt','sparkles'])

 console.log(bike.values())
 console.log(bike.get('parts'),bike.get('color'),bike.get('accessories'))
 console.log(bike.has('parts'))
 console.log(bike.size)




 //make arr of Numbers, sort all the numbers from least to most, then subtract them all. using reduce, map and for each 
let arrNums = [10,563,84,5,17]

arr = arrNums.sort((a,b)=>b-a)
console.log(arr)

console.log('reduce', arr.reduce((acc,curr,i)=>(i===0?curr:acc-curr),arr[0]))

let mapTotal = arr[0]
arr.map((val)=> val==arr[0]?mapTotal:mapTotal=mapTotal-val)
console.log('map',mapTotal)

let everyTotal = arr[0];

arr.every((val)=>val==arr[0]?everyTotal:everyTotal=everyTotal-val)

console.log('every', everyTotal)
 // Create a variable called string , then replace all o with x 
let string = ' Box fox mox cocx joxc tox'

console.log(string.replaceAll('o','x'))

 //creat a switch case  checking the fruit, the cases console logging the name of the fruit 
 let fruit = 'kiwi'
switch (fruit) {
  case 'Banana':
    console.log(fruit)
    break;

  default:
    console.log('That fruit is gross')
    break;
}


 //Create a Do while loop, while loop and a for loop when the count reaches 0 its stop
// let i = 10 
// do {
//     console.log('Hello World!')
//     i--
// } while (i>0);

//  let j = 10
// while(j>0){
//   j= j-1
//   console.log('while','Hello World!')
// }

// for(let k=10;k>0;k=k-1){
//   console.log("For Loop", "Hello World")
// }

for(let i= 10; i>0; i--){
  console.log('For Loop','Hello World!')
}

for(let i=0;i<10;i++){
  console.log('For Loop','Hello')
}

let j=10
do {
  j--
  console.log('doWhile','Hello World')
} while (j>0);

let k = 10
while (k>0) {
  k--
  console.log('While','Hello World!')
  
}

 //Create an Object, clone the object 
let bobsBurgers = {
    'Main Characters':['Tina','Bob','Linda','Gene','Louise'],
    genre:['comedy','cartoon'],
    seasons:13,
    startYear:2011
}

bobsBurgers.introduction= function(){
    console.log(`This is a ${this.genre} it has ${this.seasons} seasons, premiered ${this.startYear}`)
}

bobsBurgers.introduction()

 //create a constructor 

 class Family{
constructor(name,age,nickName,occupation){
    this.name = name,
    this.nickName = nickName,
    this.age = age,
    this.occupation =occupation


}
 }

 let andrea = new Family ('Andrea',55,'Angie','Unit Clerk')

 console.log(andrea)
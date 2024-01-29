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
  
  //Remove all duplicate jobs and return 2 objects with unique jobs
 
  //Give me the total number of items on hand
  

//Create an Array and sum the values using forEach , map, every  ,and reduce 


 //Create a car Object(literal notation and other one), then clone object, Display window in the console and how many parts  
 
 // Use Map to create an object bike, create 3 properties, display the value of each property in console, console how many properties are in the object. check if the bike has parts 


 //make arr of Numbers, sort all the numbers from least to most, then subtract them all. using reduce, map and for each 


 // Create a variable called string , then replace all o with x 


 //creat a switch case  checking the fruit, the cases console logging the name of the fruit 


 //Create a Do while loop, while loop and a for loop when the count reaches 0 its stop
 

 //Create an Object, clone the object 



 //create a constructor 

 
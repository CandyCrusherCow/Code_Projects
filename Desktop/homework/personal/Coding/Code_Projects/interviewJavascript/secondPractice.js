
/**
 * @typedef {Object} CustomerWithPayments
 * @property {string} name
 * @property {string} email
 * @property {InvoiceWithPayment[]} invoices
 * @property {number} totalDue
 */

/**
 * @typedef {Invoice & Payment} InvoiceWithPayment
 * @property {number} totalDue
 */

/**
 * Link the payments to the invoice via the customer name.
 * Include the payment amount and remaining total due as properties on the customer and invoice objects in CAD and invoice currency.
 * @param {Customer[]} customers
 * @param {Payment[]} payments
 * @return {CustomerWithPayments[]}
 *Expected outcome // [
//   {
//     name: 'ABC',
//     email: 'abc@test.com',
//     invoices: [
//       {doc: '1', dateCreated: '1/19/2023', amount: 30.126, docStatus: 'unpaid', currency: 'USD', paymentAmount: 30.126, totalDue: 0},
//       {doc: '2', dateCreated: '20/1/2023', amount: 50, docStatus: 'unpaid', currency: 'EUR', paymentAmount: 40, totalDue: 35},
//       {doc: '3', dateCreated: '2/10/2023', amount: 100, docStatus: 'paid', currency: 'CAD', paymentAmount: 80, totalDue: 20}
//     ],
//     totalDue: 55
 */
 
 function applyPayment(customers,payments,exchangeRates){
const customerWithPayments = [];
//applied amount property in payments 
payments.forEach((payment)=>{
payment.appliedAmount = 0
payment.invoices = [];
});
//console.log(payments)
//adding properties for amount in CAD and applied amount


 customers.forEach((obj)=>{
 obj.invoices.forEach((invoice)=>{
 if(invoice.currency==='CAD'){
  invoice.amountInCAD = invoice.amount
  
 }else{
 for(let i=0;i<exchangeRates.length;i++){
 if(exchangeRates[i].from === invoice.currency && exchangeRates[i].to === 'CAD'){
 let rate = exchangeRates[i].rate
 invoice.amountInCAD = invoice.amount * rate}
 }
 }
 invoice.remain = invoice.amountInCAD
 invoice.docStatus = 'unpaid'
 //console.log('invoice',invoice)
 }); 
 });
 
  payments.forEach((payment)=>{
 
 for(let i=0;i<customers.length;i++){
 if(payment.name === customers[i].name && payment.paymentAmount !== payment.appliedAmount){
 //console.log('we found a match','payment Doc',payment.doc)
  customers[i].invoices.forEach((invoice)=>{
//console.log({paymentAmount: payment.paymentAmount, paymentApplied: payment.appliedAmount,invoiceRemain: invoice.remain})
//console.log('invoice.remain',invoice.remain)
 if(invoice.remain===0 || payment.appliedAmount === payment.paymentAmount){
 return
 }else if(payment.paymentAmount - payment.appliedAmount >invoice.remain){
 payment.appliedAmount += invoice.remain 
 invoice.remain = 0
 invoice.docStatus = 'paid'
 payment.invoices.push({doc: invoice.doc,amountInCAD: invoice.amountInCAD, remaining: invoice.remain,applied: payment.appliedAmount,docStatus:invoice.docStatus})
 /* const app = 0>invoice.remain - payment.paymentAmount-payment.appliedAmount?invoice.remain:invoice.remain - payment.paymentAmount-payment.appliedAmount
 console.log('app',app)
 invoice.remain = invoice.remain -app
 payment.appliedAmount += app
 console.log('appAmo', payment.appliedAmount)
 payment.invoices.push(invoice) */
 }else if(payment.paymentAmount - payment.appliedAmount <=invoice.remain){
 invoice.remain = invoice.remain - (payment.paymentAmount-payment.appliedAmount)
 payment.appliedAmount = payment.paymentAmount
 payment.invoices.push({doc: invoice.doc,amountInCAD: invoice.amountInCAD, remaining: invoice.remain, applied: payment.appliedAmount, docStatus:invoice.docStatus})
 }else{console.log('error')}
 //console.log('invoice',invoice)
 }) 
 }
 }
 }) 
 
 
 
/*  const statments = customerStatement(customers,exchangeRates)
 statments.forEach((cust)=>{
 cust.toalRemainCAD = cust.totalAmountCAD
 });
 payments.forEach((payment)=>{
 for(let i=0;i<statments.length;i++){
 if(payment.name === statments[i].name){
 statments[i].toalRemainCAD =statments[i].toalRemainCAD - payment.paymentAmount
 if(statments[i].toalRemainCAD === 0){
 statments[i].fullyPaid = true
 }
 }
 }
 })
 customerWithPayments.push(statments) */
 
 
 return payments
 }



console.log('applyPayment:', applyPayment(customers, payments,exchangeRates));


/*
  Problem: Laboratory Chemical Inventory Management System
  You are developing a complex inventory management system for a laboratory's chemical storage.
  The inventory is represented as an array of storage units, where each storage unit is an object that contains a unit name and an array of chemicals.
  Each chemical is an object that includes the chemical name, its quantity in moles, its molar mass, and an array of properties (like state of matter, hazard classifications, etc.).
  Your task is to write a function that takes the current inventory array and an array of updates. Each update is an object that specifies the storage unit and includes an array of chemical updates.
  The chemical update objects can add new chemicals, update quantities, molar masses, and properties of existing chemicals, or even remove chemicals (if the quantity update is zero).
  Additionally, calculate the total mass of each chemical in grams, update the properties array as needed, and sort the chemicals alphabetically by name within each storage unit.
  The function should return the updated inventory array, with storage units sorted alphabetically and chemicals sorted alphabetically within each unit.
*/

const currentInventory = [
  {
    unit: 'Reactive Metals',
    chemicals: [
      { chemical: 'Lithium', quantity: 2, molarMass: 6.94, properties: ['Solid', 'Alkali Metal'] },
      { chemical: 'Sodium', quantity: 5, molarMass: 22.990, properties: ['Solid', 'Alkali Metal'] }
    ]
  },
  {
    unit: 'Noble Gases',
    chemicals: [
      { chemical: 'Helium', quantity: 10, molarMass: 4.0026, properties: ['Gas', 'Non-Reactive'] },
      { chemical: 'Neon', quantity: 8, molarMass: 20.180, properties: ['Gas', 'Non-Reactive'] }
    ]
  }
];

const updates = [
  {
    unit: 'Reactive Metals',
    chemicals: [
      { chemical: 'Potassium', quantity: 3, molarMass: 39.098, properties: ['Solid', 'Alkali Metal'] },
      { chemical: 'Sodium', quantity: -3, molarMass: 22.990, properties: ['Solid', 'Alkali Metal'] }
    ]
  },
  {
    unit: 'Noble Gases',
    chemicals: [
      { chemical: 'Argon', quantity: 5, molarMass: 39.948, properties: ['Gas', 'Non-Reactive'] },
      { chemical: 'Neon', quantity: 2, molarMass: 20.180, properties: ['Gas', 'Non-Reactive'] }
    ]
  }
];

function updateInventory(inventory, updates) {
//look through each update
  updates.forEach((unit)=>{
  //look through inventory
   for(let i=0;i<inventory.length;i++){
   //check if unit matches
   if(unit.unit === inventory[i].unit){
   //console.log('unit match', unit.unit)
   //look through each chemical in updates
   	unit.chemicals.forEach((chemical)=>{
    //compare each chemical from updates to inventory chemicals
   inventory[i].chemicals.forEach((original,index)=>{
   //update quanity in inventory 
   if(chemical.chemical === original.chemical){
   inventory[i].chemicals[index].quantity = original.quantity + chemical.quantity
   original.massGrams= original.quantity*original.molarMass
   //check if chemical already exists in inventory otherwise push to inventory
   }else if((inventory[i].chemicals.filter((x)=>x.chemical === chemical.chemical))<1){
   console.log('does no include',chemical.chemical)
   inventory[i].chemicals.push({chemical: chemical.chemical, quantity: chemical.quantity, molarMass: chemical.molarMass, properties: chemical.properties,massGram:chemical.quantity*chemical.molarMass}) 
   }else{original.massGrams= original.quantity*original.molarMass}
   });
   });
    }
    inventory[i].chemicals.sort((a,b)=>a.chemical.localeCompare(b.chemical))
   }
   });
     return inventory
  }



// Example usage:
console.log(updateInventory(currentInventory, updates));
// Expected output:
// [
//   {
//     unit: 'Noble Gases',
//     chemicals: [
//       { chemical: 'Argon', quantity: 5, molarMass: 39.948, properties: ['Gas', 'Non-Reactive'], totalMass: 199.74 },
//       { chemical: 'Helium', quantity: 10, molarMass: 4.0026, properties: ['Gas', 'Non-Reactive'], totalMass: 40.026 },
//       { chemical: 'Neon', quantity: 10, molarMass: 20.180, properties: ['Gas', 'Non-Reactive'], totalMass: 201.80 }
//     ]
//   },
//   {
//     unit: 'Reactive Metals',
//     chemicals: [
//       { chemical: 'Lithium', quantity: 2, molarMass: 6.94, properties: ['Solid', 'Alkali Metal'], totalMass: 13.88 },
//       { chemical: 'Potassium', quantity: 3, molarMass: 39.098, properties: ['Solid', 'Alkali Metal'], totalMass: 117.294 },
//       // Sodium was removed because the new quantity is 2 (5 - 3) which is less than the threshold to keep in inventory.
//     ]
//   }
// ]
// Note: The totalMass is calculated as (quantity * molarMass). Assume a threshold quantity below which chemicals are removed from the inventory.

//Bob's Burgers Expenses 
/*
  Problem: Bob's Burgers Financial Ledger
  Bob's Burgers needs to keep track of its daily earnings and expenses to manage the restaurant's finances effectively.
  Your task is to write a function that processes financial transactions for Bob's Burgers.
  You will be given an object 'financialLedger' that contains dates as keys, each with an array of transactions.
  Each transaction is an object that includes a description, an amount, and a transaction type ('income' or 'expense').
  Your function should calculate the net income for each day and add it as a new property to the 'financialLedger'.
  Additionally, identify any days where expenses exceeded income and mark them for review.
  The function should return the updated 'financialLedger' object, with each day's net income and any necessary reviews.
*/

const financialLedger = {
  '03/24/2024': [
    { description: 'Burger sales', amount: 500, type: 'income' },
    { description: 'Vegetable purchase', amount: 50, type: 'expense' },
    { description: 'Ad campaign', amount: 100, type: 'expense' }
  ],
  '03/25/2024': [
    { description: 'Burger sales', amount: 600, type: 'income' },
    { description: 'Kitchen equipment', amount: 300, type: 'expense' }
  ],
  '03/26/2024': [
    { description: 'Burger sales', amount: 400, type: 'income' },
    { description: 'Rent payment', amount: 450, type: 'expense' },
    { description: 'Utility bill', amount: 100, type: 'expense' }
  ]
};

function processFinances(ledger) {
  // Your code here
  // Calculate net income for each day and identify days that need review.
  Object.keys(ledger).forEach((day)=>{
  //console.log(ledger[day] = 'hello')
  let net = ledger[day].reduce((acc,curr)=>curr.type === 'income'?acc+curr.amount:acc-curr.amount,0)
  //console.log('net',net)
  ledger[day]= {transaction:ledger[day],netIncome:net,needsReview:net<0?true:false}
  })
  
return ledger 
}

// Example usage:
console.log(processFinances(financialLedger));
// Expected output:
// {
//   '03/24/2024': {
//     transactions: [
//       { description: 'Burger sales', amount: 500, type: 'income' },
//       { description: 'Vegetable purchase', amount: 50, type: 'expense' },
//       { description: 'Ad campaign', amount: 100, type: 'expense' }
//     ],
//     netIncome: 350, // 500 income - 150 expenses
//   },
//   '03/25/2024': {
//     transactions: [
//       { description: 'Burger sales', amount: 600, type: 'income' },
//       { description: 'Kitchen equipment', amount: 300, type: 'expense' }
//     ],
//     netIncome: 300, // 600 income - 300 expenses
//   },
//   '03/26/2024': {
//     transactions: [
//       { description: 'Burger sales', amount: 400, type: 'income' },
//       { description: 'Rent payment', amount: 450, type: 'expense' },
//       { description: 'Utility bill', amount: 100, type: 'expense' }
//     ],
//     netIncome: -150, // 400 income - 550 expenses
//     reviewNeeded: true // Expenses exceeded income
//   }
// }
/*
  Problem: The Puzzling Cipher of Gravity Falls
  In the town of Gravity Falls, Dipper and Mabel have discovered a cryptic puzzle left behind by the enigmatic Grunkle Stan.
  Your task is to write a function that deciphers the codes to reveal the hidden messages.
  You will be given an object 'cipherTexts' with dates as keys, each containing a string encoded with a simple substitution cipher.
  The 'cipherKey' object provides the mapping of encoded characters to their actual characters.
  Your function should decode each message and return an object 'decodedMessages' with dates as keys and decoded strings as values.
  Additionally, identify any messages that contain the word 'treasure' and list the dates in an array 'treasureDates'.
  The function should return an object with two properties: 'decodedMessages' and 'treasureDates'.
*/

const cipherTexts = {
  '07/13': 'Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt',
  '08/03': 'R droo vevib xlnnzm gsviv zmw blf droo urihg rm gsv xzxp',
  // Add more cipher texts as needed
};

const cipherKey = {
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r',
  'f': 's', 'g': 't', 'h': 'u', 'i': 'v', 'j': 'w',
  'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b',
  'p': 'c', 'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l',
  'z': 'm', // Add more mappings as needed
  // Remember to include mappings for uppercase letters if needed
};

function decodeCipher(texts, key) {
console.log('test',cipherKey['a'])
  // Your code here
  const decodedMessages ={}
  
  const treasureDates = []
  Object.keys(texts).forEach((message)=>{
  let decodedMessage = cipherTexts[message].toLowerCase().split('').map((letter)=>{
  if(letter !== ' '){
  return cipherKey[letter]
  }else{return ' '}
  }).join('')
  decodedMessages[message] = decodedMessage
  if(decodedMessage.includes('treasure')){
  treasureDates.push({message})
  }
  });
  
  return [decodedMessages,treasureDates]
  // Decode each message and identify 'treasure' dates.
}
console.log('decode Cipher:', decodeCipher(cipherTexts,cipherKey))

/*
  Problem: Love Island Matchmaking Algorithm
  On Love Island, a group of contestants, known as Islanders, must couple up with another Islander to survive and win the prize.
  Your task is to write a function that determines the compatibility of couples based on their preferences and attributes.
  You will be given an array of Islanders, each represented as an object with various attributes like name, age, interests, and type (which describes their ideal match).
  The function should pair Islanders together based on how many interests they share and whether their 'type' matches the other's attributes.
  The function should return an array of couples, each represented as an object with the names of the two Islanders.
  Additionally, identify the couple with the highest compatibility score and return their names as the 'topCouple'.
  The function should return an object with two properties: 'couples' and 'topCouple'.
*/

const islanders = [
  { name: 'Amber', age: 25, interests: ['dancing', 'fitness', 'cooking'], type: 'adventurous' },
  { name: 'Greg', age: 27, interests: ['law', 'rugby', 'poetry'], type: 'intellectual' },
  { name: 'Molly', age: 22, interests: ['fashion', 'travel', 'blogging'], type: 'creative' },
  { name: 'Tommy', age: 24, interests: ['boxing', 'fitness', 'dogs'], type: 'sporty' },
  { name: 'Lucie', age: 21, interests: ['surfing', 'modelling', 'fitness'], type: 'adventurous' },
  { name: 'Curtis', age: 23, interests: ['dancing', 'cooking', 'fitness'], type: 'caring' },
  { name: 'Anna', age: 28, interests: ['makeup', 'law', 'fashion'], type: 'intellectual' },
  { name: 'Jordan', age: 24, interests: ['basketball', 'gaming', 'fashion'], type: 'laid-back' },
  // Add more islanders as needed
];

function findLoveIslandCouples(islanders) {
  const couples =[];
  const topCouple = []
  for(let i =0;i<islanders.length;i++){
  const matches = islanders.filter((islander)=>islander.type===islanders[i].type && islander.name !==islanders[i].name?islander: undefined);
  let compatabilty =0
    if(matches[0]){
  		islanders[i].interests.forEach((intrest)=>{
      if(matches[0].interests.includes(intrest)){
      compatabilty += 1 
      }
      })
  topCouple.push({name:islanders[i],score:compatabilty})
  }
  
   // console.log(islanders[i].name + ' matches with ',...matches)
    let match = [islanders[i].name,matches[0]?matches[0].name:'No Match'].sort();
 
    if( couples.filter((x)=>x[0]===match[0]).length<1 && match[1] !== 'No Match' && match[0] !== 'No Match'){
    couples.push(match)
    }
  }
  console.log(couples)
  console.log(topCouple)
 
}
console.log('findLoves',findLoveIslandCouples(islanders))

// Example usage:
//const result = findLoveIslandCouples(islanders);
//console.log(result.couples); // Shows the paired up couples
//console.log(result.topCouple); // Shows the couple with the highest compatibility score

/*
  Problem: Dog Park Adventure
  You're creating a simulation of a dog park where various dogs interact with each other.
  Your task is to write a function that models the behavior of dogs in the park based on their personalities and activities.
  You will be given an array of dog objects, each with attributes like name, breed, energy level, and favorite activity.
  The function should simulate a day at the park by describing which dogs play together based on their favorite activities and energy levels.
  The function should return an array of playgroups, each represented as an object with the names of the dogs in the group and their shared activity.
  Additionally, identify the most popular activity in the park and return it as 'favoriteParkActivity'.
  The function should return an object with two properties: 'playgroups' and 'favoriteParkActivity'.
*/

const dogs = [
  { name: 'Maple', breed: 'Goldendoodle', energyLevel: 8, favoriteActivity: 'fetch' },
  { name: 'Casper', breed: 'Labrador', energyLevel: 7, favoriteActivity: 'swimming' },
  { name: 'Rika', breed: 'Golden Retriver', energyLevel: 10, favoriteActivity: 'jumping' },
  { name: 'Peaches', breed: 'Toy Poodle', energyLevel: 3, favoriteActivity: 'sitting' }, 
 { name: 'Goldielocks', breed: 'Goldendoodle', energyLevel: 7, favoriteActivity: 'chasing' },
  { name: 'Benji', breed: 'Poodle', energyLevel: 6, favoriteActivity: 'chasing' }, 
 { name: 'Blaze', breed: 'Golden Retriever', energyLevel: 2, favoriteActivity: 'sitting' },
  { name: 'Clancy', breed: 'Poodle', energyLevel: 7, favoriteActivity: 'sitting' }, 
{ name: 'Leon', breed: 'German Sheppard', energyLevel: 7, favoriteActivity: 'swimming' }
  // Add more dogs as needed
];

function simulateDogPark(dogs) {
const playgrounds = [];
const activities = [{activity:'fetch',score:0},{activity:'swimming',score:0},{activity:'jumping',score:0},{activity:'sitting',score:0},{activity:'chasing',score:0}]
for(let i= 0;i<dogs.length;i++){
let matches =[]
dogs.forEach((dog,index)=>Math.abs(dog.energyLevel - dogs[i].energyLevel)<2 && i !== index && dog.favoriteActivity === dogs[i].favoriteActivity?matches.push(dog.name):undefined);

if(matches.length && playgrounds.filter((match)=>match.favoriteActivity===dogs[i].favoriteActivity).length === 0){
playgrounds.push({name:dogs[i].name + ', '+ matches,favoriteActivity:dogs[i].favoriteActivity })
}
activities.forEach((activity)=>dogs[i].favoriteActivity===activity.activity?activity.score+=1:undefined)
}
const TopActivity = activities.sort((a,b)=> a.score -b.score)[activities.length-1].activity
console.log(TopActivity)
return playgrounds
  //https://jsfiddle.net/boilerplate/responsive-css-grid#
  // Simulate playgroups and determine the favorite park activity.
}

console.log('DOGPARK:',simulateDogPark(dogs))

// Example usage:
//const result = simulateDogPark(dogs);
//console.log(result.playgroups); // Shows the playgroups formed at the park
//console.log(result.favoriteParkActivity); // Shows the most popular activity in the park
/*
  Problem: Virtual Shopping Cart

  You are building a virtual shopping cart for an e-commerce website.
  Your task is to implement a function that models the behavior of adding items to the cart, removing items from the cart, and calculating the total price of the items in the cart.

  You will be given an array of objects representing items available for purchase. Each item object will have properties like name, price, and quantity available.

  You will also be given an array of objects representing items added to the cart. Each cart item object will have properties like name, price, and quantity added to the cart.

*/

const availableItems = [
  { name: "Laptop", price: 999, quantity: 12 },
  { name: "Headphones", price: 99, quantity: 15 },
  { name: "Mouse", price: 29, quantity: 40 },
  { name: "Phone", price: 699, quantity: 22 },
  { name: "Tablet", price: 499, quantity: 15 },
  { name: "Watch", price: 349, quantity: 0 },
];

const cartItems = [
  { name: "Laptop", price: 999, quantity: 1 },
  { name: "Headphones", price: 99, quantity: 2 },
  // Add more cart items as needed
];

const newItems = [
  { name: "Laptop", quantity: 5 },
  { name: "Headphones", quantity: 3 },
  { name: "Watch", quantity: 6 },
];

//Task 1 - Calculate total inventory value
const totalValue = (availableItems) => {
    let inventoryValue = 0;
    availableItems.forEach((item)=> inventoryValue += item.price*item.quantity)
    return inventoryValue;
};
console.log('total Value',totalValue(availableItems))


// Task 2 - Provide items which have price higher than $100, sorted Descending order (10,9,8...0)
const highValueItems = (availableItems) =>{
   const HighestPrice =  availableItems.filter((item)=>item.price>100)
   HighestPrice.sort((a,b)=>b.price-a.price)
   return HighestPrice
}

console.log('HighValueItems',highValueItems(availableItems))


//Task 3 - A new shipment of product arrives, add the items to to availableItems
const updateInventory = (availableItems, newItems) => {
    newItems.forEach((item)=>{
    availableItems.forEach((element)=>{
    if(element.name === item.name){
    element.quantity = element.quantity + item.quantity
    }
    })
    });
    return availableItems
}

console.log('update Inventory',updateInventory(availableItems,newItems))

//Task 4
/* The function should support the following operations:
  1. Adding items to the cart.
  2. Removing items from the cart.
  3. Calculating the total price of all items in the cart.

  The function should return an object representing the state of the cart after performing the operations.

  You can assume that items added to the cart will always have valid quantities available in the inventory. */
const updateCart = (availableItems, cartItems, operation, itemName, quantity = 1) => {
  if(operation === 'add'){
  	availableItems.forEach((item)=>{
    if(item.name===itemName&& quantity<item.quantity){
    cartItems.push({ name:itemName, price: item.price, quantity: quantity })
    }
    })
  }
  if(operation === 'remove'){
  cartItems.forEach((item,index)=>{
  if(item.name === itemName){
  if(item.quantity === 1){
  cartItems.splice(index,1)
  }else{item.quantity = item.quantity-1}
  }
  })
  }
  if(operation === 'total'){
  const total =cartItems.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
  return total
  }
  return cartItems
  // Implement adding items to the cart, removing items from the cart, and calculating the total price
};

// Example usage:
// Adding items to the cart
const updatedCart1 = updateCart(availableItems, cartItems, "add", "Mouse", 3);
console.log(updatedCart1);

// Removing items from the cart
const updatedCart2 = updateCart(
  availableItems,
  cartItems,
  "remove",
  "Headphones",
  1
);
console.log(updatedCart2);

// Calculating total price
const totalPrice = updateCart(availableItems, cartItems, "total");
console.log('total Price:',totalPrice);

/*
  Problem: Student Grades

  You are tasked with implementing a system to manage student grades for a course.
  Your task is to write a set of functions to perform various operations on student grades.

  You will be given an array of objects representing students. Each student object will have properties like name, id, and grades.

  The grades property will be an array containing the grades (numeric values) the student has received.

  Your functions should support the following operations:

  1. Calculate the average grade for a given student.
  2. Calculate the average grade for the entire class.
  3. Determine the student with the highest average grade.
  4. Determine if any student has failed the course (average grade below 60).
  5. Add a new grade to a student's record.

  Your functions should handle edge cases such as empty arrays or missing grades for students.

  Implement the functions and provide usage examples.
*/

function calculateAverageGradeForStudent(student) {
  let sum = student.grades.reduce((acc,grade)=>acc+grade,0)
  return sum/student.grades.length
}

function calculateAverageGradeForClass(students) {
const grades = []
  students.forEach((student)=>{
    student.grades.forEach((grade)=>{
      grades.push(grade)
    });
  });
  let sum = grades.reduce((acc,grade)=>acc+grade,0)
  return sum/grades.length
}

function studentWithHighestAverageGrade(students) {
const Aver =[]
  students.forEach((student,index)=>{
  let sum = student.grades.reduce((acc,grade)=>acc+grade,0)
  Aver.push({average:sum/student.grades.length,name:students[index].name})
  students[index].average = sum/student.grades.length
  });
 // let highest = Aver.sort((a,b)=>a.average- b.average)
 let highest = 0
 for(let i=0;i<Aver.length;i++){
 if(Aver[i].average>highest){
 highest = Aver[i].average
 }
 }
  return Aver.filter((A)=> A.average === highest?A.name:undefined)
}

function anyStudentFailed(students) {
const Failures = []
 students.forEach((student)=>student.average<60?Failures.push(student):undefined)
 return Failures
}

function addGradeToStudent(student, grade) {
  student.grades.push(grade)
}

// Example usage:
const students = [
  { name: "Alice", id: 1, grades: [85, 68, 92] },
  { name: "Bob", id: 2, grades: [75, 80, 65] },
  { name: "Charlie", id: 3, grades: [70, 88, 92] },
  { name: "Saahir", id: 3, grades: [95, 92, 92] },
  { name: "Saahir", id: 3, grades: [40, 68, 62] }
  // Add more students as needed
];

const aliceAverageGrade = calculateAverageGradeForStudent(students[0]);
console.log("Alice's average grade:", aliceAverageGrade);

const classAverageGrade = calculateAverageGradeForClass(students);
console.log("Class average grade:", classAverageGrade);

const studentWithHighestAvg = studentWithHighestAverageGrade(students);
console.log("Student with highest average grade:", studentWithHighestAvg);

const anyFailed = anyStudentFailed(students);
console.log("Any student failed?", anyFailed);

addGradeToStudent(students[0], 88);
console.log("Alice's grades after adding a new grade:", students[0].grades);


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
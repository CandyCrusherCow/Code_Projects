
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
/**
 * @typedef {Object} Customer
 * @property {string} name
 * @property {string} email
 * @property {Invoice[]} invoices
 */

/**
 * @typedef {Object} Invoice
 * @property {string} doc
 * @property {string} dateCreated
 * @property {number} amount
 * @property {'paid' | 'unpaid'} docStatus
 */

/** @type {Customer[]} */
const customers = [
    {
      name: 'ABC',
      email: 'abc@test.com',
      invoices: [
        {doc: '1', dateCreated: '1/19/2023', amount: 30.126, docStatus: 'unpaid'},
        {doc: '2', dateCreated: '20/1/2023', amount: 50, docStatus: 'unpaid'},
        {doc: '3', dateCreated: '2/10/2023', amount: 100, docStatus: 'paid'},
      ],
    },
    {
      name: 'XYZ',
      email: 'xyz@test.com',
      invoices: [
        {doc: '4', dateCreated: '2/19/2023', amount: 10, docStatus: 'paid'},
        {doc: '5', dateCreated: '4/20/23', amount: 50, docStatus: 'paid'},
        {doc: '16', dateCreated: '1/1/2023', amount: 100, docStatus: 'paid'},
      ],
    },
    {
      name: 'DEF',
      email: 'def@test.com',
      invoices: [],
    },
  ];
  
  /**
   * @typedef {Object} Payment
   * @property {string} doc
   * @property {number} paymentAmount
   */
  
  /** @type {Payment[]} */
  const payments = [
    {doc: '1', paymentAmount: 30.126},
    {doc: '2', paymentAmount: 50},
    {doc: '3', paymentAmount: 60},
    {doc: '3', paymentAmount: 20},
    {doc: '4', paymentAmount: 5},
    {doc: '5', paymentAmount: 50},
  ];
  
  /**
   * The total amount of all invoices for all customers
   * @param {Customer[]} customers
   * @return {number}
   */
   
  const totalAmount = customers => {
  let invoicesTot = []
    //first get clients 
    customers.forEach((client)=>{
    //console.log(client.invoices.)
    client.invoices.forEach((doc)=>{
    //console.log(doc.amount)
    invoicesTot.push(doc.amount)
    })
    })
    return invoicesTot.reduce((acc,curr)=>acc+curr,0)
    //pushh to new arr and sum arr 
  };
  
  console.log('totalAmount:', totalAmount(customers));
  
  /**
   * Return all invoices that were created after 1/20/2023.
   * Filter out any invalid dates.
   * @param {Customer[]} customers
   * @return {Invoice[]}
   */
  const dateFilter = customers => {
  let invoicesValid = []
  let invoValid = []
  let dateCut = new Date('1/20/2023')
  //console.log('date milliseconds', dateCut.getTime())
  //using the new Date function allows to transform the date into miliseconds. 
    customers.forEach((client)=>{
    client.invoices.forEach((doc)=>{
    //now I push all the dates from the invoices 
    invoicesValid.push(doc.dateCreated)
   let dateee = new Date(doc.dateCreated)
   //here I filtered out the dates then pushed the valid invoices through
   if(dateee.getTime()>dateCut.getTime()){
   invoValid.push({doc})
   }
    })
    })
   // console.log(invoicesValid)
   //using the map function I use the milisecond variable to compare the dates to the cutoff date and remove 
   invoicesValid.map((val)=>{
  let date = new Date(val);
  if(date.getTime()<dateCut.getTime()){
  invoicesValid.splice(invoicesValid.indexOf(val),1)
  }
  })
   //returning invoValid return a list of invoices that were created after that date, invoicesValid returns a list of dates that the invoices were created after that date. I wasn't sure which response was correct so I just coded both
  return invoValid
  };
  
  console.log('dateFilter:', dateFilter(customers));
  
  /**
   * Return all customers with the total amount of each and if they have fully paid. Display amounts as a currency.
   * @param {Customer[]} customers
   * @return {{name: string, totalAmount: number, fullyPaid: boolean}[]}
   */
  const customerStatement = customers => {
  let paid = []
   //create each client total  
    customers.forEach((client)=>{
    let tot =client.invoices.reduce((invoiceTot, invoice) =>{
    return invoiceTot + invoice.amount;
      }, 0)
      //push paid status to its own arr
       let paidVal = []
    client.invoices.forEach((doc)=>{ 
    //  console.log( doc.docStatus)
      paidVal.push(doc.docStatus)
    
       
    })
    //return false is any doc is unpaid
    paid.push({'name':client.name,'totalAmount': tot, 'fullyPaid':paidVal.includes('unpaid')?false:tot==0?'no amount due':true})
    })
    return paid
    
  };
  
  console.log('customerStatement:', customerStatement(customers));
  
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
   * Link the payments to the invoice via the doc number.
   * Include the payment amount and remaining total due as properties on the customer and invoice objects.
   * @param {Customer[]} customers
   * @param {Payment[]} payments
   * @return {CustomerWithPayments[]}
   */
  const applyPayment = (customers, payments) => {
  let customerPayments = []
    
    customers.forEach((client)=>{
    
    client.invoices.forEach((doc)=>{
    
    
    })
    
    })
   
  };
  
  console.log('applyPayment:', applyPayment(customers, payments));
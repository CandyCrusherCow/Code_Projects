// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places.

function fuelPrice(litres, pricePer) {
    if(litres>= 10){
      return +((pricePer-0.25)*litres).toFixed(2)
    }else if(litres>=8){
      return +((pricePer -0.2)*litres).toFixed(2)}
    else if(litres>=6){
      return +((pricePer -0.15)*litres).toFixed(2)}
    else if(litres>=4){
      return +((pricePer-0.10)*litres).toFixed(2)
    }
    else if(litres>2){
      return +(pricePer -0.05)*litres
    }else{return +(pricePer*litres).toFixed(2)}
  }
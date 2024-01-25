// Given 2 pairs of values each representing a road (the number of cars on it and its name), construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.

// After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

// Example
// t = SmartTrafficLight([42, "27th ave"], [72, "3rd st"])
// t.turngreen()  ==  "3rd st"
// t.turngreen()  ==  "27th ave"
// t.turngreen()  ==  null

// t = SmartTrafficLight([10, "27th ave"], [10, "3rd st"])
// t.turngreen()  ==  null

class SmartTrafficLight {
    constructor(str1, str2) {
      this.str1 = str1
      this.str2 = str2
      this.i = 0
    }
    
    turngreen() {
      let [numOfCarsStr1,str1Name]=this.str1
      let [numOfCarsStr2,str2Name]=this.str2
      //labeled each element honestly can't tell if this made it easier or harder
      this.i++
      //this helps use count how many times the method has  run 
      switch(this.i){
          case 1:
        return numOfCarsStr1>numOfCarsStr2?str1Name: numOfCarsStr1===numOfCarsStr2? null: str2Name;
       // this is checking which street will  get the light first, so if my statment is false it will 
          //check if the streets have the same number of cars that will return null and if both statments 
          //are untrue than that must mean the second street must have more cars on it 
           case 2:
        return numOfCarsStr1>numOfCarsStr2?str2Name: numOfCarsStr1===numOfCarsStr2? null: str1Name;
          //based on the fist statment this is checking which street will get light second 
          default:
          return null
        }
      }
    }
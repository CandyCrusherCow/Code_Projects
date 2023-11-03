//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetfighterMaker(gender,weapon,ethnicity,top){
    this.gender = gender
    // this. gender is the property and = gender is the parameter
    this.weapon = weapon
    this.ethnicity = ethnicity
    this.top = top
    this.cathchPhrase = function (){
        console.log ('I am a witch')
    }
}

let evelyn = new StreetfighterMaker( 'female','samurai','mixed','black crop top')

// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
// TODO: create the character object here
let aurora={
    name: 'Aurora',
    health: 200,
    strength: 0,
    xp : 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this.xp} xp  and ${this
        .strength} as strength`
}
}
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

//Complete the following program to add the dog object definition.
//todo create Dog object 

const dog ={
    name :'Goldielocks',
    species:'Goldendoodle',
    size: '1 dog',
    bark(){
        return `WOOOF WOOF WOOOF WOOOF`}
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle={
    circumference(r){
        let c=r*Number(3.14)*2
        return c
    },
    area(r){
        let a= Number(3.14)*(r^2)
        return a
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

//create your boyfriend as an object 

const boyfriend = {
    Name: 'Saahir',
    Occupation: 'ERP Consultant/Pet Product Entrapnure/Property Manager',
    EyeColour: 'Brown',
    Height: "Evelyn's Height",
    Handsomness: 'Very',
    Funny: true,

    compliment(){
        return "Evelyn you are so beautiful"
    },
    describe(){
        return `Hi I am Evelyn's Boyfriend ${this.Name}, I have ${this.EyeColour}, I am this '${this.Handsomness}' level of Handsomeness, and my height is ${this.Height}`
    }
}
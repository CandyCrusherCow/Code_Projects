//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click',getDrink)

function getDrink (){
let drink =document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res => res.json())
.then (data => {console.log(data.drinks)
    let i = Math.round(Math.random()*(data.drinks.length))
console.log(data.drinks[i])
 document.querySelector('h2').innerText = data.drinks[i].strDrink
 document.querySelector('img'). src = data.drinks[i].strDrinkThumb
 document.querySelector('a').href = data.drinks[i].strVideo
document.querySelector('h3').innerText = data.drinks[i].strInstructions
let ingredientList ='Ingredient List\n'
let totalCount = 15
for(let a = 0; a < totalCount; a++){
    const lookupIngredient = 'strIngredient' + (a +1)
    const lookupMeasue = 'strMeasure' + (a +1)
    const newIngredient = data.drinks[i][lookupIngredient]
    const newMeasure = data.drinks[i][lookupMeasue]
    if(newIngredient && newMeasure) ingredientList += `${newMeasure} of ${newIngredient}\n`
}
console.log({ingredientList})
document.querySelector('p').innerText = ingredientList
})

// for (var a = 1; a<= 15; a++) {
//     let ingredient= "strIngredient" + a;
//     let measure= "strMeasure" + a;
//     if (data.drinks[0][measure] && data.drinks[0][ingredient]) {
//     console.log( `${data.drinks[0][measure]} of ${data.drinks[0][ingredient]}`)
//     }
// }})
.catch(err => {
    console.log(`error ${err}`)
})
}

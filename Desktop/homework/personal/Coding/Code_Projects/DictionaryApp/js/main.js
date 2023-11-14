document.querySelector('button').addEventListener('click',search)

function search (){
let word =document.querySelector('input').value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(res => res.json())
.then (data => {console.log(data)
//  document.querySelector('h2').innerText = data.drinks[0].strDrink
//  document.querySelector('img'). src = data.drinks[0].strDrinkThumb
// document.querySelector('h3').innerText = data.drinks[0].strInstructions
})
.catch(err => {
    console.log(`error ${err}`)
})
}


document.querySelector('button').addEventListener('click',search)

function search (){
let word =document.querySelector('input').value

    fetch(`https://openlibrary.org/search.json?title=${word}`)
.then(res => res.json())
.then (data => {console.log(data.docs[0])
  document.querySelector('h2').innerText = data.docs[0].title
//   document.querySelector('img'). src = `https://covers.openlibrary.org/a/olid/${data.doc[0].cover_edition_key}.jpg`
 document.querySelector('h3').innerText = data.docs[0].author_name
})
.catch(err => {
    console.log(`error ${err}`)
})
// fetch(`https://covers.openlibrary.org/a/olid/${data.doc[0].cover_edition_key}.jpg`)
// .then(res => res.json())
// .then (data => {console.log(data.docs[0])
//  document.querySelector('img'). src = `https://covers.openlibrary.org/a/olid/${data.doc[0].cover_edition_key}.jpg`
//  })
// .catch(err => {
//     console.log(`error ${err}`)
// })
}


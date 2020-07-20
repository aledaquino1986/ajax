let querySearch = new URLSearchParams(location.search)
let busqueda = querySearch.get("search")
let numero = querySearch.get("number")
const lista = document.querySelector("#lista");
const boton = document.querySelector("#boton")
const inputNumero = document.querySelector("#numero")


let url;

if (numero == "" || numero == 0) {
  url = `https://api.giphy.com/v1/gifs/search?api_key=5DGJ6z2PCeVztvJyNWg9S3O9EX75kxrV&q=${busqueda}&limit=&offset=0&rating=g&lang=en`
} else {
  url = `https://api.giphy.com/v1/gifs/search?api_key=5DGJ6z2PCeVztvJyNWg9S3O9EX75kxrV&q=${busqueda}&limit=${Number(numero)}&offset=0&rating=g&lang=en`
}


fetch(url)
.then(function(res){
return res.json()
})
.then(function(info){

  for (let i = 0; i < info.data.length ; i++) {
     
  let img = `<img src="${info.data[i].images.original.url}">`
  lista.innerHTML += `<li>${info.data[i].title} <br>${img} </li>`
}

})

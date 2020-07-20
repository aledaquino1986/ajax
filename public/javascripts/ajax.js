const titulo = document.querySelector("h1")
const boton = document.querySelector("#boton");

fetch("https://api.giphy.com/v1/gifs/random?api_key=5DGJ6z2PCeVztvJyNWg9S3O9EX75kxrV&tag=&rating=g")
.then(function(res){
return res.json()
})
.then(function(data){
console.log(data)

let url = data.data.image_original_url
let title = data.data.title

console.log(title)

titulo.innerHTML= title

let img = document.createElement("img");
img.src = url
titulo.after(img);

boton.addEventListener("click", function(e){
  window.location.href=window.location.href
})
})


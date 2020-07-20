const lista = document.querySelector("#lista");

fetch("https://api.giphy.com/v1/gifs/trending?api_key=5DGJ6z2PCeVztvJyNWg9S3O9EX75kxrV&limit=25&rating=g")
.then(function(response){
return response.json();
}).then(function(info){
  
  
  let preguntaUsuario;

  const preguntarAlUsuario = function(){
    preguntaUsuario = prompt("¿Cuántos gifs querés ver. Solo podés elegir hasta 25");
    if(preguntaUsuario > 25 || preguntaUsuario < 0) {
        preguntaUsuario = prompt("Ha elegido un número incorrecto. Por favor, elija un número del 1 al 25")
    }
  }

  preguntarAlUsuario();


  for (let i = 0; i < preguntaUsuario ;i++) {
    
     
     let img = `<img src="${info.data[i].images.original.url}">`
     lista.innerHTML += `<li>${info.data[i].title} <br>${img} </li>`
  }
})
let obras = [
  {titulo: "33 Questions per Minute", anio: "2019", imagen: "img/33 Questions per Minute - 2019.jpg"},
  {titulo: "Airborne Newscasts", anio: "2023", imagen: "img/Airborne Newscasts - 2023.jpg"},
  {titulo: "Babbage Lovelace", anio: "2019", imagen: "img/Babbage Lovelace - 2019.jpg"},
  {titulo: "Body Movies", anio: "2021", imagen: "img/Body Movies 2021.jpg"},
  {titulo: "Broken Mirror Poets", anio: "2026", imagen: "img/Broken Mirror Poets 2026.jpg"}
];

let imagenObra = document.querySelector("#imgObra");
let tituloObra = document.querySelector("#nombreObra");
let anioObra = document.querySelector("#fechaObra");
let botonSiguiente = document.querySelector("#btnSiguiente");
let botonAnterior = document.querySelector("#btnAnterior");
let indiceObras = 0;

function mostrarObra() {
  imagenObra.src = obras[indiceObras].imagen;      
  tituloObra.innerText = obras[indiceObras].titulo;  
  anioObra.innerText = obras[indiceObras].anio;   
}

botonSiguiente.addEventListener('click', function(){
  indiceObras++;
  
  if (indiceObras === obras.length) {
    indiceObras = 0;   
  }
  
  mostrarObra();
});


botonAnterior.addEventListener('click', function(){
  indiceObras--;
  if (indiceObras === -1) {
    indiceObras = obras.length - 1;
  }
  mostrarObra();
});

mostrarObra(); // recomendo IA, para que no quede vacio al cargar la pagina por primera vezs
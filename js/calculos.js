// form datos
let inputCantidad = document.querySelector("#cantidad");
let inputConsumoPorHora = document.querySelector("#consumoPorHora");
let inputCostoPorKwh = document.querySelector("#costoPorKwh");
let btnIniciar = document.querySelector("#btnIniciar");

// form obras
let inputNombreObra = document.querySelector("#nombreObra");
let inputCantidadLuces = document.querySelector("#cantidadLuces");
let inputTiempoLuces = document.querySelector("#tiempoLuces");
let btnAgregarObra = document.querySelector("#btnAgregarObra");

// resultados
let btnCalcular = document.querySelector("#btnCalcular");
let consumoTotal = document.querySelector("#consumoTotal");
let consumoPromedio = document.querySelector("#consumoPromedio");
let obraMaxTiempo = document.querySelector("#obraMaxTiempo");
let porcentajeLuces = document.querySelector("#porcentajeLuces");
let btnReiniciar = document.querySelector("#btnReiniciar");

let obras = [];              // array vacío, se va llenando con objetos
let cantidadObras;            // se asigna en btnIniciar
let consumoPorHora;            // se asigna en btnIniciar
let costoPorKwh;               // se asigna en btnIniciar

function habilitarDeshabilitar(elemento, estado) {
  elemento.disabled = estado;
}
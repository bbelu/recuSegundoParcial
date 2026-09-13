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


let obras = [];              
let cantidadObras;            
let consumoPorHora;           
let costoPorKwh;            

function habilitarDeshabilitar(elemento, estado) {
  elemento.disabled = estado;
}


btnIniciar.addEventListener('click', function(){
  let cantidadIngresada = Number(inputCantidad.value);
  let consumoIngresado = Number(inputConsumoPorHora.value);
  let costoIngresado = Number(inputCostoPorKwh.value);

  if (isNaN(cantidadIngresada) || cantidadIngresada <= 0) {
    alert("Por favor, ingrese una cantidad de obras válida.");
    return;
  }

  if (isNaN(consumoIngresado) || consumoIngresado <= 0) {
    alert("Por favor, ingrese un consumo por hora válido.");
    return;
  }

  if (isNaN(costoIngresado) || costoIngresado <= 0) {
    alert("Por favor, ingrese un costo por kWh válido.");
    return;
  }

  cantidadObras = cantidadIngresada;
  consumoPorHora = consumoIngresado;
  costoPorKwh = costoIngresado;

  habilitarDeshabilitar(inputCantidad, true);
  habilitarDeshabilitar(inputConsumoPorHora, true);
  habilitarDeshabilitar(inputCostoPorKwh, true);
  habilitarDeshabilitar(btnIniciar, true);

  habilitarDeshabilitar(inputNombreObra, false);
  habilitarDeshabilitar(inputCantidadLuces, false);
  habilitarDeshabilitar(inputTiempoLuces, false);
  habilitarDeshabilitar(btnAgregarObra, false);
});



btnAgregarObra.addEventListener('click', function(){
  let nombreIngresado = inputNombreObra.value;
  let cantidadLucesIngresado = Number(inputCantidadLuces.value);
  let tiempoLucesIngresado = Number(inputTiempoLuces.value);

 
 if (nombreIngresado.length < 2) {
  alert("El nombre debe tener al menos 2 caracteres.");
  return;
}
 
  if (isNaN(cantidadLucesIngresado) || cantidadLucesIngresado <= 0) {
    alert("Por favor, ingrese una cantidad de luces válida.");
    return;
  }

  if (isNaN(tiempoLucesIngresado) || tiempoLucesIngresado <= 0) {
    alert("Por favor, ingrese un tiempo de uso válido.");
    return;
  }


  let nuevaObra = {
  nombre: nombreIngresado,
  luces: cantidadLucesIngresado,
  tiempo: tiempoLucesIngresado
};

obras.push(nuevaObra);

inputNombreObra.value = "";
inputCantidadLuces.value = "";
inputTiempoLuces.value = "";

if (obras.length === cantidadObras) {
  habilitarDeshabilitar(inputNombreObra, true);
  habilitarDeshabilitar(inputCantidadLuces, true);
  habilitarDeshabilitar(inputTiempoLuces, true);
  habilitarDeshabilitar(btnAgregarObra, true);
  habilitarDeshabilitar(btnCalcular, false);
  habilitarDeshabilitar(btnReiniciar, false);
}

});


btnCalcular.addEventListener('click', function(){


  let consumoTotalCalculado = 0;
  for (let i = 0; i < obras.length; i++) {
    let consumoDeEstaObra = consumoPorHora * obras[i].tiempo * obras[i].luces;
    consumoTotalCalculado = consumoTotalCalculado + consumoDeEstaObra;
  }
  let consumoPromedioCalculado = consumoTotalCalculado / obras.length;

 
  let obraMax = obras[0];
  for (let i = 1; i < obras.length; i++) {
    if (obras[i].tiempo > obraMax.tiempo) {
      obraMax = obras[i];
    }
  }
  let costoObraMax = consumoPorHora * obraMax.tiempo * obraMax.luces * costoPorKwh;

  
  let contadorMasDe20 = 0;
  for (let i = 0; i < obras.length; i++) {
    if (obras[i].luces > 20) {
      contadorMasDe20++;
    }
  }
  let porcentajeCalculado = (contadorMasDe20 / obras.length) * 100;


  consumoTotal.innerText = "Consumo diario total: " + consumoTotalCalculado + " kWh";
  consumoPromedio.innerText = "Consumo diario promedio por obra: " + consumoPromedioCalculado + " kWh";
  obraMaxTiempo.innerText = "Obra con mayor tiempo de funcionamiento: " + obraMax.nombre + " - Costo diario: $" + costoObraMax;
  porcentajeLuces.innerText = "Porcentaje de obras con más de 20 luces: " + porcentajeCalculado + "%";

});

btnReiniciar.addEventListener('click', function(){

  
  obras = [];


  inputCantidad.value = "";
  inputConsumoPorHora.value = "";
  inputCostoPorKwh.value = "";
  inputNombreObra.value = "";
  inputCantidadLuces.value = "";
  inputTiempoLuces.value = "";


  consumoTotal.innerText = "";
  consumoPromedio.innerText = "";
  obraMaxTiempo.innerText = "";
  porcentajeLuces.innerText = "";

  
  habilitarDeshabilitar(inputCantidad, false);
  habilitarDeshabilitar(inputConsumoPorHora, false);
  habilitarDeshabilitar(inputCostoPorKwh, false);
  habilitarDeshabilitar(btnIniciar, false);

  habilitarDeshabilitar(inputNombreObra, true);
  habilitarDeshabilitar(inputCantidadLuces, true);
  habilitarDeshabilitar(inputTiempoLuces, true);
  habilitarDeshabilitar(btnAgregarObra, true);

  habilitarDeshabilitar(btnCalcular, true);
  habilitarDeshabilitar(btnReiniciar, true);

});

let totalInteresfijo;
let totalInteresCompuesto;


const CalcIntFijo = () => {

  let InputSalary = document.getElementById("InputSalary");
  let saldoInicial = parseInt( InputSalary.value);
  let tazaDeinteres = document.getElementById("InputTaza");
  let tazaDeCrecimientoAnual = parseInt(tazaDeinteres.value);
  let tiempo = document.getElementById("Tiempo");
  let tiempoInversion = tiempo.value;
  let periodoDeInversion = parseInt(tiempoInversion);

  const interes = saldoInicial * ((tazaDeCrecimientoAnual / 100) /12);
  interesMensual = interes;

  const ganancia = interesMensual * periodoDeInversion;
  gananciaMensual = ganancia;

  let suma = saldoInicial + gananciaMensual;
  totalInteresfijo = suma;

  const alert = document.getElementById("AlertResult");
  alert.className = "alert alert-primary";
  alert.innerText = `Tus Ganancias potenciales con interes fijo son $${totalInteresfijo}`;
  
  return totalInteresfijo;

};

const CalIntCompuesto = () => {

  let InputSalary = document.getElementById("InputSalary");
  let saldoInicial = parseInt( InputSalary.value);
  let tazaDeinteres = document.getElementById("InputTaza");
  let tazaDeCrecimientoAnual = parseInt(tazaDeinteres.value);
  let tiempo = document.getElementById("Tiempo");
  let periodoDeInversion = parseInt(tiempo.value);

  let interes = (tazaDeCrecimientoAnual / 100 ) / 12;

  let gananciaCompuesta = saldoInicial * (1 + interes ) ** periodoDeInversion;

  totalInteresCompuesto = gananciaCompuesta;

  const alert2 = document.getElementById("AlertResult2");
  alert2.className = "alert alert-primary";
  alert2.innerText = `Tus Ganancias potenciales con interes compuesto son: $${totalInteresCompuesto}`

  return totalInteresCompuesto;

};

const limpiarImputs = () => {
  const InputSalary = document.getElementById("InputSalary").value = "";
  const interes = document.getElementById("InputTaza").value= "";
  const tiempo = document.getElementById("Tiempo").value = "";

  const alert = document.getElementById("AlertResult");
  
  alert.className += "d-none"
  
  const alert2 = document.getElementById("AlertResult2");

}
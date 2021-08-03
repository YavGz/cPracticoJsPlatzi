let totalInteresfijo;

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
  alert.innerText = `Tus total con interes fijo son $${totalInteresfijo.toFixed(2)}`;
  
  return totalInteresfijo;

};

const CalIntCompuesto = () => {
  var gananciaCompuesta = 0;

  let InputSalary = document.getElementById("InputSalary");
  let saldo = parseInt( InputSalary.value);
  let tazaDeinteres = document.getElementById("InputTaza");
  let interes = parseFloat(tazaDeinteres.value);
  let tiempo = document.getElementById("Tiempo");
  let periodoDeInversion = parseInt(tiempo.value);

  for (let i = 0; i < periodoDeInversion; i++) {
    if (gananciaCompuesta == 0) {
      const interesASumar =  ( ( saldo * interes ) /100 ) / 12;     
      gananciaCompuesta = saldo + interesASumar;
    } else {
      const interesASumar =  ( ( gananciaCompuesta * interes ) /100 ) / 12;
      gananciaCompuesta = gananciaCompuesta +interesASumar;
    };
  };

  const alert2 = document.getElementById("AlertResult2");
  alert2.className = "alert alert-primary";
  alert2.innerText = `Tus total con interes compuesto son: $${gananciaCompuesta.toFixed(2)}`

};

const limpiarImputs = () => {
  const InputSalary = document.getElementById("InputSalary").value = "";
  const interes = document.getElementById("InputTaza").value= "";
  const tiempo = document.getElementById("Tiempo").value = "";
  const alert = document.getElementById("AlertResult");
  const alert2 = document.getElementById("AlertResult2");

  alert.innerText = "";
  alert.className += " d-none";
  alert2.innerText = "";
  alert2.className += " d-none";

}
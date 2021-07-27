let saldoInicial = 500;
let tazaDeCrecimientoAnual = 8;
let periodoDeInversion = 12;
let interesMensual;
let gananciaMensual;
let totalInteresfijo;
let totalInteresCompuesto;

const CalcInteresMensual = () => {
  const saldo = saldoInicial * ((tazaDeCrecimientoAnual / 100) /12);
  interesMensual = saldo;
  return interesMensual;
};

const CalGananciaFija = () => {
  const ganancia = interesMensual * periodoDeInversion;
  gananciaMensual = ganancia;
  return gananciaMensual
};

const CalcGananciaIntFijo = () => {
  CalcInteresMensual();
  CalGananciaFija();
  let suma = saldoInicial + gananciaMensual;
  totalInteresfijo = suma;
  return totalInteresfijo;
};

// ciurculo variables 
const PI = Math.PI ;


// logs cuadrados ----
console.group("Cuadrados");
const perimetroCuadrado = (lado = 4) => lado * 4;

const ladosCuadrado = (lados = 4) => lados;

const areaCuadrado = ( ladoCuadro = 5 ) => area = ladoCuadro * ladoCuadro;

console.groupEnd();
// ----/logs cuadrados  



// Logs triangulos ----
console.group("triangulos");

const perimetroTriangulo = ( lado1 = 1, lado2 = 1, base = 1) => lado1 + lado2 + base;

const areaTriangulo = (base = 2,altura = 1.5) => (base * altura) / 2;

console.groupEnd();
// ----/Logs triangulos


// logs Circulo ----
console.group("Circulo");

const diametroCirculo = (radio = 2) => radio * 2;

const circunferencia = (radio = 2) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

const areaCirculo= (radio = 2) => (radio * radio) * PI;

// ----/logs Circulo
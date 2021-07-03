// ciurculo variables 
const PI = Math.PI ;


// funciones de  cuadrados ----
const perimetroCuadrado = (lado = 4) => lado * 4;

const ladosCuadrado = (lados = 4) => lados;

const areaCuadrado = ( ladoCuadro = 5 ) => area = ladoCuadro * ladoCuadro;

console.groupEnd();
// ----/ fuinciones de cuadros  



// funciones de triangulos ----

const perimetroTriangulo = ( lado1 = 0, lado2 = 0, base = 0) => {
  return lado1 + lado2 + base;
}

const areaTriangulo = (base = 2,altura = 1.5) => (base * altura) / 2;

const alturaTriangulo = (lado1, lado2, base) => {
  if (lado1 === lado2) {
    const altura = Math.sqrt( (lado1 * lado1) - ( base / 2) ) ;
    return altura;
  } else {
    console.log(`El triangulo que describes no es isósceles`);
  }
};
// ----/funciones de  triangulos


// funciones de Circulo ----
const diametroCirculo = (radio = 2) => radio * 2;

const circunferencia = (radio = 2) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

const areaCirculo= (radio = 0) => (radio * radio) * PI;
// ----/funciones Circulo


// Interaccion con HTMl

// declarar funcion para obtener elemento 
const calcularPerimetroCuadrado = () => {
  // obtener el elemento 
  const input = document.getElementById("InputCuadrado");
  // obtener el valor del elemento
  const value = input.value;
  // llamar a la funcion para el calculo con el valor del input
  const perimetro = perimetroCuadrado(value);
  alert(`El perimetro del cuadrado es: ${perimetro} cm`);
};

const calcularAreaCuadrado = (params) => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(`El área del cuadrado es: ${area} cm²`);
}

const calcularAlturaTriangulo = () => {
  const input = document.getElementById("inputsTriangulo");
  const value = input.value;
  const input2 = document.getElementById("ladoTriangulo2");
  const value2 = input2.value;
  const input3 = document.getElementById("baseTriangulo");
  const value3 = input3.value;
  const altura = alturaTriangulo(value, value2, value3);
  alert (`La altura del triangulo es: ${altura} cm`);
}

const calcularPerimetroTriangulo = () => {
  const inputP = document.getElementById("inputsTriangulo");
  const valueP = inputP.value;
  const inputP2 = document.getElementById("ladoTriangulo2");
  const valueP2 = inputP2.value;
  const inputP3 = document.getElementById("baseTriangulo");
  const valueP3 = inputP3.value;
  const perimetroTotal = perimetroTriangulo(Number.parseInt(valueP), Number.parseInt(valueP2), Number.parseInt(valueP3)) ;
  alert(`El perimetro del triangulo es: ${perimetroTotal} cm`)
}

//function to calculate radio from circle 
const calcAreaCircle = () => {
  const input = document.getElementById("inputCircle");
  const value = input.value;
  const area = areaCirculo(value);
  alert (`El área del circulo es: ${area} cm²`)
};

const calcPerimetrocircle = () => {
  const input = document.getElementById("inputCircle");
  const value = input.value;
  const perimetro = circunferencia(value);
  alert(`El perimetro del curcilo es: ${perimetro} cm`)
}


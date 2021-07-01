// Cuadrado variables ----
const ladoCuadro = 5;
const perimetroCuadrado = ladoCuadro * 4;
const areaCuadrado = ladoCuadro * ladoCuadro;
// ----Cuadrado variables

// Triangulo variables ----
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alruraTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + baseTriangulo + ladoTriangulo2 ;
const areaTriangulo = (baseTriangulo * alruraTriangulo) / 2 ;
// ----/Triangulo variables

// ciurculo variables 
const radioCirculo = 4;
const diametroCirculo = radioCirculo *2;
const PI = Math.PI ;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = PI * (radioCirculo * radioCirculo); 
console.log(areaCirculo);

// ciurculo variables 

// Logs triangulos ----
console.group("triangulos");

console.log(`La altura del tiangulo es: ${alruraTriangulo} cm`);

console.log(
  `Los lados del triangulo miden: 
  ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`
  );
  
  console.log(`El perimetro del triangulo es: 
  ${perimetroTriangulo} cm`
  );
  
  console.log(`El área del triangulo es: 
  ${areaTriangulo} cm^2`
  );
  console.groupEnd();
// ----/Logs triangulos
  
// logs cuadrados ----
console.group("Cuadrados");
console.log(`Los lados del cuadrado miden ${ladoCuadro} cm`);
console.log(`EL perimetro del cuadrado es ${perimetroCuadrado} cm`);
console.log(`EL área del cuadrado es ${areaCuadrado} cm^2`);
console.groupEnd();
// ----/logs cuadrados 

// logs Circulo ----
// ----/logs Circulo
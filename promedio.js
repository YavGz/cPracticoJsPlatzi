const calcMediaAritmetica = (list) => {
  // let sumlist = 0;
  // for (let i = 0; i < list.length; i++) {
  //   sumlist = sumlist + list[i];
  // }

  const sumlist = list.reduce(
    (valorAcumulado, elemento) => {
      return valorAcumulado + elemento;
    }
  );

  const promedioList = sumlist / list.length;
  return promedioList;
}
// call to function
// calcMediaAritmetica([n,n,n,n])



// Calc mediana 

// const listMediana = [
//   200,
//   300,
//   100,
//   600,
//   500,
//   2000,
// ];

let listMediana;
let mediana;

function declararLista(list) {
  listMediana = list;
  calcularMediana(listMediana);
  console.log(mediana);
};

function calcularMediana(listMediana) {
  
  const ordenedList = listMediana.sort( (a,b) => a-b ); 
  
  const listToParse = parseInt(ordenedList.length / 2) ;
  
  const esPar = (number) =>{
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  
  if (esPar(ordenedList.length)) {
    const element1 =  ordenedList[listToParse - 1];
    const element2 = ordenedList[listToParse];
    const promedioMediana = calcMediaAritmetica([element1, element2]);
    mediana = promedioMediana;
  } else {
    const promedioMediana = ordenedList[listToParse]
    mediana = promedioMediana;
  };

  mediana = mediana;
  
};
  
  
  // calcular la moda 
  
const listaModa = [
  1,
  2,
  3,
  3,
  3,
  5,
  6,
  3,
  5,
  3,
  5,
  2
];

const listaModaCount = {};

// transformar el array a un objeto y ocontar el numero de repeticiones de cada elemento
listaModa.map(
  function (element) {
    if (listaModaCount[element]) {
      listaModaCount[element] += 1;
    } else {
      listaModaCount[element] =1;
    }
  }
);
// {1: 1, 2: 2, 3: 5, 5: 3, 6: 1}

// convertir el objeto de nuevo a un array 

const listaModaArray = Object.entries(listaModaCount)
  .sort(
    (valorAcumulado, nuevoValor) => {
    return valorAcumulado[1] - nuevoValor[1];
  });
;

const moda = listaModaArray[listaModaArray.length - 1];
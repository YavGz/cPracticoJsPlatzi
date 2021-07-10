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


// Cal mediana 

const listMediana = [
  100,
  200,
  300,
  500,
  600,
  // 400000,
];

const mitadLista = parseInt(listMediana.length / 2) ;

const esPar = (number) =>{
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(listMediana.length)) {
  const element1 =  listMediana[mitadLista - 1];
  const element2 = listMediana[mitadLista];
  const promedioMediana = calcMediaAritmetica([element1, element2]);
  mediana = promedioMediana;
} else {
  const promedioMediana = listMediana[mitadLista]
  mediana = promedioMediana;
};
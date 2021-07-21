const calcMediaAritmetica = (list) => {
  
  const sumlist = list.reduce(
    (valorAcumulado, elemento) => {
      return valorAcumulado + elemento;
    }
  );

  const promedioList = sumlist / list.length;
  return promedioList;
}

const salariosCol = colombia.map(
  (persona) => {
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  (a ,b) => {
    return a - b;
  }
);

const esPar = (number) => number % 2 === 0;

const medianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2)
  if (esPar(lista.length)) {
    const PersonaMitad1 = lista[mitad - 1]
    const PersonaMitad2 = lista[mitad]
    const mediana = calcMediaAritmetica([PersonaMitad1, PersonaMitad2]);
    return mediana;
  } else {
    const PersonaMitad = lista[mitad]
    return PersonaMitad;
  } 
}

console.log(medianaSalarios(salariosColSorted));
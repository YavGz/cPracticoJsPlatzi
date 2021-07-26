// helpers functions 
const calcMediaAritmetica = (list) => { 
  const sumlist = list.reduce(
    (valorAcumulado, elemento) => {
      return valorAcumulado + elemento;
    }
    );
    const promedioList = sumlist / list.length;
    return promedioList;
  }
  
const esPar = (number) => number % 2 === 0;


// mediana general 
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


// calculadora de mediana 
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
};



// Mediana del top 10%

const spliceStart = ((salariosColSorted.length * 90) / 100 );
const spliceCount = salariosColSorted.length - spliceStart;


const salariosTop10 = salariosColSorted.splice(
  spliceStart, spliceCount);
  
const medianaGeneral = medianaSalarios(salariosColSorted);
const medianaTop10 = medianaSalarios(salariosTop10);

console.log({
  medianaGeneral,
  medianaTop10
});

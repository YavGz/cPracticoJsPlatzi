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
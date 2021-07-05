const price = 100;
const off = 15;

// Formula para generar porcentajes
const totalPrice = (price * (100 - off)) / 100 ;


function priceWithOff(price = 0 , off = 0) { 
  const priceOff = (price * (100 - off)) / 100 ;
  console.log(`El precio del decuento es: $${priceOff} MXN`);
}

priceWithOff(500 , 10);

const calcPriceOffer = () => {
  const input = document.getElementById("")
  const price = input.value;
  const input2 = document.getElementById("")
  const off = input2.value;
  const total = priceWithOff(price, off);
  alert(`El precio total con su descuento es de: $${total} MXN`);
}
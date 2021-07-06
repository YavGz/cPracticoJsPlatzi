// Formula para generar precio total
function priceWithOff(price, off) { 
  const priceOff = (price * (100 - off)) / 100 ;
  return priceOff;
}

const calcPriceOffer = () => {
  const input = document.getElementById("OriginalPrice")
  const input2 = document.getElementById("Off")
  const price = input.value;
  const off = input2.value;
  const total = priceWithOff(price, off);

  alert(`El precio total con su descuento es de: $ ${total} MXN`);
}
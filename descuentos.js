// Formula para generar precio total
function priceWithOff(price, off) { 
  const priceOff = (price * (100 - off)) / 100 ;
  return priceOff;
}

const calcPriceOffer = () => {
  // inputs y valores
  const priceInput = document.getElementById("OriginalPrice");
  const discountInput = document.getElementById("Discount");
  const priceValue = priceInput.value;
  const discountValue = discountInput.value;
  const total = priceWithOff(priceValue, discountValue);
  // input para respuesta
  const priceResult = document.getElementById("priceResult");
  priceResult.innerHTML = `El precio a pagar con el descuento es: $${total} MXN`;
}

const cleanInputs = () => {
  const priceInput = document.getElementById("OriginalPrice").value = "";
  const discountInput = document.getElementById("Discount").value = "";
  const priceResult = document.getElementById("priceResult");
  priceResult.innerText = "";
}
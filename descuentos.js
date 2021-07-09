// coupons
const coupons = [
  {
      name: "Off Day",
      discount: 15,
  },
  {
      name: "Off Year",
      discount: 30,
  },
  {
      name: "Secret off",
      discount: 25,
  },
];

// inputs  de cupones 
const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value
const userCoupon = coupons.find(isCouponValueValid);

const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue;
};  

if (!userCoupon) {
  alert("El cupón " + userCouponValue + "no es válido");
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
  

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

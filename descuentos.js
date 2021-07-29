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


const discountCoupon = () => {
  
  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const priceInput = document.getElementById("OriginalPrice");
  const priceValue = priceInput.value;
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + couponValue + " no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = priceWithOff(priceValue, descuento);
    
    const resultP = document.getElementById("priceResult");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento.toFixed(2);
    priceResult.className = "alert alert-primary"
  }
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
  priceResult.innerText = `El precio a pagar con el descuento es: $${total.toFixed(2)} MXN`;
  priceResult.className = "alert alert-primary"
}

const cleanInputs = () => {
  const couponInput = document.getElementById("InputCoupon").value = "";
  const priceInput = document.getElementById("OriginalPrice").value = "";
  const discountInput = document.getElementById("Discount").value = "";
  const priceResult = document.getElementById("priceResult");
  priceResult.innerText = "";
  priceResult.className = "d-none alert alert-primary";
}

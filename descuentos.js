// Formula para generar porcentajes
// (precio * (100 - descuento))/100

const price = 100;
const off = 15;

const porcentWhitOff = price - off;
const priceWhitOff = (price * porcentWhitOff) / 100;
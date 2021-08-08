const inputs = document.querySelectorAll("input");
const button = document.querySelector('button');
const canvas = document.getElementById("qr");

const createQR = value => {
  
  return new QRious({
    element: canvas,
    value,
    size: 200,
    backgroundAlpha: 0,
    background: 'black'
  });
};

button.addEventListener('click', () => {
  let result = [];
  inputs.forEach(inputField => {
    result.push(inputField.value)
  });
  const qrCode = createQR(result.join(','));
});{}
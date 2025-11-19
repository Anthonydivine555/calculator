
let intervalid;
let autoDisplay = true
let buttonElement = '';

let placeHolder = document.querySelector('.js-display').placeholder
console.log(placeHolder)

startBlinking ()

function startBlinking () {
      intervalid = setInterval(() =>{
      if (placeHolder === '') {
      placeHolder = '0'
      displayResult(placeHolder)
    }
   else {
    placeHolder = ''
    displayResult(placeHolder)
  }
  } , 500)
  autoDisplay = true;
}

function stopBlinking() {
  clearInterval(intervalid);
  displayResult(placeHolder)
  autoDisplay = false;
}


function displayResult(result) {
let inputElement = document.querySelector('.js-display');
inputElement.value = result;
}

function removeButtonElement() {
  stopBlinking(); // stop current blinking

  buttonElement = buttonElement.slice(0, buttonElement.length - 1);
  displayResult(buttonElement);

  if (buttonElement === '') {
    startBlinking(); // restart only if empty
  }
}

// function clearAll() {

// }


function displayInnerHTML (selector) {
  buttonElement += selector;
displayResult(buttonElement)
console.log(buttonElement)
}

function calculate() {
  let MathExpression = buttonElement.replace(/%/g, "/100")
  let result = eval(MathExpression)
  displayResult(result)
  buttonElement = result.toString()
}

// addEventListener('keydown', (event) => {
//   const inputElement = document.querySelector('.js-display').value
// if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4') {

// }
// })

let calculation = '';
let buttonElement = '';
let intervalid;
let autoDisplay = true

startBlinking ()

function startBlinking () {
      intervalid = setInterval(() =>{
      if (buttonElement === '') {
      buttonElement = '0'
      displayResult(buttonElement)
    }
   else {
    buttonElement = ''
    displayResult(buttonElement)
  }
  } , 500)
  autoDisplay = true;
  
}

function stopBlinking() {
  clearInterval(intervalid);
  displayResult(buttonElement)
  autoDisplay = false;
  if(buttonElement === '0') {
    removeButtonElement();
  removeCalculation();
  }
  console.log(buttonElement)
}


function buttonCalculation (add) {
calculation += add;

return calculation;
}

function displayResult(result) {
let inputElement = document.querySelector('.js-display');
  inputElement.value = result;
}

function removeButtonElement() {

  buttonElement = buttonElement.slice(0, buttonElement.length-1);
  displayResult(buttonElement)
}

function removeCalculation() {
   calculation = calculation.slice(0, calculation.length-1);
   displayResult(calculation)  
}

function displayInnerHTML (selector) {
  buttonElement += selector;
displayResult(buttonElement)
}


// addEventListener('keydown', (event) => {
//   const inputElement = document.querySelector('.js-display').value
// if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4') {

// }
// })

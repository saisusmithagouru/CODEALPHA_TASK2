const display = document.getElementById("display");

let resultDisplayed = false;

function appendValue(value) {

  // If result already displayed and user presses number
  if (resultDisplayed && !isNaN(value)) {
    display.value = value;
    resultDisplayed = false;
  } 
  else {
    display.value += value;
    resultDisplayed = false;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
    resultDisplayed = true;
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

  const key = event.key;

  // Numbers and operators
  if (
    (key >= '0' && key <= '9') ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.' ||
    key === '%'
  ) {
    appendValue(key);
  }

  // Enter key
  else if (key === 'Enter') {
    calculate();
  }

  // Backspace key
  else if (key === 'Backspace') {
    deleteLast();
  }

  // Escape key
  else if (key === 'Escape') {
    clearDisplay();
  }
});
function getInputFieldValue(inputId) {
  const field = document.getElementById(inputId);
  const amount = parseFloat(field.value);
  field.value = "";
  return amount;
}

function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const total = parseFloat(element.innerText);
  return total;
}

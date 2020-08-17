const getFormattedNumber = (num) => {
  return Number(num).toLocaleString("pt-BR");
}

const reverseNumberFormat = (num) => {
  return Number(num.replace('.', ''));
}

const getHistory = () => {
  return document.getElementById("history-value").innerText;
}

const printHistory = (num) => {
  document.getElementById("history-value").innerText = num;
}

const getOutput = () => {
  return document.getElementById("output-value").innerText;
}

const printOutput = (num) => {
  document.getElementById("output-value").innerText = getFormattedNumber(num);
}

const operators = document.getElementsByClassName("operator");

for (const operator of operators) {
  operator.addEventListener('click', () => {
    console.log("Operador clickado: ", operator.id);
  })
}

const numbers = document.getElementsByClassName("number");

for (const number of numbers) {
  number.addEventListener('click', () => {
    console.log("Número clickado: ", number.id);
  })
}
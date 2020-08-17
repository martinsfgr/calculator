const getFormattedNumber = (num) => {
  return Number(num).toLocaleString("pt-BR");
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

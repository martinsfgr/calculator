// Transformar o número com a pontuação correta.
const getFormattedNumber = (num) => {
  if (num == "-" || num == 0) {
    return "";
  }

  return Number(num).toLocaleString("pt-BR");
}

// Retirar a pontuação do número.
const reverseNumberFormat = (num) => {
  return Number(num.replace('.', ''));
}

// Pegar o conteúdo da operação da calculadora.
const getHistory = () => {
  return document.getElementById("history-value").innerText;
}

// Printar algum número ou operação a ser realizada.
const printHistory = (num) => {
  document.getElementById("history-value").innerText = num;
}

// Pegar o conteúdo de saída ou entrada da calculadora.
const getOutput = () => {
  return document.getElementById("output-value").innerText;
}

// Mostrar na tela algum resultado ou o número digitado pelo usuário.
const printOutput = (num) => {
  document.getElementById("output-value").innerText = getFormattedNumber(num);
}

const operators = document.getElementsByClassName("operator");

// Criar evento de clicks para todos os botões de operações.
for (const operator of operators) {
  operator.addEventListener('click', () => {
    console.log("Operador clickado:", operator.id);

    // Botão para resetar a calculadora
    if (operator.id == "clear") {
      printHistory("");
      printOutput("");
    }
    
    // Botão para apagar algum número no visor
    else if (operator.id == "backspace") {

      // Pegar o número de entrada e arrumar a pontuação
      let output = reverseNumberFormat(getOutput()).toString();

      if (output) {
        // Apagar o último número e mostrar o valor atualizado
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    }

    // Bloco de condição para todos os outros operadores
    else {
      let output = getOutput();
      let history = getHistory();

      // Normalizar a pontuação do número de entrada e adicionar ao histórico da operação
      if (output != "") {
        output = reverseNumberFormat(output);
        history = history + output;

        // Mostrar o resultado na tela se o operador clicado for o de igualdade
        if (operator.id == "=") {
          let result = eval(history);

          console.log("Esse é o resultado da operação:", result);

          printOutput(result);
          printHistory("");
        } 
        
        // Caso seja qualquer operador sem ser o de igualdade, a operação é adicionada ao histórico
        else {
          history = history + operator.id;
          printHistory(history);
          printOutput("");
        }
      }

      // Bloco de condição para alternar a operação selecionada
      else if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);

          if (operator.id != "=") {
            printHistory(history + operator.id);
          } else {
            printHistory("");
            printOutput(eval(history));
          }
        }
      }
    }
  })
}

const numbers = document.getElementsByClassName("number");

// Bloco de funcionalidade para os números, possibilitando que eles sejam clickados
for (const number of numbers) {
  number.addEventListener('click', () => {
    console.log("Número clickado:", number.id);

    var output = reverseNumberFormat(getOutput());

    if (output != NaN) {
      output = output + number.id;
      printOutput(output);
    }
  })
}

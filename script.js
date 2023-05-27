const textInput = document.querySelector("#input-texto");
const outInput = document.querySelector("#output-texto");
const output = document.querySelector("#output");

const btnCriptografar = document.querySelector(".btn-criptografar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");

const clearInput = () => (textInput.value = "");

// aqui eu faço uma função que verifica se é apenas minúsculas e sem caracteres especias
const isLowerCase = (text) => /^[a-z\s]+$/.test(text);

/**
 * criptografarTexto & descriptografarTexto separei em duas funções os métodos
 * de gritografar e descriptografar
 * @return string
 */
const criptografarTexto = () => {
  const texto = textInput.value;

  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

const descriptografarTexto = () => {
  const texto = textInput.value;

  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

/**
 * função que executarar a função de showOutput com a função criptografarTexto
 */

function criptografar() {
  const text = textInput.value;
  if (isLowerCase(text)) {
    showOutput(criptografarTexto());
    textInput.value = "";
  } else {
    alert("ATENÇÃO: Apenas letras minúsculas e sem acentos");
    textInput.value = "";
  }
}

/**
 * função que executarar a função de showOutput com a função descriptografarTexto
 */

function descriptografar() {
  const text = textInput.value;
  if (isLowerCase(text)) {
    showOutput(descriptografarTexto());
    textInput.value = "";
  } else {
    alert("ATENÇÃO: Apenas letras minúsculas e sem acentos");
    textInput.value = "";
  }
}

/**
 * função show recebe uma função callback ao ser executada ela passará a função
 * criptografar ou descriptografar com o texto
 * @param {criptografar, descriptografar} callback
 * @return void
 */

function showOutput(callback) {
  const texto = textInput.value;
  if (texto.length > 0) {
    return (output.innerHTML = ` <textarea id="output-texto" disabled>${callback}</textarea>
      <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>
    `);
  } else {
    return alert("Preencha a entrada!");
  }
}

/**
 * função copiar apenas adicionei o .setAttribute('disabled', false)
 * para poder ser possivel selecionar o elemento, para ser copiado para area de transferência
 */

function copiar() {
  const textoCop = document.getElementById("output-texto");
  textoCop.setAttribute("disabled", false);
  navigator.clipboard.writeText(textoCop.value);
  textoCop.value = ""; //Limpa o output
  alert("Texto Copiado");
}

/**
 * adicionando os eventos nos botões
 */
btnCriptografar.addEventListener("click", criptografar);
btnDescriptografar.addEventListener("click", descriptografar);
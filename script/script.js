let textInput = document.querySelector("#texto__input");
let outputContainer = document.querySelector(".container__output");

function criptografar() {
  let texto = textInput.value;
  let criptoResult = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  outputContainer.innerHTML = `
    <textarea readonly id="texto__output">${criptoResult}</textarea>
    <button class="copiar" id="copiarCriptografado" onclick="copiar()">Copiar</button>
  `;
}

function descriptografar() {
  let texto = textInput.value;
  let descriptoResult = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  outputContainer.innerHTML = `
    <textarea readonly id="texto__output">${descriptoResult}</textarea>
    <button class="copiar" id="copiarDescriptografado" onclick="copiar()">Copiar</button>
  `;
}

document.querySelector(".criptografar").addEventListener("click", criptografar);
document
  .querySelector(".descriptografar")
  .addEventListener("click", descriptografar);

function copiar() {
  let textoCopiar = document.getElementById("texto__output");
  textoCopiar.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
}

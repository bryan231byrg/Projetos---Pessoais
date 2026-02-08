const valorTexto = document.getElementById("valor");
const btnSomar = document.getElementById("somar");
const btnSubtrair = document.getElementById("subtrair");
const historico = document.getElementById("historico");
const btnReset = document.getElementById("resetar");

let contador = 0;

btnSomar.addEventListener("click", function () {
  contador = contador + 1;

  valorTexto.textContent = `Valor: ${contador}`;

  const li = document.createElement("li");
  li.textContent = `${contador} +`;
  historico.appendChild(li);
});

btnSubtrair.addEventListener("click", function () {
  contador = contador - 1;

  valorTexto.textContent = `Valor: ${contador}`;

  const li = document.createElement("li");
  li.textContent = `${contador} -`;
  historico.appendChild(li);
});

btnReset.addEventListener("click", function () {
  contador = 0;

  valorTexto.textContent = `Valor: ${contador}`;

  historico.innerHTML = "";
});

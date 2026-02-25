const vidaText = document.getElementById("vida");
const valorInput = document.getElementById("valor");
const btnDano = document.getElementById("dano");
const btnCura = document.getElementById("cura");
const btnReset = document.getElementById("reset");
const historico = document.getElementById("historico");

let vida = 100;

function levarDano(v, dano) {
  return v - dano;
}

function curarVida(v, cura) {
  return v + cura;
}

function atualizarVida() {
  vidaText.textContent = "Vida: " + vida;
}

btnDano.addEventListener("click", function () {
  const valorNumero = Number(valorInput.value);

  vida = levarDano(vida, valorNumero);
  if (vida < 0) {
    vida = 0;
  }

  atualizarVida();

  const li = document.createElement("li");
  li.textContent = "Dano recebido: " + valorNumero;
  historico.appendChild(li);

  valorInput.value = "";
});

btnCura.addEventListener("click", function () {
  const valorNumero = Number(valorInput.value);

  vida = curarVida(vida, valorNumero);
  if (vida > 100) {
    vida = 100;
  }

  atualizarVida();

  const li = document.createElement("li");
  li.textContent = "Vida curada: " + valorNumero;
  historico.appendChild(li);

  valorInput.value = "";
});

btnReset.addEventListener("click", function () {
  vida = 100;
  atualizarVida();

  const li = document.createElement("li");
  li.textContent = "Vida resetada";
  historico.appendChild(li);
});

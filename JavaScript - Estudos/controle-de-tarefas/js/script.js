const tarefaInput = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("adicionar");
const btnConcluir = document.getElementById("concluir");
const statusText = document.getElementById("status");
const historico = document.getElementById("historico");

let tarefaAtual = "";

// estado inicial
statusText.textContent = "Nenhuma tarefa ativa";
statusText.className = "inativo";

// cria tarefa
function criarTarefa() {
  if (tarefaAtual !== "") {
    alert("Conclua a tarefa atual antes de criar outra!");
    return null;
  }

  const texto = tarefaInput.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa válida!");
    return null;
  }

  tarefaAtual = texto;
  return tarefaAtual;
}

// conclui tarefa
function concluirTarefa() {
  if (tarefaAtual === "") {
    alert("Não há tarefa para concluir!");
    return null;
  }

  const concluida = tarefaAtual;
  tarefaAtual = "";
  return concluida;
}

// botão adicionar
btnAdicionar.addEventListener("click", function () {
  const nova = criarTarefa();
  if (!nova) return;

  statusText.textContent = "Tarefa ativa: " + nova;
  statusText.className = "ativo";

  const li = document.createElement("li");
  li.textContent = "Tarefa criada: " + nova;
  historico.appendChild(li);

  tarefaInput.value = "";
});

// botão concluir
btnConcluir.addEventListener("click", function () {
  const concluida = concluirTarefa();
  if (!concluida) return;

  statusText.textContent = "Nenhuma tarefa ativa";
  statusText.className = "inativo";

  const li = document.createElement("li");
  li.textContent = "Tarefa concluída: " + concluida;
  historico.appendChild(li);
});

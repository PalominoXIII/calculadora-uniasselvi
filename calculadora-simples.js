let operacaoSelecionada = '+'; // padrão

function adicionarCampo() {
    const container = document.getElementById("campos-valores");
    const novoInput = document.createElement("input");
    novoInput.type = "number";
    novoInput.className = "campo-valor";
    novoInput.placeholder = `Valor ${container.children.length + 1}`;
    container.appendChild(novoInput);
}

function selecionarOperacao(op) {
    operacaoSelecionada = op;
    const botoes = document.querySelectorAll(".botoes-operacoes button");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    event.target.classList.add("ativo");
}

function calcular() {
    const valores = Array.from(document.querySelectorAll(".campo-valor"))
        .map(input => parseFloat(input.value) || 0);

    let resultado = valores[0];

    for (let i = 1; i < valores.length; i++) {
        const v = valores[i];
        switch (operacaoSelecionada) {
            case '+':
                resultado += v;
                break;
            case '-':
                resultado -= v;
                break;
            case '*':
                resultado *= v;
                break;
            case '/':
                resultado = v === 0 ? 'Erro: divisão por 0' : resultado / v;
                break;
        }
    }

    const resultadoTexto = typeof resultado === "number" ? resultado.toFixed(2) : resultado;

    const resultadoEl = document.getElementById("resultadoSimples");
    resultadoEl.textContent = resultadoTexto;

    // ✅ Armazena o texto limpo no próprio span (como sua função espera)
    resultadoEl.dataset.textoLimpo = resultadoTexto;
}

function limparCampos() {
    const inputs = document.querySelectorAll(".campo-valor");
    inputs.forEach(input => input.value = '');
    const resultadoEl = document.getElementById("resultadoSimples");
    resultadoEl.textContent = '0';
    resultadoEl.dataset.textoLimpo = '';
}

function removerCampo() {
    const container = document.getElementById("campos-valores");
    const inputs = container.querySelectorAll(".campo-valor");
    if (inputs.length > 2) {
        container.removeChild(inputs[inputs.length - 1]);
    } else {
        alert("A calculadora precisa ter pelo menos 2 campos.");
    }
}

function resetarCalculadora() {
    const container = document.getElementById("campos-valores");
    container.innerHTML = '';

    for (let i = 1; i <= 2; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "campo-valor";
        input.placeholder = `Valor ${i}`;
        container.appendChild(input);
    }

    operacaoSelecionada = '+';

    const resultadoEl = document.getElementById("resultadoSimples");
    resultadoEl.textContent = '0';
    resultadoEl.dataset.textoLimpo = '';

    document.querySelectorAll(".botoes-operacoes button").forEach(btn => {
        btn.classList.remove("ativo");
    });
    document.querySelector(".botoes-operacoes button:first-child").classList.add("ativo");
}

// ✅ Copia o texto diretamente do resultadoSimples, como o seu botão espera
function copiarResultadoSimples() {
    const resultado = document.getElementById("resultadoSimples");
    const texto = resultado ? resultado.textContent.trim() : "";

    if (texto && texto !== "0") {
        navigator.clipboard.writeText(texto)
            .then(() => alert("Resultado copiado com sucesso!"))
            .catch(() => alert("Erro ao copiar o resultado."));
    } else {
        alert("Nenhum resultado para copiar.");
    }
}



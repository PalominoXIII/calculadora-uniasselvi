// Função para criar efeito de digitação (simples)
function typeWriter(element, text, speed = 30) {
    element.innerHTML = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function calcularDesplugParcial() {
    const valoresDisciplinas = document.querySelectorAll('.valor-disciplina');
    const resultado = document.getElementById("resultadoDesplug");

    // Verificação de existência do elemento
    if (!resultado) return;

    // Soma dos valores das disciplinas
    let somaDisciplinas = 0;
    let totalDisciplinas = 0;

    valoresDisciplinas.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor) && valor > 0) {
            somaDisciplinas += valor;
            totalDisciplinas++;
        }
    });

    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const bolsa = parseFloat(document.getElementById("bolsa").value);
    const radioSelecionado = document.querySelector('input[name="mensalidadesRestantes"]:checked');
    const mensalidadesRestantes = radioSelecionado ? parseInt(radioSelecionado.value) : 5;

    // Validações
    if (
        totalDisciplinas < 1 ||
        isNaN(valorPago) || valorPago < 0 ||
        isNaN(bolsa) || bolsa < 0 || bolsa > 100 ||
        isNaN(mensalidadesRestantes) || mensalidadesRestantes < 1
    ) {
        resultado.style.color = "red";
        typeWriter(resultado, "⚠️ Por favor, preencha todos os campos corretamente.", 30);
        resultado.dataset.textoLimpo = "";
        return;
    }

    // Cálculo principal
    let valorParcial = somaDisciplinas - valorPago;
    let valorComBolsa = valorParcial * (1 - bolsa / 100);
    let valorComPontualidade = valorComBolsa * 0.9;
    let valorMensal = valorComPontualidade / mensalidadesRestantes;

    if (valorMensal < 0) {
        resultado.style.color = "red";
        typeWriter(resultado, "⚠️ O valor final ficou negativo. Verifique os dados informados.", 30);
        resultado.dataset.textoLimpo = "";
        return;
    }

    // Texto final
    const texto = `Fazendo o desplug atual, deixando ${totalDisciplinas} disciplina(s), o valor da sua mensalidade a partir de agora, até o final do semestre, é de aproximadamente R$ ${valorMensal.toFixed(2)} reais.`;

    resultado.style.color = "#fff";
    resultado.dataset.textoLimpo = texto;
    typeWriter(resultado, texto, 30);
}

function copiarResultadoDesplug() {
    const resultado = document.getElementById("resultadoDesplug");
    const texto = resultado.dataset.textoLimpo;

    if (texto && texto.trim() !== "") {
        navigator.clipboard.writeText(texto)
            .then(() => alert("Resultado copiado com sucesso!"))
            .catch(() => alert("Erro ao copiar o resultado."));
    } else {
        alert("Nenhum resultado para copiar.");
    }
}

function adicionarDisciplina() {
    const container = document.getElementById("container-disciplinas");
    const index = container.querySelectorAll(".valor-disciplina").length + 1;

    const label = document.createElement("label");
    label.textContent = `Valor da Disciplina ${index} (R$):`;

    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("valor-disciplina");
    input.placeholder = "Digite o valor da disciplina";

    container.appendChild(label);
    container.appendChild(input);
}

function removerDisciplina() {
    const container = document.getElementById("container-disciplinas");
    const inputs = container.querySelectorAll(".valor-disciplina");

    if (inputs.length > 2) {
        container.removeChild(container.lastElementChild); // input
        container.removeChild(container.lastElementChild); // label
    } else {
        alert("Você deve manter pelo menos duas disciplinas.");
    }
}

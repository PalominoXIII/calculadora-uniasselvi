// Função para calcular a multa (30% do total em aberto)
function calculaMulta(valorAberto) {
    return valorAberto * 0.30;
}

// Função principal para calcular e exibir a multa
function calcularMulta() {
    let valorAberto = parseFloat(document.getElementById("valorMensalidades").value);
    let resultadoMulta = document.getElementById("resultadoMulta");

    // Validação
    if (isNaN(valorAberto) || valorAberto <= 0) {
        typeWriter(resultadoMulta, "⚠️ Por favor, insira um valor válido.", 30);
        resultadoMulta.style.color = "red";
        resultadoMulta.dataset.textoLimpo = "";
        return;
    }

    let valorMulta = calculaMulta(valorAberto);

    // Texto final puro (sem HTML)
    let resultadoTextoLimpo = `O valor aproximado da multa por cancelamento é de: R$ ${valorMulta.toFixed(2)} reais.`;

    // Salva o texto limpo para o botão "Copiar"
    resultadoMulta.dataset.textoLimpo = resultadoTextoLimpo;

    // Define a cor padrão
    resultadoMulta.style.color = "#fff";

    // Exibe com efeito de digitação
    typeWriter(resultadoMulta, resultadoTextoLimpo, 30);
}

// Função para copiar o resultado da multa
function copiarResultadoMulta() {
    const resultado = document.getElementById("resultadoMulta");
    const textoLimpo = resultado.dataset.textoLimpo;

    if (textoLimpo && textoLimpo.trim() !== "") {
        navigator.clipboard.writeText(textoLimpo)
            .then(() => alert("Resultado copiado com sucesso!"))
            .catch(() => alert("Erro ao copiar o resultado."));
    } else {
        alert("Nenhum resultado para copiar.");
    }
}

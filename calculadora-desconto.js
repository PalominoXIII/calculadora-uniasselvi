// Função para criar efeito de digitação (não suporta HTML estilizado)
function typeWriter(element, text, speed = 30) {
    element.innerHTML = ""; // Limpa o conteúdo antes de começar a digitação
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

// Função para calcular desconto aplicado
function calculaDesconto(valorMensalidade, desconto) {
    let percentual = desconto / 100;
    return valorMensalidade * (1 - percentual);
}

// Função para calcular o valor com pontualidade (10% a menos)
function calculaPontualidade(valorComDesconto) {
    let percentual = 10 / 100;
    return valorComDesconto * (1 - percentual);
}

// Função principal para calcular e exibir os resultados
function calcularDesconto() {
    let mensalidade = parseFloat(document.getElementById("mensalidade").value);
    let desconto = parseFloat(document.getElementById("desconto").value);
    let resultadoFinal = document.getElementById("resultadoFinal");

    // Validação
    if (isNaN(mensalidade) || isNaN(desconto) || mensalidade <= 0 || desconto < 0) {
        typeWriter(resultadoFinal, "⚠️ Por favor, insira valores válidos.", 30);
        resultadoFinal.style.color = "red";
        resultadoFinal.dataset.textoLimpo = ""; // Limpa o texto anterior salvo
        return;
    }

    let valorComDesconto = calculaDesconto(mensalidade, desconto);
    let valorComPontualidade = calculaPontualidade(valorComDesconto);

    // Texto final puro (sem HTML) para salvar e copiar
    let resultadoTextoLimpo = `O valor aproximado da mensalidade com o novo desconto é de: R$ ${valorComDesconto.toFixed(2)} reais.
Com o desconto de pontualidade (10%), o valor aproximado é de: R$ ${valorComPontualidade.toFixed(2)} reais.`;

    // Salva o texto limpo para o botão "Copiar"
    resultadoFinal.dataset.textoLimpo = resultadoTextoLimpo;

    // Define a cor do texto principal
    resultadoFinal.style.color = "#fff";

    // Exibe com efeito de digitação
    typeWriter(resultadoFinal, resultadoTextoLimpo, 30);
}

// Função para copiar o texto sem HTML
function copiarResultado() {
    const resultado = document.getElementById("resultadoFinal");
    const textoLimpo = resultado.dataset.textoLimpo;

    if (textoLimpo && textoLimpo.trim() !== "") {
        navigator.clipboard.writeText(textoLimpo)
            .then(() => alert("Resultado copiado com sucesso!"))
            .catch(() => alert("Erro ao copiar o resultado."));
    } else {
        alert("Nenhum resultado para copiar.");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    exibirMensagemInicial();
});

function exibirMensagemInicial() {
    const area = document.querySelector('.div-principal');
    area.innerHTML = `
        <p class="boas-vindas">
            Seja bem-vindo à calculadora da UNIASSELVI.<br>
            Por gentileza, escolha qual calculadora deseja utilizar.
        </p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os botões
    const botaoDescontoCabecalho = document.getElementById("botaoDesconto");
    const botaoDescontoMenu = document.getElementById("botaoDescontoMenu");
    const botaoMultaCabecalho = document.getElementById("botaoMulta");
    const botaoMultaMenu = document.getElementById("botaoMultaMenu");
    const botaoDesplugCabecalho = document.getElementById("botaoDesplug");
    const botaoDesplugMenu = document.getElementById("botaoDesplugMenu");

    const divPrincipal = document.querySelector(".div-principal");

    // Placeholder da calculadora de desconto
    const placeholderDesconto = `
        <div class="calculadora-desconto">
            <h2 class="titulo-calculadora-desconto">Calculadora de Desconto</h2>

            <label for="mensalidade">Valor da Mensalidade (R$):</label>
            <input type="number" id="mensalidade" placeholder="Digite o valor da mensalidade">

            <label for="desconto">Percentual de Desconto (%):</label>
            <input type="number" id="desconto" placeholder="Digite o percentual de desconto">

            <button onclick="calcularDesconto()" class="botao-calcular">Calcular</button>

            <p id="resultadoFinal" class="resultado-desconto"></p>

            <button onclick="copiarResultado()" class="botao-copiar-resultado">📋 Copiar Resultado</button>
        </div>
    `;

    // Placeholder da calculadora de multa
    const placeholderMulta = `
        <div class="calculadora-multa">
            <h2 class="titulo-calculadora-multa">Calculadora de Multa</h2>

            <label for="valorMensalidades">Soma das Mensalidades em Aberto (R$):</label>
            <input type="number" id="valorMensalidades" placeholder="Digite o valor total em aberto">

            <button onclick="calcularMulta()" class="botao-calcular-multa">Calcular Multa</button>

            <div id="resultadoMulta" class="resultado-multa"></div>

            <button onclick="copiarResultadoMulta()" class="botao-copiar-multa">
                <i class="fa-solid fa-clipboard"></i> Copiar Resultado
            </button>
        </div>
    `;

    // Placeholder da calculadora de desplug parcial
    const placeholderDesplug = `
    <div class="calculadora-desplug">
        <div class="desplug-esquerda">
            <h2 class="titulo-calculadora-desplug">Calculadora de Desplug Parcial</h2>

            <p class="mensagem-pontualidade">O resultado sairá com a pontualidade aplicada.</p>

            <div id="container-disciplinas" class="container-disciplinas">
                <label>Valor da Disciplina 1 (R$):</label>
                <input type="number" class="valor-disciplina" placeholder="Digite o valor da disciplina">
                <label>Valor da Disciplina 2 (R$):</label>
                <input type="number" class="valor-disciplina" placeholder="Digite o valor da disciplina">
            </div>

            <div class="botoes-adicionar-remover">
                <button onclick="adicionarDisciplina()" class="botao-adicionar-disciplina">➕ Adicionar disciplina</button>
                <button onclick="removerDisciplina()" class="botao-remover-disciplina">➖ Remover disciplina</button>
            </div>

            <label for="valorPago">Valor total já pago em mensalidades (R$):</label>
            <input type="number" id="valorPago" placeholder="Informe o valor pago pelo aluno até o momento">

            <p class="label-radio">Quantidade de mensalidades restantes no semestre:</p>
            <div class="grupo-radio">
                <label><input type="radio" name="mensalidadesRestantes" value="1"> 1</label>
                <label><input type="radio" name="mensalidadesRestantes" value="2"> 2</label>
                <label><input type="radio" name="mensalidadesRestantes" value="3"> 3</label>
                <label><input type="radio" name="mensalidadesRestantes" value="4"> 4</label>
                <label><input type="radio" name="mensalidadesRestantes" value="5" checked> 5</label>
            </div>

            <label for="bolsa">Informe o valor da bolsa do aluno sem a pontualidade (%):</label>
            <input type="number" id="bolsa" placeholder="Digite apenas o número, ex: 50">

            <button onclick="calcularDesplugParcial()" class="botao-calcular-desplug">Calcular</button>
        </div>

        <div class="desplug-direita">
            <div id="resultadoDesplug" class="resultado-desplug">O resultado aparecerá aqui.</div>
            <button onclick="copiarResultadoDesplug()" class="botao-copiar-desplug">📋 Copiar Resultado</button>
        </div>
    </div>
`;


    // Funções para exibir cada calculadora
    function mostrarCalculadoraDesconto() {
        divPrincipal.innerHTML = placeholderDesconto;
    }

    function mostrarCalculadoraMulta() {
        divPrincipal.innerHTML = placeholderMulta;
    }

    function mostrarCalculadoraDesplug() {
        divPrincipal.innerHTML = placeholderDesplug;
    }

    // Eventos dos botões
    botaoDescontoCabecalho.addEventListener("click", mostrarCalculadoraDesconto);
    botaoDescontoMenu.addEventListener("click", mostrarCalculadoraDesconto);

    botaoMultaCabecalho.addEventListener("click", mostrarCalculadoraMulta);
    botaoMultaMenu.addEventListener("click", mostrarCalculadoraMulta);

    botaoDesplugCabecalho.addEventListener("click", mostrarCalculadoraDesplug);
    botaoDesplugMenu.addEventListener("click", mostrarCalculadoraDesplug);
});

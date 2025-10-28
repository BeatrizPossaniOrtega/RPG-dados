// --- script-dados.js (Com div de aviso separada) ---

// 1. CAPTURAR OS ELEMENTOS DO HTML
const selectDado = document.getElementById('tipo-dado');
const botaoRolar = document.getElementById('botao-rolar');
const divResultado = document.getElementById('resultado-dado'); // Container da imagem e nº
const imgDado = document.getElementById('imagem-dado');         // Imagem do dado
const pResultado = document.getElementById('texto-resultado'); // Onde o número aparece
// --- CAPTURA A NOVA DIV DE AVISO ---
const divAviso = document.getElementById('mensagem-aviso');    // Onde o aviso aparece

// ==========================================================
// LÓGICA 1: QUANDO O SELECT MUDA
// ==========================================================
selectDado.addEventListener('change', function() {
    const lados = selectDado.value;

    // --- LIMPA O AVISO AO MUDAR O SELECT ---
    divAviso.textContent = ''; // Limpa mensagens de erro anteriores

    if (lados) {
        // Mostra qual dado está pronto (sobre a imagem)
        pResultado.textContent = `d${lados}`;
        pResultado.style.color = '#ccc'; // Cor cinza claro para o aviso
        pResultado.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)'; // Sombra suave
        pResultado.style.opacity = 1; // Garante que esteja visível
    } else {
        // Limpa o texto sobre o dado se voltar para "-- Selecione --"
        pResultado.textContent = '';
    }
});

// ==========================================================
// LÓGICA 2: ROLAR O DADO QUANDO O BOTÃO É CLICADO
// ==========================================================
botaoRolar.addEventListener('click', function() {
    const ladosSelecionados = selectDado.value;

    // --- LIMPA O AVISO ANTIGO ANTES DE VALIDAR ---
    divAviso.textContent = '';

    // --- Validação ---
    if (!ladosSelecionados) {
        // --- MOSTRA O AVISO NA DIV CORRETA ---
        divAviso.textContent = 'Escolha um dado!';
        // A cor vermelha já está definida pelo CSS para #mensagem-aviso

        // --- Limpa o texto sobre o dado ---
        pResultado.textContent = '';
        return; // Para a execução aqui
    }

    // --- Se a validação passou, continua normal ---
    const numLados = parseInt(ladosSelecionados);

    // --- Animação Inicial (Esconde o número antigo/aviso "dX") ---
    pResultado.style.opacity = 0;

    // --- A ROLAGEM ---
    const resultadoRolagem = Math.floor(Math.random() * numLados) + 1;

    // --- Exibe o Resultado (Depois de um pequeno delay para a animação) ---
    setTimeout(() => {
        pResultado.textContent = resultadoRolagem; // Mostra o número rolado
        pResultado.style.color = 'gold'; // Cor forte para o resultado
        pResultado.style.textShadow = '2px 2px 4px rgba(0,0,0,0.9)'; // Sombra forte
        pResultado.style.opacity = 1; // Mostra o número novo

        // Adiciona a animação de "tremer"
        pResultado.classList.remove('roll-effect');
        void pResultado.offsetWidth; // Truque para resetar a animação
        pResultado.classList.add('roll-effect');
    }, 150); // Delay de 150ms

});

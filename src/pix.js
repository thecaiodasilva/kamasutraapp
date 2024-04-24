// Selecionar o botão de cópia e a área de código PIX
const copyButton = document.getElementById('copyButton');
const pixCodeTextArea = document.getElementById('pixCode');

// Adicionar evento de clique ao botão de cópia
copyButton.addEventListener('click', () => {
    // Selecionar o texto dentro da área de código PIX
    pixCodeTextArea.select();
    pixCodeTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copiar o texto selecionado para a área de transferência
    document.execCommand('copy');

    // Feedback visual para o usuário (opcional)
    copyButton.textContent = 'Copiado!';
    setTimeout(() => {
        copyButton.textContent = 'Copiar';
    }, 2000); // Reverter para "Copiar" após 2 segundos
});

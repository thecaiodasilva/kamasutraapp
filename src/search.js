// Função para atualizar a posição com base na busca
export function atualizarPosicaoComBusca(posicoes, busca, homeContent, imageContent) {
    const posicaoFiltrada = posicoes.filter(posicao => {
        return posicao.posicao.toLowerCase().includes(busca.toLowerCase()) ||
            posicao.posicao.toLowerCase().startsWith(`posição ${busca}`.toLowerCase());
    });

    if (posicaoFiltrada.length > 0) {
        const posicaoSelecionada = posicaoFiltrada[0];
        const imagemElement = document.getElementById('image');
        const posicaoElement = document.getElementById('posicao');

        imagemElement.src = posicaoSelecionada.imagemUrl;
        imagemElement.alt = posicaoSelecionada.posicao;
        posicaoElement.textContent = posicaoSelecionada.posicao;

        homeContent.style.display = 'none';
        imageContent.style.display = 'block';
    } else {
        alert('Posição não encontrada. Por favor, tente novamente.');
    }
}

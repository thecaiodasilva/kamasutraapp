// Define um array de objetos com as informações das posições
const posicoes = [
    {
        imagemUrl: '/caminho/para/imagem1.jpg',
        posicao: 'Posição 1',
        descricao: 'Descrição da Posição 1'
    },
    {
        imagemUrl: '/caminho/para/imagem2.jpg',
        posicao: 'Posição 2',
        descricao: 'Descrição da Posição 2'
    },
    // Adicione mais objetos conforme necessário
];

// Função para carregar uma nova posição
function novaPosicao() {
    // Obter um número aleatório entre 0 e o comprimento do array posicoes
    const index = Math.floor(Math.random() * posicoes.length);
    const posicao = posicoes[index];

    // Atualizar a imagem, posição e descrição na página HTML
    const imagemElement = document.getElementById('image');
    const posicaoElement = document.getElementById('posicao');
    const descricaoElement = document.getElementById('descricao');

    imagemElement.src = posicao.imagemUrl;
    imagemElement.alt = posicao.posicao;
    posicaoElement.textContent = posicao.posicao;
    descricaoElement.textContent = posicao.descricao;
}

// Adicionar um evento de clique ao botão "NOVA POSIÇÃO"
const btnNovaPosicao = document.getElementById('btn');
btnNovaPosicao.addEventListener('click', novaPosicao);

// Carregar uma nova posição inicialmente ao carregar a página
novaPosicao();

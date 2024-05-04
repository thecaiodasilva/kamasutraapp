import posicoes from './posicoes.js';
import { atualizarPosicaoComBusca } from './search.js';

// Referenciando os elementos HTML
const homeContent = document.getElementById('homeContent');
const imageContent = document.getElementById('imageContent');
const searchInput = document.querySelector('.search-input');
const btnNovaPosicao = document.getElementById('btn');
const startButton = document.getElementById('startButton');

// Função para atualizar a posição sem a busca
function atualizarPosicao() {
    const indiceAleatorio = Math.floor(Math.random() * posicoes.length);
    const posicaoSelecionada = posicoes[indiceAleatorio];

    const imagemElement = document.getElementById('image');
    const posicaoElement = document.getElementById('posicao');

    imagemElement.src = posicaoSelecionada.imagemUrl;
    imagemElement.alt = posicaoSelecionada.posicao;
    posicaoElement.textContent = posicaoSelecionada.posicao;

    // Exibe o conteúdo das imagens e oculta o conteúdo inicial
    homeContent.style.display = 'none';
    imageContent.style.display = 'block';
}

// Evento de clique no botão "NOVA POSIÇÃO"
btnNovaPosicao.addEventListener('click', () => {
    // Atualiza a posição com base na busca
    atualizarPosicaoComBusca(posicoes, searchInput.value, homeContent, imageContent);
    // Atualiza a posição aleatoriamente
    atualizarPosicao();
});

// Evento de pressionar Enter no campo de busca
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Atualiza a posição com base na busca quando o usuário pressionar Enter
        atualizarPosicaoComBusca(posicoes, searchInput.value, homeContent, imageContent);
    }
});

// Evento de clique no botão "Explorar Posições"
startButton.addEventListener('click', () => {
    // Exibe apenas o conteúdo das imagens e oculta o conteúdo inicial
    homeContent.style.display = 'none';
    imageContent.style.display = 'block';
    // Atualiza a posição
    atualizarPosicao();
});

// Exibe inicialmente o conteúdo inicial e oculta o conteúdo das imagens
homeContent.style.display = 'block';
imageContent.style.display = 'none';


// Referenciando o elemento da barra de pesquisa
const searchContainer = document.querySelector('.search-container');
// Adicionando evento de clique ao botão de iniciar
startButton.addEventListener('click', () => {
    // Removendo a classe "hidden" da barra de pesquisa
    searchContainer.classList.remove('hidden');
});

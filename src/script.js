// Array de informações das posições (imagens)
const posicoes = [
    {
        imagemUrl: '/src/img/491.png',
        posicao: 'Posição 491: Tambor',

    },
    {
        imagemUrl: '/src/img/490.png',
        posicao: 'Posição 490: Encantador de serpentes',
    },
    {
        imagemUrl: '/src/img/489.png',
        posicao: 'PPosição 489: Chibi',
    },
    {
        imagemUrl: '/src/img/488.png',
        posicao: 'Posição 488: Carl quente',

    },
    {
        imagemUrl: '/src/img/487.png',
        posicao: 'Posição 487: Ápice',
    },
    {
        imagemUrl: '/src/img/486.png',
        posicao: 'Posição 486: Fonte',
    },
    {
        imagemUrl: '/src/img/485.png',
        posicao: 'Posição 485: Descida',

    },
    {
        imagemUrl: '/src/img/484.png',
        posicao: 'Posição 484: O mestre lambedor',
    },
    {
        imagemUrl: '/src/img/483.png',
        posicao: 'Posição 483: Catapult',
    },
    {
        imagemUrl: '/src/img/482.png',
        posicao: 'Posição 482: Stickman',
    },{
        imagemUrl: '/src/img/481.png',
        posicao: 'Posição 481: Novo 69 na cadeira',
    },
    {
        imagemUrl: '/src/img/480.png',
        posicao: 'Posição 480: Cu suculento',
    },{
        imagemUrl: '/src/img/479.png',
        posicao: 'Posição 479: O homem das mulheres',
    },{
        imagemUrl: '/src/img/478.png',
        posicao: 'Posição 478: Jogo excitante',
    },{
        imagemUrl: '/src/img/477.png',
        posicao: 'Posição 477: Saco de chá',
    },{
        imagemUrl: '/src/img/476.png',
        posicao: 'Posição 476: Harpa',
    },{
        imagemUrl: '/src/img/475.png',
        posicao: 'Posição 475: Beijo grego',
    },{
        imagemUrl: '/src/img/474.png',
        posicao: 'Posição 474: Inclinação',
    },{
        imagemUrl: '/src/img/473.png',
        posicao: 'Posição 473: Loop',
    },{
        imagemUrl: '/src/img/472.png',
        posicao: 'Posição 472. Roda de pino',
    },{
        imagemUrl: '/src/img/471.png',
        posicao: 'Posição 471. Gimlet',
    },{
        imagemUrl: '/src/img/470.png',
        posicao: 'Posição 470: Relaxamento',
    },{
        imagemUrl: '/src/img/469.png',
        posicao: 'Posição 469: Rata apertada',
    },{
        imagemUrl: '/src/img/468.png',
        posicao: 'Posição 468: Cataratas do Niágara',
    },{
        imagemUrl: '/src/img/467.png',
        posicao: 'Posição 467: Foguetão',
    },{
        imagemUrl: '/src/img/466.png',
        posicao: 'Posição 466: Satyr',
    },{
        imagemUrl: '/src/img/465.png',
        posicao: 'Posição 465: Cavaleiro',
    },{
        imagemUrl: '/src/img/464.png',
        posicao: 'Posição 464: Hood',
    },{
        imagemUrl: '/src/img/463.png',
        posicao: 'Posição 463: Montanha creek',
    },{
        imagemUrl: '/src/img/462.png',
        posicao: 'Posição 462: Colina',
    },{
        imagemUrl: '/src/img/461.png',
        posicao: 'Posição 461: Wrestling',
    },{
        imagemUrl: '/src/img/460.png',
        posicao: 'Posição 460: Olhe para o céu',
    },{
        imagemUrl: '/src/img/459.png',
        posicao: 'Posição 459: Passivo doggy',
    },{
        imagemUrl: '/src/img/458.png',
        posicao: 'Posição 458: Jack',
    },{
        imagemUrl: '/src/img/457.png',
        posicao: 'Posição 457: Camaleão',
    },{
        imagemUrl: '/src/img/456.png',
        posicao: 'Posição 456: Espetos',
    },{
        imagemUrl: '/src/img/455.png',
        posicao: 'Posição 455: Sela',
    },{
        imagemUrl: '/src/img/454.png',
        posicao: 'Posição 454: Adoração',
    },{
        imagemUrl: '/src/img/453.png',
        posicao: 'Posição 453: Emaranhado',
    },{
        imagemUrl: '/src/img/452.png',
        posicao: 'Posição 452: Triângulo das Bermudas',
    },{
        imagemUrl: '/src/img/451.png',
        posicao: 'Posição 451: Counterblow',
    },{
        imagemUrl: '/src/img/450.png',
        posicao: 'Posição 450: Lugar confortável',
    },{
        imagemUrl: '/src/img/449.png',
        posicao: 'Posição 449: Julia',
    },{
        imagemUrl: '/src/img/448.png',
        posicao: 'Posição 448: Penetração orgásmica',
    },{
        imagemUrl: '/src/img/447.png',
        posicao: 'Posição 447: Beleza flexível',
    },{
        imagemUrl: '/src/img/446.png',
        posicao: 'Posição 446: Bomba',
    },{
        imagemUrl: '/src/img/445.png',
        posicao: 'Posição 445: Meia-noite',
    },{
        imagemUrl: '/src/img/444.png',
        posicao: 'Posição 444: Tábua',
    },{
        imagemUrl: '/src/img/443.png',
        posicao: 'Posição 443: Atordoador',
    },{
        imagemUrl: '/src/img/442.png',
        posicao: 'Posição 442: Pônei selvagem',
    },
    // Adicione mais objetos conforme necessário com as informações das suas imagens
];

function atualizarPosicao() {
    const indiceAleatorio = Math.floor(Math.random() * posicoes.length);
    const posicaoSelecionada = posicoes[indiceAleatorio];

    const imagemElement = document.getElementById('image');
    const posicaoElement = document.getElementById('posicao');

    imagemElement.src = posicaoSelecionada.imagemUrl;
    imagemElement.alt = posicaoSelecionada.posicao;
    posicaoElement.textContent = posicaoSelecionada.posicao;
}

// Adicionar um evento de clique ao botão "NOVA POSIÇÃO"
const btnNovaPosicao = document.getElementById('btn');
btnNovaPosicao.addEventListener('click', atualizarPosicao);

// Atualizar a posição inicialmente ao carregar a página
atualizarPosicao();

// Evento de clique para abrir links das redes sociais em uma nova aba
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });
});
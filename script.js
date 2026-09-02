// Árvore da história com caminhos e variações
const capitulos = {
    inicio: {
        texto: "Sua nave espacial sofreu uma pane e fez um pouso forçado em um planeta desconhecido. Os sensores indicam duas rotas possíveis para buscar suprimentos. Qual caminho você escolhe?",
        opcoes: [
            { texto: "Entrar na Caverna Luminosa", proximo: "caverna" },
            { texto: "Explorar a Floresta Cristalina", proximo: "floresta" }
        ]
    },
    
    // --- CAMINHO 1: A CAVERNA ---
    caverna: {
        texto: "Dentro da caverna, o ar é respirável e há cristais brilhantes. No fundo, você encontra uma porta antiga com um painel de senha e um túnel escuro ao lado.",
        opcoes: [
            { texto: "Tentar hackear o painel da porta", proximo: "hackear" },
            { texto: "Seguir pelo túnel escuro", proximo: "tunel" }
        ]
    },
    hackear: {
        texto: "🎉 Vitória! Você conseguiu acessar o painel, que abriu um abrigo abandonado cheio de suprimentos e um rádio de emergência. Você foi resgatado!",
        opcoes: [
            { texto: "Jogar Novamente", proximo: "inicio" }
        ]
    },
    tunel: {
        texto: "❌ Fim de Jogo! O túnel era um ninho de criaturas subterrâneas que não gostaram da sua visita.",
        opcoes: [
            { texto: "Tentar Novamente", proximo: "inicio" }
        ]
    },

    // --- CAMINHO 2: A FLORESTA ---
    floresta: {
        texto: "Na floresta, as plantas emitem um som suave. Você avista uma estrutura alienígena em ruínas e, mais adiante, o que parece ser um rio de líquido azul radiante.",
        opcoes: [
            { texto: "Investigar as ruínas alienígenas", proximo: "ruinas" },
            { texto: "Coletar amostra do rio azul", proximo: "rio" }
        ]
    },
    ruinas: {
        texto: "🎉 Vitória! As ruínas continham um mapa estelar funcional que guiou os resgatadores diretamente até sua localização!",
        opcoes: [
            { texto: "Jogar Novamente", proximo: "inicio" }
        ]
    },
    rio: {
        texto: "❌ Fim de Jogo! O líquido do rio era altamente corrosivo e danificou trajes e equipamentos de navegação.",
        opcoes: [
            { texto: "Tentar Novamente", proximo: "inicio" }
        ]
    }
};

// Elementos da interface
const elementoTexto = document.getElementById('texto-historia');
const conteinerOpcoes = document.getElementById('opcoes-box');

// Função para renderizar o capítulo na tela
function mostrarCapitulo(chaveCapitulo) {
    const capitulo = capitulos[chaveCapitulo];
    
    // Atualiza o texto principal
    elementoTexto.textContent = capitulo.texto;
    
    // Limpa os botões antigos
    conteinerOpcoes.innerHTML = '';
    
    // Cria os novos botões de escolha
    capitulo.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.className = 'btn-opcao';
        botao.textContent = opcao.texto;
        
        // Evento de clique para ir para a próxima cena
        botao.onclick = () => mostrarCapitulo(opcao.proximo);
        
        conteinerOpcoes.appendChild(botao);
    });
}

// Inicia o jogo no capitulo inicial
mostrarCapitulo('inicio');

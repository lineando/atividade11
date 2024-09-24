// Exibe uma mensagem no console
console.log('Olá mundo!');

// Criando um novo elemento <h1>
let novoElemento = document.createElement('h1');

// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

// Selecionando o elemento body
let elementoBody = document.body;

// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Definindo uma cor de fundo suave
elementoBody.style.backgroundColor = '#e0f7fa'; // Azul claro
elementoBody.style.margin = '0';
elementoBody.style.height = '100vh'; // Para ocupar toda a altura da tela
elementoBody.style.display = 'flex';
elementoBody.style.alignItems = 'center';
elementoBody.style.justifyContent = 'center';
elementoBody.style.position = 'relative'; // Para posicionar os símbolos

// Estilizando o novo elemento
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.textAlign = 'center';
novoElemento.style.padding = '20px';
novoElemento.style.transition = 'color 1s, transform 1s';

// Função para mudar a cor e mover o título
function animarTitulo() {
    let cores = ['red', 'green', 'orange', 'purple', 'pink'];
    let index = 0;

    setInterval(() => {
        // Muda a cor do título
        novoElemento.style.color = cores[index];
        index = (index + 1) % cores.length;

        // Move o título
        let posicao = parseInt(novoElemento.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        novoElemento.style.transform = `translateX(${posicao + 20}px)`;
    }, 1000);
}

// Função para criar e animar símbolos
function criarSimbolos() {
    const simbolos = ['★', '♥', '♦', '☼', '★'];
    const numeroSimbolos = 10;

    for (let i = 0; i < numeroSimbolos; i++) {
        const simbolo = document.createElement('div');
        simbolo.innerText = simbolos[i % simbolos.length];
        simbolo.style.position = 'absolute';
        simbolo.style.fontSize = '24px';
        simbolo.style.opacity = '0.8';

        // Posicionamento aleatório
        simbolo.style.left = Math.random() * 100 + 'vw';
        simbolo.style.top = Math.random() * 100 + 'vh';

        elementoBody.appendChild(simbolo);

        // Animação do símbolo
        setInterval(() => {
            simbolo.style.color = cores[Math.floor(Math.random() * cores.length)];
            simbolo.style.transform = `translateY(${Math.sin(Date.now() / 1000 + i) * 20}px)`;
        }, 500);
    }
}

// Criando a segunda caixa de texto
function criarNome() {
    let nomeElemento = document.createElement('h2');
    nomeElemento.innerText = 'Aline Moreira Araújo';
    nomeElemento.style.position = 'absolute';
    nomeElemento.style.bottom = '20px'; // Posiciona a caixa na parte inferior
    nomeElemento.style.textAlign = 'center';
    nomeElemento.style.fontSize = '24px';
    nomeElemento.style.transition = 'color 1s, transform 1s';
    nomeElemento.style.color = 'darkblue';

    elementoBody.appendChild(nomeElemento);

    // Animação para a segunda caixa
    const coresNome = ['blue', 'purple', 'pink', 'green', 'orange'];
    let index = 0;

    setInterval(() => {
        // Muda a cor do nome
        nomeElemento.style.color = coresNome[index];
        index = (index + 1) % coresNome.length;

        // Aplica rotação e translação
        let rotacao = (parseFloat(nomeElemento.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + 10;
        nomeElemento.style.transform = `rotate(${rotacao}deg) translateY(-5px)`;
    }, 1000);
}

// Inicia as animações
animarTitulo();
criarSimbolos();
criarNome();

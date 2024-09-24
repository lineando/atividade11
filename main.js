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
        // Muda a cor
        novoElemento.style.color = cores[index];
        index = (index + 1) % cores.length;

        // Move o título
        let posicao = parseInt(novoElemento.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
        novoElemento.style.transform = `translateX(${posicao + 20}px)`;
    }, 1000);
}

// Inicia a animação
animarTitulo();

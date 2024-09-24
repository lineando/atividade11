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

// Estilizando o novo elemento
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

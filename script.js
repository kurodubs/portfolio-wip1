const botaoSobre = document.querySelector('.botao-sobre');
const conteudoSobre = document.querySelector('#conteudo-sobre');

botaoSobre.addEventListener('click', () => {
    conteudoSobre.classList.toggle('escondido');
});
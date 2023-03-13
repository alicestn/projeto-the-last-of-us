
        // passo 1 - pegar o elemento html dos botões
        const botoesCarrossel = document.querySelectorAll('.botao');
        const imagens = document.querySelectorAll('.imagem');

        // passo 2- identificar o clique do usuário no botão
        botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {

            console.log(indice)

        // passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa de fundo  
        const  imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 6 - fazer aparecer a imagem de fundo do botão clicado
        imagens[indice].classList.add('ativa');
    })
}) 
    

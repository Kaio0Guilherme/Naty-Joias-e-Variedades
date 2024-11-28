// Função para adicionar produto ao carrinho
function adicionarProduto(button) {
    const descricaoDiv = button.parentElement;
    const nome = descricaoDiv.querySelector('h3').innerText;
    const precoTexto = descricaoDiv.querySelector('.promocao').innerText; // "Promoção: R$ 1,00"
    const preco = parseFloat(precoTexto.replace('Promoção: R$ ', '').replace(',', '.')); // Extração do preço

    adicionarCarrinho(nome, preco);
}

// Função para adicionar ao carrinho
function adicionarCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.nome === nome);
    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Exibe mensagem de confirmação
    mostrarMensagem('Produto adicionado ao carrinho!');
}

// Função para mostrar a mensagem
function mostrarMensagem(mensagem) {
    const mensagemDiv = document.getElementById('mensagemAdicionado');
    mensagemDiv.innerHTML = `<p>${mensagem}</p>`;
    mensagemDiv.style.display = 'block';
    setTimeout(() => {
        mensagemDiv.style.display = 'none';
    }, 2000); // A mensagem desaparece após 2 segundos
}

// Script para abrir/fechar o menu hamburguer
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.style.display = (navList.style.display === 'block') ? 'none' : 'block';
}

function expandirImagem(img) {
    var imgElement = document.getElementById("imgExpandida");
    var expandedImgContainer = document.getElementById("imagemExpandida");
    imgElement.src = img.src; // Altera a imagem expandida para a imagem clicada
    expandedImgContainer.style.display = "flex"; // Exibe a imagem expandida
}

function fecharImagem() {
    var expandedImgContainer = document.getElementById("imagemExpandida");
    expandedImgContainer.style.display = "none"; // Fecha a imagem expandida
}


function adicionarProduto(button) {
        const descricaoDiv = button.parentElement;
        const nome = descricaoDiv.querySelector('h3').innerText;
        const precoTexto = descricaoDiv.querySelector('.promocao').innerText; // "Promoção: R$ 1,00"
        const preco = parseFloat(precoTexto.replace('Promoção: R$ ', '').replace(',', '.')); // Extração do preço

        adicionarCarrinho(nome, preco);
}

    // Função para adicionar ao carrinho
    function adicionarCarrinho(nome, preco) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Verifica se o produto já existe no carrinho
        const produtoExistente = carrinho.find(item => item.nome === nome);
        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }

        // Salva o carrinho atualizado no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Exibe mensagem de confirmação
        mostrarMensagem('Produto adicionado ao carrinho!');
}

    // Função para mostrar a mensagem
    function mostrarMensagem(mensagem) {
        const mensagemDiv = document.getElementById('mensagemAdicionado');
        mensagemDiv.innerHTML = `<p>${mensagem}</p>`;
        mensagemDiv.style.display = 'block';
        setTimeout(() => {
            mensagemDiv.style.display = 'none';
        }, 2000); // A mensagem desaparece após 2 segundos
    }

    function expandirImagem(img) {
        var imgElement = document.getElementById("imgExpandida");
        var expandedImgContainer = document.getElementById("imagemExpandida");
        imgElement.src = img.src; // Altera a imagem expandida para a imagem clicada
        expandedImgContainer.style.display = "flex"; // Exibe a imagem expandida
    }

    function fecharImagem() {
        var expandedImgContainer = document.getElementById("imagemExpandida");
        expandedImgContainer.style.display = "none"; // Fecha a imagem expandida
    }

    // Função para mudar as imagens
    function mudarImagem(direcao, idCarrossel) {
        var carrossel = document.getElementById(idCarrossel);
        var itens = carrossel.querySelectorAll('.carousel-item');
        var ativo = carrossel.querySelector('.carousel-item.active');
        var indiceAtivo = Array.from(itens).indexOf(ativo);

        var novoIndice = indiceAtivo + direcao;
        if (novoIndice < 0) novoIndice = itens.length - 1;
        if (novoIndice >= itens.length) novoIndice = 0;

        // Remove a classe 'active' da imagem atual
        ativo.classList.remove('active');
        // Adiciona a classe 'active' à próxima imagem
        itens[novoIndice].classList.add('active');
    }


    function mostrarToast() {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
    
        // Ocultar automaticamente após 3 segundos
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }
    
    function adicionarProduto(botao) {
        // Lógica para adicionar ao carrinho (você deve já ter)
        console.log("Produto adicionado ao carrinho");
    
        // Exibir o toast
        mostrarToast();
    }

    function mostrarToast() {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
    
        // Ocultar automaticamente após 3 segundos
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }
    
    function adicionarProduto(botao) {
        // Lógica para adicionar ao carrinho (você deve já ter)
        console.log("Produto adicionado ao carrinho");
    
        // Exibir o toast
        mostrarToast();
    }
    
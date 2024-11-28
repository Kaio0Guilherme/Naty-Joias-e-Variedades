let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById('itensCarrinhoList');
    carrinhoDiv.innerHTML = ''; // Limpa o conteúdo atual do carrinho

    carrinho.forEach((item, index) => {
        carrinhoDiv.innerHTML += `
            <div class="item-carrinho">
                <p>${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                <button onclick="alterarQuantidade(${index}, 'incrementar')">+</button>
                <button onclick="alterarQuantidade(${index}, 'decrementar')">-</button>
                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });

    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    document.getElementById('totalCarrinho').innerText = `Total: R$ ${total.toFixed(2)}`;
}

function alterarQuantidade(index, tipo) {
    if (tipo === 'incrementar') {
        carrinho[index].quantidade++;
    } else if (tipo === 'decrementar' && carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

function removerItem(index) {
    carrinho.splice(index, 1); // Remove o item do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarCarrinho();
});

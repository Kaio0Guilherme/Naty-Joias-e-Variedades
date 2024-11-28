document.addEventListener("DOMContentLoaded", () => {
    exibirItensComprados();
    atualizarTotalCompra();
});

// Função que exibe os itens do carrinho na lista
function exibirItensComprados() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const listaItens = document.getElementById("listaItens");

    if (carrinho.length === 0) {
        listaItens.innerHTML = "<li>Seu carrinho está vazio.</li>";
        return;
    }

    listaItens.innerHTML = carrinho
        .map(item => `<li>${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</li>`)
        .join("");
}

// Função que calcula o frete com base no CEP
function calcularFrete() {
    const cep = document.getElementById('cep').value;
    const freteElement = document.getElementById('frete');
    
    if (cep.length === 8) {
        if (cep.startsWith('0')) {
            freteElement.value = 'R$ 15,00'; // Frete para CEPs que começam com 0
        } else {
            freteElement.value = 'R$ 30,00'; // Frete para outros CEPs
        }
        atualizarTotalCompra();
    } else {
        freteElement.value = 'R$ 0,00'; // Frete padrão
    }
}

// Função para atualizar o total da compra (incluindo frete)
function atualizarTotalCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalCompra = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    
    const frete = parseFloat(document.getElementById('frete').value.replace('R$ ', '').replace(',', '.'));
    const totalFinal = totalCompra + frete;

    document.getElementById('totalCompra').innerText = `Total: R$ ${totalFinal.toFixed(2)}`;
}

// Função para exibir ou ocultar o campo de parcelas dependendo da forma de pagamento
function exibirParcelas() {
    const formaPagamento = document.getElementById("formaPagamento").value;
    const parcelasDiv = document.getElementById("parcelas");

    if (formaPagamento === "credito") {
        parcelasDiv.style.display = "block";
    } else {
        parcelasDiv.style.display = "none";
    }
}

// Função para enviar a mensagem para o WhatsApp
function enviarWhatsApp(event) {
    event.preventDefault();

    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const formaPagamento = document.getElementById('formaPagamento').value;
    const frete = document.getElementById('frete').value;
    const totalCompra = document.getElementById('totalCompra').innerText.replace('Total: R$ ', '').replace(',', '.');

    // Recupera os itens do carrinho
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let itensCompra = '*Itens Comprados:*\n';

    carrinho.forEach(item => {
        itensCompra += `- ${item.nome} (R$ ${item.preco.toFixed(2)}) x ${item.quantidade}\n`;
    });

    // Monta a mensagem para o WhatsApp
    let mensagem = `*Compra Realizada*\n\n`;
    mensagem += `*Endereço de Entrega:*\n`;
    mensagem += `CEP: ${cep}\nRua: ${rua}\nNúmero: ${numero}\nBairro: ${bairro}\nCidade: ${cidade}\nEstado: ${estado}\n\n`;
    mensagem += `${itensCompra}\n`; 
    mensagem += `*Forma de Pagamento:* ${formaPagamento}\n`;
    mensagem += `*Frete:* ${frete}\n`;
    mensagem += `*Total da Compra:* R$ ${totalCompra}\n`;

    // Substituir espaços e caracteres especiais
    mensagem = encodeURIComponent(mensagem);

    // Link do WhatsApp
    const telefone = '55' + '73999585314'; // Substitua pelo número de telefone
    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    // Redirecionar para o WhatsApp
    window.location.href = url;
}

function salvarProduto() {
    var nomeProduto = document.getElementById('nomeProduto').value;
    var precoProduto = document.getElementById('precoProduto').value;
    var categoriaProduto = document.getElementById('categoriaProduto').value;
    var imagemProduto = document.getElementById('imagemProduto').files[0]; // Captura o arquivo de imagem

    // Criando um novo elemento div para exibir as informações do produto atual
    var novoProduto = document.createElement('div');
    novoProduto.classList.add('info-produto');

    // Adicionando as informações do produto ao novo elemento div
    novoProduto.innerHTML = `
        <p>Nome: ${nomeProduto}</p>
        <p>Preço: ${precoProduto}</p>
        <p>Categoria: ${categoriaProduto}</p>
        <p>Imagem:</p>
        <img src="${URL.createObjectURL(imagemProduto)}" alt="Imagem do produto" class="imagem-produto">
    `;

    // Adicionando o novo elemento div ao final da div exibirProdutos
    var exibirProdutos = document.getElementById('exibirProdutos');
    exibirProdutos.appendChild(novoProduto);

    // Limpar apenas os campos do formulário que recebem entrada do usuário
    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoProduto').value = '';
    document.getElementById('imagemProduto').value = ''; // Limpa a seleção do arquivo
}

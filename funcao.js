function saveProduct() {
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productCategory = document.getElementById('productCategory').value;
    var productImage = document.getElementById('productImage').files[0]; // Captura o arquivo de imagem

    // Criando um novo elemento div para exibir as informações do produto atual
    var newProductInfo = document.createElement('div');
    newProductInfo.classList.add('product-info');

    // Adicionando as informações do produto ao novo elemento div
    newProductInfo.innerHTML = `
        <p>Nome: ${productName}</p>
        <p>Preço: ${productPrice}</p>
        <p>Categoria: ${productCategory}</p>
        <p>Imagem:</p>
        <img src="${URL.createObjectURL(productImage)}" alt="Imagem do produto" class="product-img">
    `;

    // Adicionando o novo elemento div ao final da div displayInfo
    var displayInfo = document.getElementById('displayInfo');
    displayInfo.appendChild(newProductInfo);

    // Limpando apenas os campos do formulário que recebem entrada do usuário
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = ''; // Limpa a seleção do arquivo
}

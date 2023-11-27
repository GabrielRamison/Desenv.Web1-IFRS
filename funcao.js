function saveProduct() {
    var productName = document.getElementById('productName').value;
    var productImage = document.getElementById('productImage').value; // Aqui você pegaria o caminho do arquivo, mas não é possível obter diretamente por questões de segurança.
    var productPrice = document.getElementById('productPrice').value;
    var productCategory = document.getElementById('productCategory').value;

    // Simulando armazenamento temporário dos dados usando localStorage
    var productData = {
        name: productName,
        // Aqui você pode armazenar outros dados do produto, mas não é recomendado armazenar a imagem diretamente no local storage.
        price: productPrice,
        category: productCategory
    };

    // Armazenando os dados no localStorage
    var products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));

    // Você pode adicionar um alert ou outra ação para indicar que o produto foi salvo temporariamente
    alert('Produto salvo temporariamente!');
}
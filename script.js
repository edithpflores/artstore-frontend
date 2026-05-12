async function loadProducts() {

    const response = await fetch('http://127.0.0.1:61126/products');    
    const products = await response.json();

    const productsList = document.getElementById('products');

    productsList.innerHTML = '';

    products.forEach(product => {

        const li = document.createElement('li');

        li.textContent = product.name;

        productsList.appendChild(li);
    });
}
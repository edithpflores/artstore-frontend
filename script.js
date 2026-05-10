async function loadProducts() {

    const response = await fetch('http://localhost:3000/products');

    const products = await response.json();

    const productsList = document.getElementById('products');

    productsList.innerHTML = '';

    products.forEach(product => {

        const li = document.createElement('li');

        li.textContent = product.name;

        productsList.appendChild(li);
    });
}
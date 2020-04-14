const productsContainer = document.querySelector("#products");
  
myProducts = JSON.stringify(products);
const productList = JSON.parse(myProducts);




for (const product of productList) {

const divProd = document.createElement('div');
divProd.classList.add(`${product.id}`);
productsContainer.appendChild(divProd);

const img = document.createElement('img');
img.src = product.img;
divProd.appendChild(img);

const prodName = document.createElement('h3');
prodName.innerText = product.name;
divProd.appendChild(prodName);

const pPrice = document.createElement('p');
pPrice.innerText = product.price;
divProd.appendChild(pPrice);

const select = document.createElement('select');
divProd.appendChild(select);


//set number of options
for (let i=0; i <= product.max_quantity; i++) {

    const option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}


}


///BUDGET UPDATES TBD




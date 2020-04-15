const productsContainer = document.querySelector("#products");
  
myProducts = JSON.stringify(products);
const productList = JSON.parse(myProducts);


let totalBudget = 50;
// let remainingBudget = 50;
const remainingBudget = document.querySelector('span');


for (const product of productList) {

const divProd = document.createElement('div');
divProd.classList.add(`item_${product.id}`);
productsContainer.appendChild(divProd);

const img = document.createElement('img');
img.src = product.img;
divProd.appendChild(img);

const prodName = document.createElement('h3');
prodName.innerText = product.name;
divProd.appendChild(prodName);

const p = document.createElement('p');
p.innerText = product.price;
divProd.appendChild(p);

const select = document.createElement('select');
select.id = 'id' + product.id
select.setAttribute('onchange', `selectOption(${product.id})`)
divProd.appendChild(select);


//set number of options
for (let i=0; i <= product.max_quantity; i++) {

    const option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}

}

const object = {}

//Select quantities by product
const selectOption = (id) => {
    const select_id = document.querySelector('#id' + id);
    console.log(select_id);

    let quantity = select_id.value
    let price = productList[id - 1].price
    let each_total = quantity * price

    console.log(each_total)

    object[id] = each_total //{1:12.99}
    console.log(object);
    balance();

}
  

// object{}
// {1:12.99, 2:4.55}

// 12.99 + 4.55 + 
// total value
// balance = budget - totalvalue


///BUDGET UPDATES TBD

//sum of obj values

// const totalPrice = () => {
//     let totalToPay = 0;
//     for (let key in object) {
//     totalToPay += object[key];
//     return totalToPay;
//   }
// };


const balance = () => {
  let totalToPay = 0;
  for (let key in object) {
    totalToPay += object[key];
  }

  let balance = totalBudget - totalToPay;


  if(totalBudget < totalToPay) {
    errorMsg()
    

  } else {
   
    remainingBudget.innerText = `£${balance.toFixed(2)}`;
  }
} 




  const errorMsg = () => {

    const errorElement = document.createElement('div');
    const cart = document.querySelector('#cart');
    errorElement.classList.add('error');
    errorElement.innerText = 'Not enough money left for that!';

    cart.appendChild(errorElement);

  }


  











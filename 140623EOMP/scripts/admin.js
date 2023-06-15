
function addItemsToTable() {
  let tableBody = document.getElementById("adminTableBody");
  clearTable(); // Clear existing table rows
  let products = JSON.parse(localStorage.getItem('products')) || [];

  //creating rows inside the admin page 
  for (let i = 0; i < products.length; i++) {
    let newRow = tableBody.insertRow(-1);
    let block1 = newRow.insertCell(0);
    let block2 = newRow.insertCell(1);
    let block3 = newRow.insertCell(2);
    let block4 = newRow.insertCell(3);
    let block5 = newRow.insertCell(4); //edit btn
    let block6 = newRow.insertCell(5); //del btn

    block1.innerHTML = products[i].id;
    block2.innerHTML = products[i].name;
    block3.innerHTML = products[i].description;
    block4.innerHTML = products[i].price;
  }
}

function clearTable() {
  let tableBody = document.getElementById("adminTableBody");
  tableBody.innerHTML = "";
}

function addItemsToProductsContainer() {
  let productsContainer = document.getElementById("productsContainer");
  clearProductsContainer(); // Clear existing cards

  let products = JSON.parse(localStorage.getItem('products')) || [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "28rem";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardBody.innerHTML = `
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text">Price: $${product.price}</p>
      <button class="btn btn-primary">Add</button>
      <button class="btn btn-danger">Delete</button>
    `;

    card.appendChild(cardBody);
    productsContainer.appendChild(card);
  }
}

function clearProductsContainer() {
  let productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";
}

function saveProduct(product) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}

function addProduct(event) {
  event.preventDefault();

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;

  let product = {
    id: id,
    name: name,
    description: description,
    price: price
  };

  saveProduct(product);
  clearForm();
  location.reload();
}

function clearForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
}

window.onload = function () {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  addItemsToTable();
  addItemsToProductsContainer();
};


// checkout js

function appendItemToCheckoutTable(item, description, price) {
  let tableBody = document.getElementById("checkoutTableBody");

  let newRow = tableBody.insertRow(-1);
  let block1 = newRow.insertCell(0);
  let block2 = newRow.insertCell(1);
  let block3 = newRow.insertCell(2);

  block1.innerHTML = item;
  block2.innerHTML = description;
  block3.innerHTML = price;
}

document.addEventListener("DOMContentLoaded", function() {
  let addButtons = document.querySelectorAll("#pro-cards .btn-primary");

  addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      let card = button.parentNode.parentNode;
      let name = card.querySelector(".card-title").innerText;
      let description = card.querySelector(".card-text").innerText;
      let price = card.querySelector(".card-text:nth-child(3)").innerText;

      appendItemToCheckoutTable(name, description, price);
    });
  });
});


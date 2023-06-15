function appendProductCard(id, name, description, price) {
    var productCards = document.getElementById("productCards");
  
    var card = document.createElement("div");
    card.classList.add("card");
  
    var idElem = document.createElement("p");
    idElem.innerHTML = "ID: " + id;
    card.appendChild(idElem);
  
    var nameElem = document.createElement("p");
    nameElem.innerHTML = "Name: " + name;
    card.appendChild(nameElem);
  
    var descriptionElem = document.createElement("p");
    descriptionElem.innerHTML = "Description: " + description;
    card.appendChild(descriptionElem);
  
    var priceElem = document.createElement("p");
    priceElem.innerHTML = "Price: " + price;
    card.appendChild(priceElem);
  
    var addToCartBtn = document.createElement("button");
    addToCartBtn.innerHTML = "Add to Cart";
    addToCartBtn.addEventListener("click", function() {
      addToCart(id, name, description, price);
    });
    card.appendChild(addToCartBtn);
  
    productCards.appendChild(card);
  }
  
  // Dummy data (replace with actual data from the admin page)
  var dummyData = [
    { id: 1, name: "Product 1", description: "Description 1", price: 10 },
    { id: 2, name: "Product 2", description: "Description 2", price: 20 },
    { id: 3, name: "Product 3", description: "Description 3", price: 30 }
  ];
  
  // Append product cards using the dummy data
  for (var i = 0; i < dummyData.length; i++) {
    appendProductCard(dummyData[i].id, dummyData[i].name, dummyData[i].description, dummyData[i].price);
  }
  
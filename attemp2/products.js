function addToCart(button) {
    var card = button.parentNode;
    var id = card.querySelector(".id").innerText;
    var name = card.querySelector(".name").innerText;
    var description = card.querySelector(".description").innerText;
    var price = card.querySelector(".price").innerText;
  
    addProductToCheckout(id, name, description, price);
  }
  
  function addProductToCheckout(id, name, description, price) {
    var table = parent.opener.document.getElementById("checkoutTable");
    var row = table.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var descriptionCell = row.insertCell(2);
    var priceCell = row.insertCell(3);
  
    idCell.innerHTML = id;
    nameCell.innerHTML = name;
    descriptionCell.innerHTML = description;
    priceCell.innerHTML = price;
  
    parent.opener.saveToLocalStorage(id, name, description, price);
  }
  
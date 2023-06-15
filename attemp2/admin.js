function addProduct() {
    var id = document.getElementById("idInput").value;
    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;
    var price = document.getElementById("priceInput").value;
  
    var table = document.getElementById("adminTable");
    var row = table.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var descriptionCell = row.insertCell(2);
    var priceCell = row.insertCell(3);
  
    idCell.innerHTML = id;
    nameCell.innerHTML = name;
    descriptionCell.innerHTML = description;
    priceCell.innerHTML = price;
  
    addProductToCards(id, name, description, price);
  }
  
  function addProductToCards(id, name, description, price) {
    var cards = document.getElementsByClassName("productCard");
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var cardId = card.querySelector(".id").innerText;
  
      if (cardId === id) {
        var nameElement = card.querySelector(".name");
        var descriptionElement = card.querySelector(".description");
        var priceElement = card.querySelector(".price");
  
        nameElement.innerHTML = name;
        descriptionElement.innerHTML = description;
        priceElement.innerHTML = price;
  
        break;
      }
    }
  }
  
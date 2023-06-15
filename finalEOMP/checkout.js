function addToCart(id, name, description, price) {
    var table = document.getElementById("checkoutTable");
    var row = table.insertRow(-1);
    var itemCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var descriptionCell = row.insertCell(2);
    var priceCell = row.insertCell(3);
  
    itemCell.innerHTML = id;
    nameCell.innerHTML = name;
    descriptionCell.innerHTML = description;
    priceCell.innerHTML = price;
  }
  
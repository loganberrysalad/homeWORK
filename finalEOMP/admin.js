function addProduct() {
    var table = document.getElementById("adminTable");
    var productId = document.getElementById("productId").value;
    var productName = document.getElementById("productName").value;
    var productDescription = document.getElementById("productDescription").value;
    var productPrice = document.getElementById("productPrice").value;
  
    var row = table.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var descriptionCell = row.insertCell(2);
    var priceCell = row.insertCell(3);
  
    idCell.innerHTML = productId;
    nameCell.innerHTML = productName;
    descriptionCell.innerHTML = productDescription;
    priceCell.innerHTML = productPrice;
  
    // Clear input fields
    document.getElementById("productId").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productPrice").value = "";
  }
  
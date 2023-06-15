function loadFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("checkoutData"));
  
    if (data) {
      let table = document.getElementById("checkoutTable");
  
      data.forEach(function (product) {
        let row = table.insertRow(-1);
        let idCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let descriptionCell = row.insertCell(2);
        let priceCell = row.insertCell(3);
  
        idCell.innerHTML = product.id;
        nameCell.innerHTML = product.name;
        descriptionCell.innerHTML = product.description;
        priceCell.innerHTML = product.price;
      });
    }
  }
  
  function saveToLocalStorage(id, name, description, price) {
    let product = {
      id: id,
      name: name,
      description: description,
      price: price,
    };
  
    let data = JSON.parse(localStorage.getItem("checkoutData")) || [];
    data.push(product);
  
    localStorage.setItem("checkoutData", JSON.stringify(data));
  }
  
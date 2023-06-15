// Current date
let currentDate = new Date().toLocaleDateString();
document.querySelector('#currentDate').textContent = currentDate;
// Get data from the products local storage
let products = JSON.parse(localStorage.getItem('products'));
// Sorting button
let btnSorting = document.querySelector('#sorting');
// Add a new product
let saveProduct = document.querySelector('#saveProduct');
let adminTbody = document.querySelector('#admin');
// Display function
function display() {
    try{
        adminTbody.innerHTML = "";
        if(!products.length) throw "Please add products";
        products?.forEach(item=>{
            adminTbody.innerHTML += `
                <tr>
                    <td>
                        <div class="flex-wrapper">
                            <img src="${item.image}" alt="${item.id}" loading="lazy"/>
                            <h4>${item.make}</h4>
                        </div>
                    </td>
                    <td>${item.spec}</td>
                    <td>R${item.amount}</td>
                    <td id="btnCols">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editProduct${item.id}">Edit</button>
                        <!-- Modal -->
                        <div class="modal fade" id="editProduct${item.id}" tabindex="-1" aria-label="editProductLabel${item.id}" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editProductLabel${item.id}">Edit Product</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form class="form g-2">
                                    <div class="container">
                                        <input class="form-control" type="text" placeholder="Enter your laptop's make" value='${item.make}' name="admin-make" id="admin-make${item.id}" required>
                                        <textarea class="form-control my-2" placeholder="Enter your laptop's specs" required name="admin-spec" id="admin-spec${item.id}">${item.spec}</textarea>
                                        <input class="form-control" type="number" placeholder="Enter the amount" value='${item.amount}' name="admin-amount" id="admin-amount${item.id}" required>
                                        <input class="form-control my-2" type="url" placeholder="Enter the image's url" value='${item.image}' name="admin-image" id="admin-image${item.id}" required>
                        td            </div>
                                  </form>
                                </div>
                                <div class="modal-footer my-2">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCloseModal">Close</button>
                                  <button type="button" class="btn btn-success" onclick='new EditProduct(${JSON.stringify(item)})'>Save changes</button>
                                </div>
                              </div>
                            </div>
                        </div>        
                        <button class="btn btn-secondary" onclick='deleteProduct(${JSON.stringify(item)})'>Delete</button>
                    </td>     
                </tr>
            `
        });
    }catch(e) {
        alert(e);
    }
};
display();
// Sorting
let isToggle = false;
btnSorting.addEventListener('click',()=>{
    if(!isToggle) {
        products.sort((a, b)=> b.id - a.id);
        btnSorting.textContent = "Sorted by desc (ID)";
        isToggle = true;
    }else {
        products.sort((a, b)=> a.id - b.id);
        btnSorting.textContent = "Sorted by asc (ID)";
        isToggle = false;
    }
    display();
})
// Add a new product
saveProduct.addEventListener('click', ()=>{
    // Get the last ID value
    try{
        const make = document.querySelector('#addMake').value;
        const spec = document.querySelector('#addSpec').value;
        const amount = document.querySelector('#addAmount').value;
        const image = document.querySelector('#addImage').value;
        
        let id = products.map(item=> item.id).at(-1) >= 1 ? 
        products.map(item=> item.id).at(-1) : 0;
        id++;
        products.push({
            id, 
            make,
            spec,
            amount,
            image
        });
        // Update the local storage with the latest product.
        localStorage.setItem('products', JSON.stringify(products));
        display();
    }catch(e) {
        alert(e);
    }

});
// Edit
function EditProduct(item) {
    this.id = item.id;
    this.make = document.querySelector(`#admin-make${item.id}`).value;
    this.spec = document.querySelector(`#admin-spec${item.id}`).value;
    this.amount = document.querySelector(`#admin-amount${item.id}`).value;
    this.image = document.querySelector(`#admin-image${item.id}`).value;
    
    let itemIndex = products.findIndex((data)=>{
        return data.id === item.id;
    })
    // Update
    products[itemIndex] = Object.assign({}, this);
    localStorage.setItem('products', JSON.stringify(products));
    display();
    location.reload();
}
// Delete
function deleteProduct(item) {
    let index = products.findIndex(a => {
        return a.id == item.id
    });
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    display();
}   
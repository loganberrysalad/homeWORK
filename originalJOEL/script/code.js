// Current date
let currentDate = new Date().toLocaleDateString();
document.querySelector('#currentDate').textContent = currentDate;
// products
let products = JSON.parse(localStorage.getItem('products')) ? 
    JSON.parse(localStorage.getItem('products')) : 
        localStorage.setItem('products', 
        JSON.stringify( 
            [
                {
                    "id": 1,
                    "make": "Dell",
                    "spec": "Latitude-E5450 i3 5th, HDD 1TB, RAM 16GB, Operating System Windows 11 Business",
                    "amount": 25000.00,
                    "image": "https://i.postimg.cc/65tcMqdc/Dell-Latitude-E5450-i3-5th-GEN-1-for-business-10000.jpg"
                },
                {
                    "id": 2,
                    "make": "Acer",
                    "spec": "Extensa 15.6 inch, SSD 256GB, RAM 8GB, Operating System Windows 10 Home",
                    "amount": 6240.00,
                    "image": "https://i.postimg.cc/gJKtZmp1/Acer-Extensa-15-6-inch-256-GBSSd-8-GBRAM.png"
                },
                {
                    "id": 3,
                    "make": "Acer",
                    "spec": "Travel Mate Intel Core i5, SSD 512GB, RAM 8GB, Operating System Windows 10 Pro",          
                    "amount": 10000.00,
                    "image": "https://i.postimg.cc/0j2WGF2j/Acer-Travel-Mate-Intel-Corei5-SSD512-8-GBRAM.png"
                },
                {
                    "id": 4,
                    "make": "Lenovo",
                    "spec": "Idea Pad Intel Celeron, HDD 1TB, RAM 4GB, Operating System Windows 10 Home",
                    "amount": 6350.00,
                    "image": "https://i.postimg.cc/rwwdXLQg/Lenovo-IDea-Pad-1-TBHDD-4-GBRAM-6350.png"
                },
                {
                    "id": 5,
                    "make": "HP",
                    "spec": "Elite Book Intel core i5, SSD 256GB, RAM 8GB, Operating System Windows 11",
                    "amount": 25800.00,
                    "image": "https://i.postimg.cc/7Y83v1PB/HPElite-Book-Intel-Core-i5-1135-G7-256-GBSSD-8-GB.png"
                }
            ]
        ))
// Input element, search laptop by make
let searchByMake = document.querySelector('#searchByMake');
// Sorting by price
let sortingByPrice = document.querySelector('#sortingByPrice');
// Products wrapper
let productCard = document.querySelector('#productCard');
// CheckOutList
let CheckOutList = [];
// Display data to the index.html
function displayProducts() {
    try{
        // Clear 
        productCard.innerHTML = "";
        // Display
        if(products) {
            products?.forEach((item)=> {
                productCard.innerHTML += `
                <div class="card">
                    <div class="card-header bg-gradient bg-transparent">
                        <h3>${item.make}</h3>
                        <h4>${item.spec.split(', ')[0]}</h4>
                    </div>
                    <div class="card-body">
                        <img class="img-fluid" src="${item.image}" loading="lazy"/>
                        <div>                    
                            <span>Spec: 
                                <li>${item.spec}</li>
                            </span>
                        </div>
                        <button class="btn btn-success" onclick='checkoutProducts(${JSON.stringify(item)})'>Add to checkout</button>
                    </div>
                    <div class="card-footer bg-gradient bg-transparent">
                        <p class="product-amount">Price: R${item.amount}</p>
                    </div>
                </div>
                `
            })    
        }else {
            products = JSON.parse(localStorage.getItem("products"))
            productCard.innerHTML = 
            `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            `
            location.reload()
        }
    }catch(e) {
        console.log(`Error message: ${e.message}`);
    }
};
displayProducts();
//
function checkoutProducts(item) {
    try{
        // Save the selected product into an array.
        CheckOutList.push(item);
        localStorage.setItem('checkout', JSON.stringify(CheckOutList));
    }catch(e) {
        console.log(`Error message: ${e.message}`);
    }
}
searchByMake.addEventListener('keyup', ()=> {
    try{
        if(!searchByMake.value.length){
            displayProducts();
        }
        let filterByMake = products.filter((item)=>{
            return item.make.toLowerCase().
            includes(searchByMake.value.toLowerCase())
        })
        // Clear 
        productCard.innerHTML = "";
        // Display
        filterByMake.forEach((item)=> {
            productCard.innerHTML += `
            <div class="card">
                <div class="card-header bg-gradient bg-transparent">
                    <h3>${item.make}</h3>
                    <h4>${item.spec.split(', ')[0]}</h4>
                </div>
                <div class="card-body">
                    <img class="img-fluid" src="${item.image}" loading="lazy"/>
                    <div>                    
                        <span>Spec: 
                            <li>${item.spec}</li>
                        </span>
                    </div>
                    <button class="btn btn-success" onclick='checkoutProducts(${JSON.stringify(item)})'>Add to checkout</button>
                </div>
                <div class="card-footer bg-gradient bg-transparent">
                    <p class="product-amount">Price: R${item.amount}</p>
                </div>
            </div>
            `
        })
        if(!filterByMake.length) throw "This product is not yet available";
    }catch(e) {
        productCard.innerHTML = e;
    }
})
// Sorting by price
sortingByPrice.addEventListener('click', (e)=> {
    e.preventDefault();
    try{
        if(!products) throw "Please try again later."; 
        products.sort((a, b)=> a.amount - b.amount);
        displayProducts();
    }catch(e) {
        productCard.innerHTML = e;
    }
})
// Current date
let currentDate = new Date().toLocaleDateString();
document.querySelector('#currentDate').textContent = currentDate;
let chkOutList = JSON.parse(localStorage.getItem('checkout')) ? 
JSON.parse(localStorage.getItem('checkout')) : [];
let tbody = document.querySelector('tbody');
(function displayCheckOut() {
    try{
        if(!chkOutList.length) throw "Please add the product to the checkout list.";
        let sortedArr = chkOutList.sort((a, b)=> a.id - b.id)
        let groupBy = sortedArr.reduce((a, b)=>{
            a[b.id] = a[b.id] ?? [];
            a[b.id].push(b)
            return a
        }, {});
        console.log(groupBy);
        let amountDue = 0;
        for(let idx in groupBy){
            let totalAmount = groupBy[idx].length * groupBy[idx][0].amount;  
            amountDue += totalAmount;
            tbody.innerHTML += `
                <tr>
                    <td>${groupBy[idx][0].make}</td>
                    <td>${groupBy[idx][0].spec}</td>
                    <td>${groupBy[idx].length}</td>
                    <td>R${totalAmount}</td>
                </tr>
            `
        }
        // Display the amount due
        tbody.innerHTML +=`
            <tr class="amount-due">
                <td></td>                    
                <td></td>                    
                <td>Amount Due:</td> 
                <td>R${amountDue}</td>
            </tr>
        `
    }catch(e) {
        tbody.innerText = e;
        tbody.style = "font-weight: bold; font-size: 2rem;"
    }
})();
// Clear all
let clearAll = document.querySelector('#clearAll');
clearAll.addEventListener('click', ()=>{
    localStorage.removeItem('checkout');
    tbody.innerHTML = "Please add the product to the checkout list.";
})
let listCart = [];
let displayQuantity=0;
let displayPrice=0;
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();

function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">RS.${product.price}</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = "RS." + totalPrice;
    displayQuantity=totalQuantity;
    displayPrice=totalPrice;
}
let productarray=[];
listCart.forEach(item =>{
    if(item){
        productarray.push(`[${item.name} -> Quantity: '${item.quantity}'] `);
    }
})
//productarray.push(`TotalQuantity = ${displayQuantity}"Items,TotalPrice = RS.${displayPrice} /-`);
console.log(productarray);
function check(){
    alert("Click Ok to confirm order\nTracking Id will be shared through whatsapp by end ok the day");
    
var name=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var address=document.getElementById("address").value;
var pincode=document.getElementById("pincode").value;
var transactionid=document.getElementById("transid").value;



var url = "https://wa.me/919159220534?text="
                + "TransactionID: " + transactionid + "%0a"
                + "Name: " + name + "%0a"
                + "Phone: " + phone + "%0a"
                + "Address: " + address + "%0a"
                + "Pincode:" + pincode + "%0a"
                + "Products:"+"%0a" + productarray+ "%0a"
                + "TotalQuantity = " + displayQuantity +"'Items"+ "%0a"
                + "TotalPrice = RS." + displayPrice
                
                ;

            window.open(url, '_blank').focus();

}









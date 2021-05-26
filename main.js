
var firstTime=true;
 var addtocart = document.getElementsByClassName('addtocart')
 for (var i = 0; i < addtocart.length; i++) {
     var button = addtocart[i]
     button.addEventListener('click', addToCartClicked)
 }
var firstTime=true;

 function addToCartClicked(event){
    
    var button = event.target
    var cardbody = button.parentElement.parentElement
    var title = cardbody.getElementsByClassName('product-title')[0].innerText
    var price = cardbody.getElementsByClassName('product-price')[0].innerText
    var size = cardbody.getElementsByClassName('product-size')[0].innerText
    addItemToCart(title, price, size)
    updateCartTotal()

 }

 function addItemToCart(title, price, size) {
    var cartRow = document.createElement('tr')
    let cartItems= document.getElementById("inserthere");
    
    if(!firstTime){
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
            for (var i = 0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == title) {
                    alert('This item is already added to the cart')
                    return
                }
            }
    }
    let totalp= parseFloat(price.replace('$', ''));
    var cartRowContents = `
    <th><img class="cart-item-image" src="https://source.unsplash.com/100x100/?food"  height="40"></th>
            <td class="cart-item-title">${title}</td>
            <td>${size}</td>
            <td><span class="qty">1</span><button class="btn btn-success mx-1" onclick='inc_quantity()'>+</button><button class="btn btn-danger" onclick='dec_quantity()'>-</button><button class="btn btn-close"onclick='removeCartItem()'></button></td>
            <td class="price">${price}</td>
            <td class="tp">$ ${totalp}</td>   
    `;
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow) 
    firstTime=false;
    updateTotalPrice();
}

function inc_quantity(){
let Pelm= inc_quantity.caller.arguments[0].target.parentElement;
let elm= inc_quantity.caller.arguments[0].target.parentElement.parentElement;
let price= elm.getElementsByClassName('price')[0].innerText;

let total_price= elm.getElementsByClassName('tp')[0];

let quantelm=Pelm.getElementsByClassName('qty')[0];
quantelm.innerText= ""+ (parseFloat(quantelm.innerText) + 1);
total_price.innerText= "$" + (parseFloat(quantelm.innerText)*(parseFloat(price.replace('$',''))));
updateTotalPrice();
}

function dec_quantity(){

let Pelm= dec_quantity.caller.arguments[0].target.parentElement;
let elm= dec_quantity.caller.arguments[0].target.parentElement.parentElement;
let price= elm.getElementsByClassName('price')[0].innerText;
let total_price= elm.getElementsByClassName('tp')[0];
let quantelm=Pelm.getElementsByClassName('qty')[0];

    if(parseFloat(quantelm.innerText) > 0){ 
    quantelm.innerText= ""+ (parseFloat(quantelm.innerText) - 1);
    total_price.innerText= "$" + (parseFloat(quantelm.innerText)*(parseFloat(price.replace('$',''))));
    updateTotalPrice();
    }
   
    
}

function removeCartItem(){
    let elm= removeCartItem.caller.arguments[0].target.parentElement.parentElement;
    elm.remove();
    updateTotalPrice();
}

function updateTotalPrice(){
    let Final_total=0;
    let cartItems= document.getElementsByClassName('tp');
    for (let i = 0; i < cartItems.length; i++) {
       Final_total+= parseFloat(cartItems[i].innerText.replace('$',''));
        
    }
    document.getElementsByClassName('total-amount')[0].innerText= '$'+ Final_total;

    document.getElementsByClassName('total-amount')[1].innerText= '$'+ Final_total;
}
// This is my first card 
let serial = 0;
document.getElementById('first-cart').addEventListener('click', function(){
    // this is my first card data 
    serial += 1;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity =document.getElementById('first-quantity').innerText;
    // console.log(productName, productPrice, productQuantity);

    // Multilpy first cart data 
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);


    // Show the first card function dada called in this
    displayAllData(productName, productPrice, productQuantity, priceTotal);
    disAbleld('first-cart');
  
});

    
// This is my second card 
document.getElementById('second-card').addEventListener('click', function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    // this is my second card data with event parentNode
    serial += 1;
    const productNameSecond = e.target.parentNode.parentNode.children[0].innerText;
    const productPriceSecond = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantitySecond = e.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productName,productPrice,productQuantity);

    // Sumation second card data
    const sumTotal = parseInt(productPriceSecond) + parseInt(productQuantitySecond);


    // Show the second card function dada called in this
    displayAllData(productNameSecond, productPriceSecond, productQuantitySecond, sumTotal);
    disAbleld('second-card');
});


// This is my third card
document.getElementById('third-card').addEventListener('click', function(){

    // this is my third card data with getElementById
    serial += 1;
    const productNameThird = document.getElementById('third-name').innerText;
    const productPriceThird = document.getElementById('third-total').innerText;
    const productQuantityThird = document.getElementById('third-quantity').innerText;

    // Sumation third card data
    const minusTotal = parseInt(productPriceThird) - parseInt(productQuantityThird);

    // Show the third card function dada called in this
    displayAllData(productNameThird, productPriceThird, productQuantityThird, minusTotal);
    disAbleld('third-card');
});


// This is my four card 
document.getElementById('four-card').addEventListener('click', function(){

    // this is my four card data with getElementById
    serial += 1;
    const productNameFour = document.getElementById('four-name').innerText;
    const productPriceFour =document.getElementById('four-price').innerText;
    const productQuantityFour = document.getElementById('four-quantity').innerText;

    // Sumation four card data
    const equalTotal = parseInt(productPriceFour) % parseInt(productQuantityFour);

    // Show the four card function dada called in this
    displayAllData(productNameFour, productPriceFour, productQuantityFour, equalTotal);
    disAbleld('four-card');
});


// This is my five card
document.getElementById('five-card').addEventListener('click', function(){

    // this is my five card data with getElementById
    serial += 1;
    const productNameFive = document.getElementById('five-name').innerText;
    const productPriceFive = document.getElementById('five-price').innerText;
    const productQuantityFive = document.getElementById('five-quantity').innerText;

    // Sumation five card data
    const fiveMaltiple = parseInt(productPriceFive) * parseInt(productQuantityFive);

    // Show the five card function dada called in this
    displayAllData(productNameFive, productPriceFive, productQuantityFive, fiveMaltiple);
    disAbleld('five-card');
});


// This is six card
document.getElementById('six-card').addEventListener('click', function(){

    // this is my six card data with getElementById
    serial += 1;
    const productNameSix = document.getElementById('six-name').innerText;
    const productPriceSix = document.getElementById('six-price').value;
    const productQuantitySix = document.getElementById('six-quantity').value;

    // Sumation six card data
    if(productPriceSix == '' || productQuantitySix == '' || productPriceSix <= 0  || productQuantitySix <= 0){
        return alert('Please fill in the blank input number');
    }
    const dividadTotal = parseInt(productPriceSix) / parseInt(productQuantitySix);
  

    // Show the six card function dada called in this
    displayAllData(productNameSix, productPriceSix, productQuantitySix, dividadTotal);
    disAbleld('six-card');
});


   // Show this is data with first cart dada
function displayAllData(productName, productPrice, productQuantity, priceTotal){
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    tableContainer.appendChild(tr);
}


function disAbleld(id){
    document.getElementById(id).setAttribute('disabled', true);
}
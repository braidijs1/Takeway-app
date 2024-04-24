//array methods

const burger = document.getElementById("burgerButton");
const fries = document.getElementById("friesButton");
const pepsi = document.getElementById("pepsiButton");
const mySubmit = document.getElementById("mySubmit");
const cart = document.getElementById("cart");
const total = document.getElementById("total");
const  takeawayDB = [];




let count = 0 ;
const burgerCounter = {};
const counter = {};
 


burger.onclick= function(){
    cart.value += ` burger `;
    count = count + 3.99;
    
    total.textContent = `£${count.toFixed(2)}`;

    const counter = {};
 
    takeawayDB.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});
cart.value = JSON.stringify(counter);
console.log(counter)

    takeawayDB.push(`burger`);
    console.log(takeawayDB);
   

}

fries.onclick= function(){
    cart.value += ' fries ';
    count = count + 1.99;
    total.textContent = `£${count.toFixed(2)}`;
    takeawayDB.push(`fries`);
    const counter = {};
 
    takeawayDB.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});
cart.value = JSON.stringify(counter);
    console.log(takeawayDB);

}
pepsi.onclick= function(){
  
    count = count + 0.99;
    total.textContent = `£${count.toFixed(2)}`;
    takeawayDB.push(`pepsi`);
    const counter = {};
 
    takeawayDB.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
});
cart.value = JSON.stringify(counter);
    console.log(takeawayDB);

}



mySubmit.onclick  = function(){

    const jsonContent = JSON.stringify(takeawayDB);
 



    localStorage.setItem("jsonContent", jsonContent);
        const link = document.createElement("a");
        const content = jsonContent;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "sample.txt";
        link.click();
        URL.revokeObjectURL(link.href);
   



        cart.value = "";
        total.value = "";
        alert("Your order has been placed!");


}

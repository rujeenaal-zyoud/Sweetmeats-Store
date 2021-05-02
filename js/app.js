let Sweets=[];

function sweet(Name,source){
this.Name=Name;
this.source=source;
Sweets.push(this);

}

// render function for all product cakes page
let displayCakeProduct=document.getElementById('element');
sweet.prototype.render=function(){
    let box=document.createElement('div');
    displayCakeProduct.appendChild(box);
    let image =document.createElement('img');
    box.appendChild(image);
    let myP = document.createElement('p');
    box.appendChild(myP);
    let button =document.createElement('a');
    box.appendChild(button);
    // create id or class in js using add
    button.classList.add('buttoncart');
    //add  event lissiner in box for add to cart each product
    



}
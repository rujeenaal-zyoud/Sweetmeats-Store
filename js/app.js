let sweets = [];
//create array for add all product to cart in same page 
added=[];
function Sweet(Name, price,source) {
    this.Name = Name;
    this.price=price;
    this.source = source;
    sweets.push(this);
    this.render();
}
//function add to local storge
function addTolocalStorage(){
    let stringData = JSON.stringify(added);
    localStorage.setItem('cart', stringData);
    console.log(stringData);

}

//function get item 
function getData() {
  let stringOb=localStorage.getItem('cart');
  let normalOb=JSON.parse(stringOb);
  if (normalOb) {
    added=normalOb;
    // for (let i = 0; i < normalOb.length; i++) {
      console.log('inside get data',normalOb);
      // new Item(normalOb[i].name,normalOb[i].year,normalOb[i].catagory,normalOb[i].type,normalOb[i].sourse);
      
    // }
  }
}

// render function for all product cakes page

let displayCakeProduct = document.getElementById('element');
let buttonAddToCart = document.getElementById('buttonAdd');


Sweet.prototype.render = function () {
    if (displayCakeProduct !== null) {
        let box = document.createElement('div');
        displayCakeProduct.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        box.classList.add('myP');
        let myPrice = document.createElement('p');
        box.appendChild(myPrice);
        box.classList.add('myPrice');
        // let addToCart = document.createElement('p');
        // box.appendChild(addToCart);
        // box.classList.add('addToCart');
        box.appendChild(buttonAddToCart);
        let addToCart = document.createElement("button");
        box.appendChild(addToCart);
        // create id or class in js using add
        box.classList.add('addToCart');
        addToCart.textContent="addToCart";

        //add  event lissiner in box for add to cart each product

         addToCart.addEventListener('click', submitter);

          let object = this;

        function submitter(){ 
             if(added.includes(object)== false){
                added.push(object);
                console.log(added);}
                addTolocalStorage();

            }
           
         


        myP.innerHTML = (`${this.Name}   ,  ${ this.price}`);
        image.src = this.source;
    }


}

// create elements box for cake page
let item1 = new Sweet("Fruit Taret",'10JD',"https://images.pexels.com/photos/3913295/pexels-photo-3913295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=250");
let item2 = new Sweet("Scholoate Cake",'10JD',"https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250");
let item3 = new Sweet("Pure Cake",'10JD',"https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250");
let item4 = new Sweet("Strawberry Cupcakes ",'10JD',"https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item5 = new Sweet("Baked dessert",'10JD',"https://images.pexels.com/photos/3301907/pexels-photo-3301907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item6 = new Sweet("Carrot Cake",'10JD',"https://images.pexels.com/photos/2612373/pexels-photo-2612373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item7 = new Sweet("Cremy Fruit",'10JD',"https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item8 = new Sweet("Scholoate Cremy ",'10JD',"https://images.pexels.com/photos/3840200/pexels-photo-3840200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item9 = new Sweet("Coconut nut-alls",'10JD',"https://images.pexels.com/photos/3026811/pexels-photo-3026811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item10 = new Sweet("Strawberry Tart",'10JD',"https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item11 = new Sweet("Caco puff",'10JD',"https://images.pexels.com/photos/4664308/pexels-photo-4664308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item12 = new Sweet("Macoron",'10JD',"https://images.pexels.com/photos/4508963/pexels-photo-4508963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item13 = new Sweet("Almond cookie",'10JD',"https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item15 = new Sweet("Pastries ceramic",'10JD',"https://images.pexels.com/photos/3116848/pexels-photo-3116848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item16= new Sweet("Brown cake-ceramic",'10JD',"https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item17 = new Sweet("Brownies-nuts",'10JD',"https://images.pexels.com/photos/2291610/pexels-photo-2291610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item18 = new Sweet("slice-cake",'10JD',"https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
let item19 = new Sweet("White cake",'10JD',"https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item20 = new Sweet("Cupcake-tray",'10JD',"https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item21 = new Sweet("Raspberry-tartlets",'10JD',"https://images.pexels.com/photos/5951564/pexels-photo-5951564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item22 = new Sweet("Dessert-pistachio",'10JD',"https://images.pexels.com/photos/4500379/pexels-photo-4500379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item23 = new Sweet("Doughnuts-served",'10JD',"https://images.pexels.com/photos/1070978/pexels-photo-1070978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item24 = new Sweet("Cake lemon",'10JD',"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item25 = new Sweet("Chocolate-cake",'10JD',"https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item26 = new Sweet("Cake-rosemary",'10JD',"https://images.pexels.com/photos/6479548/pexels-photo-6479548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item27 = new Sweet("Orange-Tart",'10JD',"https://images.pexels.com/photos/2035729/pexels-photo-2035729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item28 = new Sweet("Cake-raspberrie",'10JD',"https://images.pexels.com/photos/4639334/pexels-photo-4639334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
let item29 = new Sweet("Cakes-Macron",'10JD',"https://images.pexels.com/photos/4722022/pexels-photo-4722022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");



getData();
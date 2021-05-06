let sweets = [];

function Sweet(Name, source) {
    this.Name = Name;
    this.source = source;
    sweets.push(this);
    this.render();
}

// render function for all product cakes page

let displayCakeProduct = document.getElementById('element');
Sweet.prototype.render = function () {
    if (displayCakeProduct !== null) {
        let box = document.createElement('div');
        displayCakeProduct.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        box.classList.add('myP');

        let button = document.createElement('a');
        box.appendChild(button);
        // create id or class in js using add
        button.classList.add('buttoncart');
        //add  event lissiner in box for add to cart each product

        // button.addEventListener('click', submitter);
        // function submitter(){
        // button.textContent=""
        // }

        myP.innerHTML = (`${this.Name}`);
        image.src = this.source;
    }

}

// create elements box for cake page
let item1 = new Sweet("Fruit Taret","https://images.pexels.com/photos/3913295/pexels-photo-3913295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=250");
let item2 = new Sweet("Scholoate Cake","https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250");
let item3 = new Sweet("Pure Cake","https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250");
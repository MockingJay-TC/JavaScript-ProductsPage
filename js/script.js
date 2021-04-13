// The document.createElement() method create html elements specified by tagName.
let scaffold = document.getElementById("root");
let navbar = document.createElement("div");
let container = document.createElement("div");
let cart = document.createElement("div");
let detail = document.createElement("div");


function clickMe() {
    console.log("clicked");
}


// The ClassName property gets and sets the value of the class attribute of the specified element
navbar.className = "navbar";
container.className = "container";
cart.className = "cart";
detail.className = "detail";

// creating navbar
let heading = document.createElement("h2");
heading.innerHTML = `
<a href="index.html">MockingJayTC</a>
`


let navigation = document.createElement("ul");
navigation.innerHTML = `<li><a href="index.html">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        `;

// creating the container and adding card

detail.innerHTML = `
                        <div class="leftSide"><h3> Home<span>/Product Details </span> <h3></div>
                        <div class="middle">  <h1> Product Details </h1> </div>
                        <p class="upside">  scroll down</p>
                        <p class="downside">scroll down</p>
                        <div class="rightSide"> <h3>The Electronic Hub</h3>
                    `

navbar.append(heading, navigation, cart);
scaffold.append(navbar, container);
container.append(detail);

items.map(myItem => {
    container.append(myItem.renderProduct());
})
addEventListener();
addAddToCartEvent();
removeFromCartEvent();
const cartObject = new Cart();


function addEventListener() {
    items.map(myItem => {
        myItem.getRemoveButton().addEventListener('click', () => {
            items = items.filter((item) => {
                return item.id !== myItem.id;
            })
            ItemMe.reRender();
        });
    })
}

function removeFromCartEvent() {
    for (const item of items) {
        item.getCartRemoveButton().addEventListener('click', () => {
            cartObject.removeFromCart(item);
            ItemMe.reRender();
            cartObject.renderCart();
            addColors();
        })
    }

}

function addAddToCartEvent() {
    for (const item of items) {
        item.getAddButton().addEventListener('click', () => {
            console.log(item);
            cartObject.addToCart(item);
            updateStock(item);
            cartObject.renderCart();
            addColors();
        })
    }
}

function updateStock(product) {
    product.stock = product.stock - 1;
    ItemMe.reRender();
    addColors();
}
//Victor.Aremu
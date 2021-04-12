// The document.createElement() method create html elements specified by tagName.
let scaffold = document.getElementById("root");
let navbar = document.createElement("div");
let container = document.createElement("div");
let cart = document.createElement("div");

function clickMe(){
    console.log("clicked");}


// The ClassName property gets and sets the value of the class attribute of the specified element
navbar.className = "navbar";
container.className = "container";
cart.className = "cart";

// creating navbar
let heading = document.createElement("h2");
heading.innerText = "MockingJayTC";
let navigation = document.createElement("ul");
navigation.innerHTML = `<li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contacts</li>
                        `;
cart.innerHTML = `  
                    <button class="click">
                    <i class="fas fa-shopping-cart"></i>
                    <put>(<pin>3</pin>)</put>
                    </button>
                    `;

navbar.append(heading, navigation, cart);
scaffold.append(navbar, container);

items.map(myItem => {
    container.append(myItem.renderProduct());
})
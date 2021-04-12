// The document.createElement() method create html elements specified by tagName.
let scaffold = document.getElementById("root");
let navbar = document.createElement("div");
let container = document.createElement("div");
let card = document.createElement('div');
let title = document.createElement("h2");
let price = document.createElement("h4");
let stock = document.createElement("h4");
let description = document.createElement("p");
let imageUrl = document.createElement("img");
let btnElement = document.createElement("a");
let cart = document.createElement("div");

// The ClassName property gets and sets the value of the class attribute of the specified element
navbar.className = "navbar";
container.className = "container";
title.className = "title";
price.className = "price";
stock.className = "stock";
description.className = "description";
imageUrl.className = "imageurl";
btnElement.className = "button";
cart.className = "cart";
card.className = 'card';

// creating navbar
let heading = document.createElement("h2");
heading.innerText = "MockingJayTC";
let navigation = document.createElement("ul");
navigation.innerHTML = `<li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        `;
cart.innerHTML = `  
                    <button class="click">
                    <i class="fas fa-shopping-cart"></i>
                    <put>(<pin>3</pin>)</put>
                    </button>
                    `;

// Container
title.innerText = "Gaming Headset";
description.innerText = "Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles1. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, USB Type-C® charging, and an array of easy-access controls."

card.append(title, price, stock, description, imageUrl, btnElement);

container.append(card);

navbar.append(heading, navigation, cart);
scaffold.append(navbar, container);
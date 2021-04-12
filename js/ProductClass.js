class Product {
    constructor(title, price, stock, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;

    }
    renderProduct(){
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div class = "theLeft">  
        <h2 class="title">${this.title}</h2>
        <p>${this.description}</p>
        </div>

        <div class = "theMiddle">  
        <img class= "imageurl" src="${this.imageUrl}"></img>
        <h5 class="price">${this.price}</h5>
        </div>

        <div class = "theRight"> 
        <div class="color">
            <ul>
                <li>Color:</li>
                <li class="black"></li>
                <li class="white"></li>
                <li class="blue"></li>
                <li class="brown"></li>
            </ul>
        </div>
        <p>${this.stock}</p>
        <button id="add">Add to Cart</button>
        <button id="do">Remove Item</button>
        </div>
        
        
        
        

        <div class="closeIt"><i class="fas fa-trash"></i></div>
        `
        return card;
    }
}
const item1 = new Product("Gaming Controller","Gh¢500","50","Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles1. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, USB Type-C® charging, and an array of easy-access controls.",
    "img/controller.png");
const item2 = new Product("Gaming Camera","Gh¢300","20","Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles1. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, USB Type-C® charging, and an array of easy-access controls.",
    "img/camera.jpeg");
const item3 = new Product("Gaming Headset","Gh¢1200","5","Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles1. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, USB Type-C® charging, and an array of easy-access controls.",
    "img/headset.png");
const item4 = new Product("PS5","Gh¢6000","10","Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles1. The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, USB Type-C® charging, and an array of easy-access controls.",
    "img/ps5.png");

const items = [item1,item2,item3,item4];





let productsContainer = document.querySelector(".products-container");
let categoryLinks = document.querySelectorAll(".dropdown-item");
let index = 0;
let intervalId;

let products = [
    { 
        img: "imgs/f1.jpg",
        category: "flower",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/f2.jpg",
        category: "flower",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/f3.jpg", 
        category: "flower",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/f4.jpg", 
        category: "flower",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/f5.jpg", 
        category: "flower",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/f6.jpg", 
        category: "other",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/f8.jpg", 
        category: "other",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/n4.jpg", 
        category: "other",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
    img: "imgs/f7.jpg", 
    category: "pants",
    price: "$74",
    name:"Cartoon Astronaut T-shirt"
    },
    { 
    img: "imgs/n6.jpg", 
    category: "pants",
    price: "$74",
    name:"Cartoon Astronaut T-shirt"
    },
    { 
    img: "imgs/n1.jpg", 
    category: "formal",
    price: "$74",
    name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/n2.jpg", 
        category: "formal",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/n3.jpg", 
        category: "formal",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/n5.jpg", 
        category: "formal",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/n7.jpg", 
        category: "formal",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
    { 
        img: "imgs/n8.jpg", 
        category: "formal",
        price: "$74",
        name:"Cartoon Astronaut T-shirt"
    },
];


    function displayNextProduct() {
        if (index < products.length) {
            let product = products[index];
            let productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
            index++;
        } else {
            clearInterval(intervalId);
        }
    };

let counter = 0; 
let bag = document.querySelector('.bag');
let number = document.createElement('small');
bag.appendChild(number);
number.innerText = counter; 

let cartItems = []; 
let bagContent = document.createElement('div');
bagContent.classList.add('overlay', 'd-none');
bag.appendChild(bagContent);

function updateCartDisplay() {
    bagContent.innerHTML = ""; 

    if (cartItems.length === 0) {
        bagContent.innerHTML = "<p>Your cart is empty.</p>";
    } let totalPrice = 0;

    cartItems.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('bag-elements-div')
        let itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity; 
        totalPrice += itemTotal;

        itemElement.innerHTML = `
            <img src="${item.img}" width="50">
            <div class = "name-price ">
                T-shirt
                <div>
                    ${item.price} 
                    <b>(${item.quantity})</b> = <b>$${itemTotal.toFixed(2)}</b>
                </div>
                
            </div>
        `;
        bagContent.appendChild(itemElement);
    });

    let totalElement = document.createElement('div');
    totalElement.classList.add('total-price')
    totalElement.innerHTML = `<h3 >Total Price: $${totalPrice.toFixed(2)}</h3>`;
    bagContent.appendChild(totalElement);

}

bag.addEventListener('click', () => {
    updateCartDisplay();
    bagContent.classList.toggle('d-none');
});

document.querySelectorAll('.cart').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let productCard = e.target.closest('.card-body');
        let productName = productCard.querySelector('.card-text').textContent;
        let productPrice = productCard.querySelector('h4').textContent;
        let productImg = productCard.closest('.card').querySelector('img').src;

        let existingProduct = cartItems.find(item => item.name === productName && item.price === productPrice);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1
            });
        }
        number.innerText = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        updateCartDisplay();
    });
});

function createProductCard(product) {
    let productCard = document.createElement("div");
    productCard.classList.add("card-home");
    productCard.setAttribute("data-category", product.category);
    productCard.innerHTML = `
        <img src="${product.img}" alt="Product Image" class="card-img-top">
        <div class="card-body">
            <span class="card-title">${product.category}</span>
            <h5 class="card-text">${product.name}</h5>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4>${product.price}</h4>
            <a href="#"><i class="fa-solid fa-cart-plus cart"></i></a>
        </div>
    `;
    productCard.addEventListener('click', () => {
        let productData = {
            img: product.img,
            name: product.name,
            price: product.price
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
    
        window.location.href = 'about.html';
    });
    

    let cardImg = productCard.querySelector('.card-img-top');

    if (cardImg) {
        cardImg.addEventListener('click', () => {
            let productData = {
                img: product.img,
                name: product.name,
                price: product.price
            };
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            window.location.href = 'about.html';
        });
    } else {
        console.log('not found');
    }


    let addToCart = productCard.querySelector('.cart');
    if (addToCart) {
        addToCart.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            counter++
            number.innerText = counter
            let productName = productCard.querySelector('.card-text').textContent;
        let productPrice = productCard.querySelector('h4').textContent;
        let productImg = productCard.querySelector('img').src;
        
        let existingProduct = cartItems.find(item => item.img === productImg);
        
        if (existingProduct) {
            existingProduct.quantity++; 
        } else {
            cartItems.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1
            });
        }
        

        let totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        number.innerText = totalItems; 
        
        updateCartDisplay();
    });
            
    }

    return productCard;
}

    intervalId = setInterval(displayNextProduct, 400);
    categoryLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let selectedCategory = event.target.textContent.toLowerCase().replace(" shirt", "").trim();
    
            productsContainer.innerHTML = "";
    
            let filteredProducts = products.filter(product => product.category === selectedCategory);
            filteredProducts.forEach(product => {
                let productCard = createProductCard(product);
                productsContainer.appendChild(productCard);
            });
        });
    });

    let showProducts = document.querySelector('.all-products');

    showProducts.addEventListener('click', (e) => {
        e.preventDefault();
        productsContainer.innerHTML = ''; 

        
        if (intervalId) {
            clearInterval(intervalId);
        }
        index=0
        intervalId = setInterval(displayNextProduct, 400);
    });





const products = {
    // Coffee
    caramel: {
        name: "Caramel Macchiato",
        price: 99,
        image: "images/cmachiato.png",
        description: "A sweet and creamy favorite made with rich espresso, steamed milk, and smooth caramel syrup."
    },
    vanilla: {
        name: "Vanilla Latte",
        price: 99,
        image: "images/vanillaLatte.png",
        description: "A creamy coffee drink with vanilla flavor."
    },
    mocha: {
        name: "Mocha Latte",
        price: 99,
        image: "images/mochaLatte.png",
        description: "A rich coffee drink with chocolate and milk."
    },
    spanish: {
        name: "Spanish Latte",
        price: 99,
        image: "images/spanishLatte.png",
        description: "A smooth and sweet espresso-based latte."
    },
    americano: {
        name: "Americano",
        price: 89,
        image: "images/americano.png",
        description: "A classic coffee made with espresso and water."
    },
    strawberrycoffee: {
        name: "Strawberry Coffee",
        price: 99,
        image: "images/strawCoffee.png",
        description: "A unique coffee drink with sweet strawberry flavor."
    },
    caramellatte: {
        name: "Caramel Latte",
        price: 99,
        image: "images/caramelLatte.png",
        description: "A smooth espresso latte mixed with rich caramel flavor."
    },
    saltedcaramel: {
        name: "Salted Caramel",
        price: 99,
        image: "images/saltedCaramel.png",
        description: "A delicious coffee drink with a combination of sweet caramel and a hint of salt."
    },
    whitemocha: {
        name: "White Mocha Latte",
        price: 99,
        image: "images/whiteMocha.png",
        description: "A creamy espresso drink blended with sweet white chocolate."
    },
    biscoff: {
        name: "Biscoff Latte",
        price: 119,
        image: "images/biscoffLatte.png",
        description: "A creamy latte with the sweet and spiced flavor of Biscoff."
    },
    oreolatte: {
        name: "Oreo Latte",
        price: 119,
        image: "images/oreoLatte.png",
        description: "A delicious coffee latte with the classic taste of Oreo cookies."
    },
    peanutlatte: {
        name: "Peanut Latte",
        price: 109,
        image: "images/peanutLatte.png",
        description: "A creamy latte with a rich peanut flavor."
    },
    pistachiolatte: {
        name: "Pistachio Latte",
        price: 119,
        image: "images/pistachioLatte.png",
        description: "A smooth latte with a rich and nutty pistachio flavor."
    },

    // MILK DRINKS
    strawberrymilk: {
        name: "Strawberry Milk",
        price: 89,
        image: "images/strawberryMilk.png",
        description: "A refreshing milk drink with sweet strawberry flavor."
    },
    blueberrymilk: {
        name: "Blueberry Milk",
        price: 89,
        image: "images/blueberryMilk.png",
        description: "A creamy milk drink with sweet blueberry flavor."
    },
    chocolatemilk: {
        name: "Chocolate Milk",
        price: 89,
        image: "images/chocolateMilk.png",
        description: "A delicious and creamy milk drink with chocolate."
    },
    mangomilk: {
        name: "Mango Milk",
        price: 89,
        image: "images/mangoMilk.png",
        description: "A refreshing milk drink with sweet mango flavor."
    },
    whitechocolatemilk: {
        name: "White Chocolate Milk",
        price: 89,
        image: "images/whiteChocolateMilk.png",
        description: "A creamy milk drink blended with sweet white chocolate."
    },
    oreomilk: {
        name: "Oreo Milk",
        price: 99,
        image: "images/oreoMilk.png",
        description: "A sweet and creamy milk drink with Oreo cookies."
    },
    biscoffmilk: {
        name: "Biscoff Milk",
        price: 99,
        image: "images/biscoffMilk.png",
        description: "A creamy milk drink with the sweet taste of Biscoff."
    },
    pistachiomilk: {
        name: "Pistachio Milk",
        price: 99,
        image: "images/pistachioMilk.png",
        description: "A smooth milk drink with a nutty pistachio flavor."
    },

    // SPARKLES
    strawberrysparkle: {
        name: "Strawberry Sparkle",
        price: 49,
        image: "images/strawberrySparkle.png",
        description: "A refreshing sparkling drink with sweet strawberry flavor."
    },
    lemonsparkle: {
        name: "Lemon Sparkle",
        price: 49,
        image: "images/lemonSparkle.png",
        description: "A fizzy and refreshing drink with a zesty lemon flavor."
    },
    greenapple: {
        name: "Green Apple Sparkle",
        price: 49,
        image: "images/greenAppleSparkle.png",
        description: "A refreshing sparkling drink with sweet and tangy green apple flavor."
    },
    blueberrysparkle: {
        name: "Blueberry Sparkle",
        price: 49,
        image: "images/blueberrySparkle.png",
        description: "A fizzy drink with sweet blueberry flavor."
    },
    mangosparkle: {
        name: "Mango Sparkle",
        price: 49,
        image: "images/mangoSparkle.png",
        description: "A refreshing sparkling drink with tropical mango flavor."
    },
    lycheesparkle: {
        name: "Lychee Sparkle",
        price: 49,
        image: "images/lycheeSparkle.png",
        description: "A fizzy and refreshing drink with sweet lychee flavor."
    },
    cokefloat: {
        name: "Coke Float",
        price: 49,
        image: "images/cokeFloat.png",
        description: "A classic refreshing Coke drink topped with creamy ice cream."
    },

    // MATCHA SERIES
    matcha: {
        name: "Matcha Latte",
        price: 120,
        image: "images/matcha1.jpg",
        description: "A creamy and refreshing matcha drink."
    },
    mango: {
        name: "Mango Matcha Latte",
        price: 130,
        image: "images/matcha1.jpg",
        description: "Matcha latte with mango flavor."
    },
    purematcha: {
        name: "Pure Matcha",
        price: 120,
        image: "images/pureMatcha.png",
        description: "A pure and refreshing matcha drink with a rich earthy flavor."
    },
    peanutmatcha: {
        name: "Peanut Matcha Latte",
        price: 130,
        image: "images/peanutMatcha.png",
        description: "A creamy matcha latte combined with rich peanut flavor."
    },
    chocolatematcha: {
        name: "Chocolate Matcha Latte",
        price: 130,
        image: "images/chocolateMatcha.png",
        description: "A delicious combination of matcha and chocolate."
    },
    whitemochamatcha: {
        name: "White Chocolate Matcha Latte",
        price: 130,
        image: "images/whiteChocolateMatcha.png",
        description: "A creamy matcha latte blended with sweet white chocolate."
    },
    blueberrymatcha: {
        name: "Blueberry Matcha Latte",
        price: 130,
        image: "images/blueberryMatcha.png",
        description: "A refreshing matcha latte with sweet blueberry flavor."
    },
    strawberrymatcha: {
        name: "Strawberry Matcha",
        price: 140,
        image: "images/strawberryMatcha.png",
        description: "A refreshing matcha drink with sweet strawberry flavor."
    },
    dirtymatcha: {
        name: "Dirty Matcha",
        price: 140,
        image: "images/dirtyMatcha.png",
        description: "A delicious combination of rich espresso and creamy matcha."
    },
    seasaltmatcha: {
        name: "Sea Salt Matcha",
        price: 140,
        image: "images/seaSaltMatcha.png",
        description: "A creamy matcha drink with a hint of sea salt."
    },
    oreomatcha: {
        name: "Oreo Matcha Latte",
        price: 140,
        image: "images/oreoMatcha.png",
        description: "A creamy matcha latte mixed with Oreo cookies."
    },
    biscoffmatcha: {
        name: "Biscoff Matcha Latte",
        price: 150,
        image: "images/biscoffMatcha.png",
        description: "A smooth matcha latte with sweet Biscoff flavor."
    },
    pistachiomatcha: {
        name: "Pistachio Matcha Latte",
        price: 150,
        image: "images/pistachioMatcha.png",
        description: "A creamy matcha latte with rich pistachio flavor."
    }
};


// GET PRODUCT FROM URL

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product") || "caramel";
const selectedProduct = products[productId];

if (selectedProduct) {
    document.getElementById("productName").textContent = selectedProduct.name;
    document.getElementById("productPrice").textContent = "₱" + selectedProduct.price;
    document.getElementById("productImage").src = selectedProduct.image;
    document.getElementById("productDescription").textContent = selectedProduct.description;
}


// QUANTITY

let quantity = 1;

const quantityText = document.getElementById("quantity");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", function () {
    quantity++;
    quantityText.textContent = quantity;
});

minus.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityText.textContent = quantity;
    }
});


// ADD PRODUCT TO CART

function saveProduct() {

    let cart = JSON.parse(localStorage.getItem("cafeCart")) || [];

    let size = document.getElementById("size").value;

    let existingProduct = cart.find(function (item) {
        return item.name === selectedProduct.name && item.size === size;
    });

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            size: size,
            quantity: quantity
        });
    }

    localStorage.setItem("cafeCart", JSON.stringify(cart));

    updateCartCount();
}


// NOTIFICATION

function showNotification() {

    let notification = document.getElementById("cartNotification");

    notification.classList.add("show");

    setTimeout(function () {
        notification.classList.remove("show");
    }, 2500);
}


// ADD TO CART BUTTON

document.getElementById("addToCart").addEventListener("click", function () {

    let confirmAdd = confirm("Do you want to add this product to your cart?");

    if (confirmAdd) {

        saveProduct();

        alert("Item successfully added to your cart!");

        window.location.href = "cart.html";
    }

});


// BUY NOW BUTTON

document.getElementById("buyNow").addEventListener("click", function () {

    let confirmBuy = confirm("Do you want to buy this item?");

    if (confirmBuy) {

        let size = document.getElementById("size").value;

        let buyNowItem = {
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            size: size,
            quantity: quantity
        };

        // SAVE ONLY THE SELECTED PRODUCT

        localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));

        alert("Proceeding to checkout!");

        window.location.href = "checkOut.html?mode=buyNow";
    }

});

function addProduct() {
    let productName = document.getElementById("productName").value;
    let quantity = document.getElementById("quantity").value;

    if (productName === "" || quantity === "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${productName} (Qty: ${quantity})
        <button onclick="deleteProduct(this)">Delete</button>
    `;

    document.getElementById("productList").appendChild(li);

    updateCounter();
    saveProducts();

    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
}

function updateCounter() {
    let total = document.querySelectorAll("#productList li").length;
    document.getElementById("totalProducts").textContent = total;
}

function deleteProduct(button) {
    button.parentElement.remove();
    updateCounter();
    saveProducts();
}

function searchProduct() {
    let input = document.getElementById("searchProduct").value.toLowerCase();

    let products = document.querySelectorAll("#productList li");

    products.forEach(product => {
        if (product.textContent.toLowerCase().includes(input)) {
            product.style.display = "flex";
        } else {
            product.style.display = "none";
        }
    });
}

function saveProducts() {
    localStorage.setItem(
        "products",
        document.getElementById("productList").innerHTML
    );
}

window.onload = function () {
    let savedProducts = localStorage.getItem("products");

    if (savedProducts) {
        document.getElementById("productList").innerHTML = savedProducts;
        updateCounter();
    }
};

updateCounter();
let theme_icon = document.getElementById("theme_icon");
if (localStorage.getItem("theme") == "light") {
    document.body.classList.remove("dark_theme");
    theme_icon.classList.remove("bi-sun-fill");
    theme_icon.classList.add("bi-moon-fill");
}
else if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark_theme");
    theme_icon.classList.remove("bi-moon-fill");
    theme_icon.classList.add("bi-sun-fill");
}
else {
    localStorage.setItem("theme", "light");
    theme_icon.classList.remove("bi-sun-fill");
    theme_icon.classList.add("bi-moon-fill");
}

const products = [
    { name: 'Comil Coconut Wine', model: 'Wine', imagePath: 'img/product_img/product_img(1).jpg' },
    { name: 'Vise Coconut Wine', model: 'Wine', imagePath: 'img/product_img/product_img(2).jpg' },
    { name: 'Cocoit B Coconut Wine', model: 'Wine', imagePath: 'img/product_img/product_img(3).jpg' },
    { name: 'Cocoit T Coconut Wine', model: 'Wine', imagePath: 'img/product_img/product_img(4).jpg' },
    { name: 'Coconut+Lemon Drink', model: 'Drink', imagePath: 'img/product_img/product_img(5).jpg' },
    { name: 'Coconut Water', model: 'Drink', imagePath: 'img/product_img/product_img(6).jpg' },
    { name: 'Coconut Water Premium ', model: 'Drink', imagePath: 'img/product_img/product_img(7).jpg' },
    { name: 'Cosmic Coconut Drink', model: 'Drink', imagePath: 'img/product_img/product_img(8).jpg' },
    { name: 'Cone Milk', model: 'Milk', imagePath: 'img/product_img/product_img(9).jpg' },
    { name: 'Ciont Milk ', model: 'Milk', imagePath: 'img/product_img/product_img(10).jpg' },
    { name: 'Choco Milk', model: 'Milk', imagePath: 'img/product_img/product_img(11).jpg' },
    { name: 'Coconut Milk', model: 'Milk', imagePath: 'img/product_img/product_img(12).jpg' },
    { name: 'Coconut+Almonds Ice-Cream', model: 'Ice-Cream', imagePath: 'img/product_img/product_img(13).jpg' },
    { name: 'Coconut+Strawberry Ice-Cream', model: 'Ice-Cream', imagePath: 'img/product_img/product_img(14).jpg' },
    { name: 'Ellce Ice-Cream', model: 'Ice-Cream', imagePath: 'img/product_img/product_img(15).jpg' },
    { name: 'Frash Mood Face-Wash', model: 'face-wash', imagePath: 'img/product_img/product_img(16).jpg' },
    { name: 'Deep Clean Wash', model: 'face-wash', imagePath: 'img/product_img/product_img(17).jpg' },
    { name: 'Natural Plus Wash', model: 'face-wash', imagePath: 'img/product_img/product_img(18).jpg' },
    { name: 'Net-Clear Face-wash', model: 'face-wash', imagePath: 'img/product_img/product_img(19).jpg' },
    { name: 'Coconut+Strawberry Yogat', model: 'Yogat', imagePath: 'img/product_img/product_img(20).jpg' },
    { name: 'Toocail Yogat', model: 'Yogat', imagePath: 'img/product_img/product_img(21).jpg' },
    { name: 'Colco Yogat', model: 'Yogat', imagePath: 'img/product_img/product_img(22).jpg' },
    { name: 'White Oli', model: 'Oil', imagePath: 'img/product_img/product_img(23).jpg' },
    { name: 'Classy Vinegar', model: 'Vinegar', imagePath: 'img/product_img/product_img(24).jpg' },
    { name: 'Sub Oli', model: 'Oil', imagePath: 'img/product_img/product_img(25).jpg' },
    { name: 'White Oli Plus', model: 'Oil', imagePath: 'img/product_img/product_img(26).jpg' },
    { name: 'White Laddu', model: 'Sweets', imagePath: 'img/product_img/product_img(27).jpg' },
    { name: 'Coconut Toffee', model: 'Sweets', imagePath: 'img/product_img/product_img(28).jpg' },
    { name: 'Coconut Candy', model: 'Sweets', imagePath: 'img/product_img/product_img(29).jpg' },
    { name: 'Brown Soap', model: 'Soap', imagePath: 'img/product_img/product_img(30).jpg' },
    { name: 'Beauty Oil Soap', model: 'Soap', imagePath: 'img/product_img/product_img(31).jpg' },
    { name: 'Green Oil', model: 'Oli', imagePath: 'img/product_img/product_img(32).jpg' },
    { name: 'White Jam', model: 'Jam', imagePath: 'img/product_img/product_img(33).jpg' },
    { name: 'Zep Jam', model: 'Jam', imagePath: 'img/product_img/product_img(34).jpg' },
    { name: 'Sugar Jam', model: 'Jam', imagePath: 'img/product_img/product_img(35).jpg' },
    { name: 'Premium Coconut Jam', model: 'Jam', imagePath: 'img/product_img/product_img(36).jpg' },
    { name: 'Germs Clean Wash', model: 'Hand-Wash', imagePath: 'img/product_img/product_img(37).jpg' },
    { name: 'Oil Clear Hand-Wash', model: 'Hand-Wash', imagePath: 'img/product_img/product_img(38).jpg' },
    { name: 'Germs Clean Plus', model: 'Hand-Wash', imagePath: 'img/product_img/product_img(39).jpg' },
    { name: 'Milky Milk Drink', model: 'Drink', imagePath: 'img/product_img/product_img(40).jpg' },
    { name: 'Cream Milk Drink', model: 'Drink', imagePath: 'img/product_img/product_img(41).jpg' },
    { name: 'Brown Milk Drink', model: 'Drink', imagePath: 'img/product_img/product_img(42).jpg' },
    { name: 'Coir 500g', model: 'Coir', imagePath: 'img/product_img/product_img(43).jpg' },
    { name: 'Coir 2kg', model: 'Coir', imagePath: 'img/product_img/product_img(44).jpg' },
    { name: 'Coir 10kg', model: 'Coir', imagePath: 'img/product_img/product_img(45).jpg' },
    { name: 'Coir 20kg', model: 'Coir', imagePath: 'img/product_img/product_img(46).jpg' },
    { name: 'Tro-Co Biscuits', model: 'Biscuits', imagePath: 'img/product_img/product_img(47).jpg' },
    { name: 'Tro-Co Cream Biscuits', model: 'Biscuits', imagePath: 'img/product_img/product_img(48).jpg' },
    { name: 'Coconut T Biscuits', model: 'Biscuits', imagePath: 'img/product_img/product_img(49).jpg' },
    { name: 'C Crunchy Biscuits', model: 'Biscuits', imagePath: 'img/product_img/product_img(50).jpg' },
];

const productsContainer = document.getElementById('productsContainer');

const searchInput = document.getElementById('search');
const searchSelect = document.getElementById('search-select');

// Function to filter and display products based on the search query
function updateProducts(typeValue, selectValue) {
    // Clear previous products
    productsContainer.innerHTML = '';

    // Filter products based on the search query
    var filteredProducts = 0;

    if (selectValue === "no") {
        filteredProducts = products.filter(product => product.name.toLowerCase().includes(typeValue.toLowerCase()));
    } else {

        filteredProducts = products.filter(product => ((product.name.toLowerCase().includes(typeValue.toLowerCase())) && (product.model.toLowerCase().includes(selectValue.toLowerCase()))));
    }

    if (filteredProducts.length === 0) {
        // If no matching products, display "Product Empty"
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'col-12 empty-image';
        productsContainer.appendChild(emptyMessage);
    } else {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'col-11 col-sm-9 col-md-5 col-lg-3 product-tag';

            productDiv.innerHTML = `
          <div class="row product-hoverdiv h-100 p-3 d-flex flex-row justify-content-around shadow-lg-edit rounded-5">
            <div class="col-12 central">
              <img src="${product.imagePath}" class="product-img" >
            </div>
            <div class="col-12 fw-bold mt-3 pb-3 central product-tittle">${product.name}</div>
            <div class="col-12 central">
              <div class="more-btn">More Details</div>
            </div>
          </div>
        `;

            productsContainer.appendChild(productDiv);
        });

    }

}

searchInput.addEventListener('input', function () {
    const selectValue = searchSelect.value.trim();
    const typeValue = this.value.trim();
    updateProducts(typeValue, selectValue);
});

function selectionChaneFuntion() {
    const typeValue = searchInput.value.trim();
    const selectValue = searchSelect.value.trim();
    updateProducts(typeValue, selectValue);
}

updateProducts('', '');

function removeFilters() {
    searchInput.value = "";
    searchSelect.value = "no";
    updateProducts('', '');
}

function theme_change() {
    document.body.classList.toggle("dark_theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        theme_icon.classList.remove("bi-moon-fill");
        theme_icon.classList.add("bi-sun-fill");
    }
    else {
        localStorage.setItem("theme", "light");
        theme_icon.classList.add("bi-moon-fill");
        theme_icon.classList.remove("bi-sun-fill");
    }
}

var header = document.getElementById("header-div");

window.addEventListener("scroll", scrollPosition, { passive: true });

function scrollPosition() {
    var scrollPosition = window.scrollY;
    var isContain = header.classList.contains("minimize");

    if (scrollPosition > 23 && !isContain) {
        header.classList.add("minimize");
    } else if (scrollPosition <= 23 && isContain) {
        header.classList.remove("minimize");
    }
}










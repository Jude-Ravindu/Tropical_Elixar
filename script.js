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

function indexPageLoad() {
    imagePotionDiv.classList.remove("anim");
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
var imagePotionDiv = document.getElementById("main-page-image-div");

window.addEventListener("scroll", scrollPosition, { passive: true });

function scrollPosition() {
    var scrollPosition = window.scrollY;
    var isContain = header.classList.contains("minimize");

    if (scrollPosition > 23 && !isContain) {
        header.classList.add("minimize");
        // imagePotionDiv.classList.add("anim");
    } else if (scrollPosition <= 23 && isContain) {
        header.classList.remove("minimize");
        // imagePotionDiv.classList.remove("anim");
    } else if (scrollPosition > 24) {

    }

    if (scrollPosition > 23 && !isContain) {
        imagePotionDiv.classList.add("anim");
    } else if (scrollPosition <= 30 && isContain) {
        imagePotionDiv.classList.remove("anim");
    } else if (scrollPosition > 24) {

    }
}


const slides_set = [
    {
        setNumber: 1,
        title: "Agriculture and Sustainability",
        description: "Our model promotes sustainable farming practices by maximizing the use of natural coconut resources, contributing to a zero-waste economy.",
        slides: [
            { slideNumber: 1, imagePath: 'img/sildes/farm1.jpg' },
            { slideNumber: 2, imagePath: 'img/sildes/farm2.jpg' },
            { slideNumber: 3, imagePath: 'img/sildes/farm3.jpg' },
            { slideNumber: 4, imagePath: 'img/sildes/farm4.jpg' },
        ]
    },
    {
        setNumber: 2,
        title: "Health and Beauty",
        description: "The model drives innovation in health and beauty products by using eco-friendly processes for producing facewash, oils, and soaps that are good for the skin and the planet.",
        slides: [
            { slideNumber: 1, imagePath: 'img/sildes/eco1.jpg' },
            { slideNumber: 2, imagePath: 'img/sildes/eco2.jpg' },
        ]
    },
    {
        setNumber: 3,
        title: "Food and Beverage",
        description: "Through innovative processing techniques, we produce coconut-based food and drink products that are not only delicious but also nutrient-rich.",
        slides: [
            { slideNumber: 1, imagePath: 'img/sildes/product1.jpg' },
            { slideNumber: 2, imagePath: 'img/sildes/product2.jpg' },
        ]
    }
];

const fragment = document.createDocumentFragment();
slides_set.forEach((set, index) => {
    const slideGroupNumber = set.setNumber;
    const slideCount = set.slides.length;

    const slideGroupDiv = document.createElement('div');
    slideGroupDiv.classList.add("slider-group");

    const paragraphDiv = document.createElement('div');
    paragraphDiv.classList.add("col-12", "col-md-4", "py-4","d-flex", "flex-column", "justify-content-center");

    const titleHeader = document.createElement('h3');
    titleHeader.innerText = set.title;
    paragraphDiv.appendChild(titleHeader);

    const descriptionSpan = document.createElement('span');
    descriptionSpan.innerText = set.description;
    descriptionSpan.classList.add("mx-5","d-flex","flex-1");
    paragraphDiv.appendChild(descriptionSpan);

    const slideImageDiv = document.createElement('div');
    slideImageDiv.classList.add("col-12", "col-md-8", "py-4", "position-relative");
    slideImageDiv.id = `slide_set_${set.setNumber}`;

    const imageContainer = document.createElement('div');
    const dotContainer = document.createElement('div');
    imageContainer.classList.add("slide-image-container");
    dotContainer.classList.add("slide-dot-container");
    set.slides.forEach((slide, index,) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add(`silde-image`, `slide_set_${set.setNumber}`);
        (index == 0) && imageDiv.classList.add("show");
        imageDiv.style.backgroundImage = `url(${slide.imagePath})`;
        imageDiv.setAttribute("data-slide", slide.slideNumber);
        imageContainer.appendChild(imageDiv);
        const dotDiv = document.createElement('div');
        dotDiv.classList.add(`slide-dot`, `slide_dot_btn_set_${set.setNumber}`);
        dotDiv.setAttribute("data-slide", slide.slideNumber);
        (index == 0) && dotDiv.classList.add("highlight");
        dotDiv.addEventListener("click", () => changeSlide(set.setNumber, slide.slideNumber));
        dotContainer.appendChild(dotDiv);
    });

    slideImageDiv.appendChild(imageContainer);
    slideImageDiv.appendChild(dotContainer);

    if (index % 2 == 0) {
        slideGroupDiv.appendChild(paragraphDiv)
        slideGroupDiv.appendChild(slideImageDiv)
    } else {
        slideGroupDiv.appendChild(slideImageDiv)
        slideGroupDiv.appendChild(paragraphDiv)
    }

    fragment.appendChild(slideGroupDiv);

    setInterval(() => {
        console.log("start setinterval : "+slideGroupNumber);
        let slideNumber = null;
        document.querySelectorAll(`.slide_set_${slideGroupNumber}`).forEach(slideElement => {
            if (slideElement.classList.contains("show")) {
                slideNumber = Number(slideElement.getAttribute("data-slide"));
            }
        });
        const nextViewSlide = (slideCount === slideNumber) ? 1 : (slideNumber + 1);
        changeSlide(slideGroupNumber, nextViewSlide);
    }, 5000);

});

document.getElementById("slidesGroupArea").appendChild(fragment);

function changeSlide(setnumber, id) {
    document.querySelectorAll(`.slide_set_${setnumber}`).forEach(slideElement => {
        if (slideElement.classList.contains("show")) {
            slideElement.classList.remove("show");
        }

        if (slideElement.getAttribute("data-slide") == id) {
            slideElement.classList.add("show");
        }
    });
    document.querySelectorAll(`.slide_dot_btn_set_${setnumber}`).forEach(slideButtonElement => {
        if (slideButtonElement.classList.contains("highlight")) {
            slideButtonElement.classList.remove("highlight");
        }

        if (slideButtonElement.getAttribute("data-slide") == id) {
            slideButtonElement.classList.add("highlight");
        }
    });
}


















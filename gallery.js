let theme_icon  = document.getElementById("theme_icon");

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

const profiles = [
    { name: 'Colombo Factory', imagePath: 'img/factory_img/factory1.jpg' },
    { name: 'Polonnaruwa Factory', imagePath: 'img/factory_img/factory2.jpg' },
    { name: 'Gampaha Factory', imagePath: 'img/factory_img/factory3.jpg' },
    { name: 'Puttalam Factory', imagePath: 'img/factory_img/factory4.jpg' },
    { name: 'Kurunegala Factory', imagePath: 'img/factory_img/factory5.jpg' },
    { name: 'Matara Factory', imagePath: 'img/factory_img/factory6.jpg' },
    { name: 'Kandy Factory', imagePath: 'img/factory_img/factory7.jpg' },
    { name: 'Jaffna Factory', imagePath: 'img/factory_img/factory8.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory9.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory10.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory11.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory12.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory13.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory14.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory15.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory16.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory17.jpg' },
    { name: 'Factory Inside', imagePath: 'img/factory_img/factory18.jpg' },
];

const profilesContainer = document.getElementById('galleryContainer'); // Replace 'profilesContainer' with the actual ID of your container

profiles.forEach(profile => {
    const profileDiv = document.createElement('div');

    profileDiv.className = 'col-11 col-sm-9 col-md-5 col-lg-5 gallery-name-tag';

    profileDiv.innerHTML = `
        <div class="row gallery-hoverdiv h-100 p-3 d-flex flex-row justify-content-around shadow-lg-edit rounded-5">
            <div class="col-12 central position-relative">
                <img src="${profile.imagePath}" class="card-img-top gallery-img gallery-img-opacity position-absolute">
                <img src="${profile.imagePath}" class="card-img-top gallery-img">
            </div>
            <div class="col-12 fw-bold mt-3 central">${profile.name}</div>         
        </div>
    `;

    profilesContainer.appendChild(profileDiv);
});

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





let boxes = document.querySelectorAll('.gallery-name-tag');

window.addEventListener('scroll', boxShowing);

boxShowing();

function boxShowing() {
    let triggerBottom = window.innerHeight / 5*4;

    boxes.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}




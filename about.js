


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
    { name: 'K.G.Thimira Sandakalum', job: 'Warehouse Manager', imagePath: 'img/profile/profile_img-(6).jpg' },
    { name: 'P.A.Ishara Deshan', job: 'Chife Financial Officer', imagePath: 'img/profile/profile_img-(3).jpg' },
    { name: 'W.K.A.Jude Ravindu', job: 'HR Manager', imagePath: 'img/profile/profile_img-(1).jpg' },
    { name: 'R.Krishanthan', job: 'Production Manager', imagePath: 'img/profile/profile_img-(5).jpg' },
    { name: 'E.M.Nimesh Shaluka', job: 'Chief Information Officer', imagePath: 'img/profile/profile_img-(8).jpg' },
    { name: 'K.M.Naveena Rodrigo', job: 'Marketing Manager', imagePath: 'img/profile/profile_img-(4).jpg' },
    { name: 'M.A.Sakuni Sandakalmi', job: 'Supply Chain Manager', imagePath: 'img/profile/profile_img-(2).jpg' },
    { name: 'M.S.Samadara Silva', job: 'R&D Manager', imagePath: 'img/profile/profile_img-(9).jpg' },
    { name: 'Yomali Madhushika', job: 'IT Director', imagePath: 'img/profile/profile_img-(10).jpg' },
];

const profilesContainer = document.getElementById('profilesContainer'); // Replace 'profilesContainer' with the actual ID of your container

profiles.forEach(profile => {
    const profileDiv = document.createElement('div');

    profileDiv.className = 'col-11 col-sm-9 col-md-5 col-lg-3 name-tag';

    profileDiv.innerHTML = `
        <div class="row hoverdiv h-100 p-3 d-flex flex-row justify-content-around shadow-lg-edit rounded-5">
            <div class="col-12 central">
                <img src="${profile.imagePath}" class="card-img-top rounded-circle profile-img">
            </div>
            <div class="col-12 fw-bold mt-3 central">${profile.name}</div>
            <div class="col-12 central">${profile.job}</div>
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







let boxes = document.querySelectorAll('.about-name-tag');

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



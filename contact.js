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

let labels = document.querySelectorAll('.sub_container div div label');

labels.forEach(label => {
    label.innerHTML = label.textContent
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx *2}ms">${letter}</span>`)
        .join('');
});

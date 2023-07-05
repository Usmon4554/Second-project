const burger =  document.querySelector(".burger"),
    burgerMenu = document.querySelector(".burger-menu"),
    menu = document.querySelector(".menu"),
    x = document.querySelector(".x");


burger.addEventListener("click", function () {
    burgerMenu.style.display = 'block';
    menu.style.transform = 'translateX(270px)';

    setTimeout(() => {
        menu.style.opacity = '1';
    }, 40);

    setTimeout(() => {
        menu.style.transform = 'scaleX(1)'
    }, 300);
});

x.addEventListener("click", function () {

    menu.style.transform = 'translateX(270px)';

    setTimeout(() => {
        burgerMenu.style.display = 'none';
    }, 300);
});

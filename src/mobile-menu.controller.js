const openMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = "grid";

    //Add eventlistener to close menu if option is selected
    const mobileMenuItems = Array.from(document.querySelectorAll(".mobile-menu li a"));
    mobileMenuItems.forEach((menuItem) => menuItem.addEventListener("click", closeMobileMenu));
};

const closeMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = "none";
};

document.getElementById("open-mobile-menu").addEventListener("click", openMobileMenu);
document.getElementById("close-mobile-menu").addEventListener("click", closeMobileMenu);

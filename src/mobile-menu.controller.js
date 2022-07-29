const openMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = 'grid';
};

const closeMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.style.display = 'none';
}

document.getElementById('open-mobile-menu').addEventListener('click', openMobileMenu);
document.getElementById('close-mobile-menu').addEventListener('click', closeMobileMenu);
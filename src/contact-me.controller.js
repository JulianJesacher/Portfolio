window.captcha_successful = () => {
    document.getElementById("sendEmailButton").removeAttribute("disabled");
};
window.captcha_expired = () => {
    document.getElementById("sendEmailButton").addAttribute("disabled", "disabled");
};

const handleDifferentContactPages = () => {
    const contactPage = document.getElementById("contact-me-page");
    if (window.innerWidth > 1000) {
        contactPage.classList.remove('mobile');
        contactPage.classList.add('desktop');
    } else {
        contactPage.classList.remove('desktop');
        contactPage.classList.add('mobile');
    }
};
window.addEventListener("resize", handleDifferentContactPages);
window.addEventListener('load', handleDifferentContactPages);
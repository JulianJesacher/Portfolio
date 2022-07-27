window.captcha_successful = () => {
    document.getElementById("sendEmailButton").removeAttribute("disabled");
};

const handleDifferentContactPages = () => {
    contactPage = document.getElementsByClassName("contact-me-page")[0];
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
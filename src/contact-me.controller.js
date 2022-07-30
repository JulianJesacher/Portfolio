window.captcha_successful = () => {
    document.getElementById("sendEmailButton").removeAttribute("disabled");
};
window.captcha_expired = () => {
    document.getElementById("sendEmailButton").addAttribute("disabled", "disabled");
};

const setCorrectForm = () => {
    const contactPage = document.getElementById("contact-me-page");
    if (window.innerWidth > 1000) {
        contactPage.classList.remove("mobile");
        contactPage.classList.add("desktop");
    } else {
        contactPage.classList.remove("desktop");
        contactPage.classList.add("mobile");
    }
};

window.addEventListener('resize', setCorrectForm);

const stopPropagation = (event) => {
    event.stopPropagation();
};

const addPathEventListeners = () => {
    const contactFormPaths = Array.from(document.querySelectorAll(".contact-me-wrapper svg g"));
    contactFormPaths.forEach((path) => path.addEventListener("click", stopPropagation));
};

const removePathEventListeners = () => {
    const contactFormPaths = Array.from(document.querySelectorAll(".contact-me-wrapper svg g"));
    contactFormPaths.forEach((path) => path.removeEventListener("click", stopPropagation));
};

const openForm = () => {
    const contactPage = document.getElementById("contact-me-page");
    contactPage.style.display = "grid";
    document.body.style.overflow = "hidden";
    addPathEventListeners();

    //Timeout to not trigger event when contact-me button is clicked
    setTimeout(() => {
        const closingListenerFunction = (event) => {
            closeForm();
            document.removeEventListener("click", closingListenerFunction);
            removePathEventListeners()
        };

        document.addEventListener("click", closingListenerFunction);
    }, 0);
};

const closeForm = () => {
    const contactPage = document.getElementById("contact-me-page");
    contactPage.style.display = "none";
    document.body.style.overflow = "visible";
};

const contactButtons = Array.from(document.getElementsByClassName("contact-btn"));
contactButtons.forEach((button) => {
    button.addEventListener("click", openForm);
});

// Handles all the logic concerning the contact-me form including, but not limited to, opening and closing.

// Callback functions for google recaptcha
window.captchaSuccessful = () => {
    document.getElementById("sendEmailButton").removeAttribute("disabled");
};
window.captchaExpired = () => {
    document.getElementById("sendEmailButton").addAttribute("disabled");
};

/**
 * Set correct contact-me form according to the current screensize (mobile or desktop).
 */
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

/**
 * Stops event from propagating. Function required to remove event listener when contact-me form is closed.
 * @param event The event which should be prevented from propagating.
 */
const stopPropagation = (event) => {
    event.stopPropagation();
};

/**
 * Adds event listeners to stop click event from propagating when the contact-me form itself is clicked.
 */
const addClosingEventListeners = () => {
    const contactFormPaths = Array.from(document.querySelectorAll(".contact-me-wrapper svg g"));
    contactFormPaths.forEach((path) => path.addEventListener("click", stopPropagation));
    const contactFormContent = document.querySelector(".contact-me-content");
    contactFormContent.addEventListener("click", stopPropagation);
};

/**
 * Removes event listeners from contact-me form which were added by addPathEventListeners().
 */
const removeClosingEventListeners = () => {
    const contactFormPaths = Array.from(document.querySelectorAll(".contact-me-wrapper svg g"));
    contactFormPaths.forEach((path) => path.removeEventListener("click", stopPropagation));
    const contactFormContent = document.querySelector(".contact-me-content");
    contactFormContent.removeEventListener("click", stopPropagation);
};

/**
 * Opens contact-me form, disables document scrolling, and sets event listeners to close on outbound clicks.
 */
const openForm = () => {
    const contactPage = document.getElementById("contact-me-page");
    contactPage.style.display = "grid";
    document.body.style.overflow = "hidden";
    addClosingEventListeners();
    setCorrectForm();

    //Timeout to not trigger event when contact-me button is clicked
    setTimeout(() => {
        const closingListenerFunction = (event) => {
            closeForm();
            document.removeEventListener("click", closingListenerFunction);
            removeClosingEventListeners();
        };

        document.addEventListener("click", closingListenerFunction);
    }, 0);
};

/**
 * Closes contact-me form and enables document scrolling.
 */
const closeForm = () => {
    const contactPage = document.getElementById("contact-me-page");
    contactPage.style.display = "none";
    document.body.style.overflow = "visible";
};

/**
 * Adds event listeners on contact-me buttons to open contact-me form.
 */
const contactButtons = Array.from(document.getElementsByClassName("contact-btn"));
contactButtons.forEach((button) => {
    button.addEventListener("click", openForm);
});

window.addEventListener("resize", setCorrectForm);

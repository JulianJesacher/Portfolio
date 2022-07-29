//Add listener to darkmode slider
document.getElementById("darkmode-checkbox").addEventListener("click", (event) => {
    console.log("now")
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmodeActive", event.target.checked);
});

/*
Load darkmode preferences from system/storage and
set darkmode accordingly
*/
window.addEventListener("load", function (event) {
    const localStorageSetting = localStorage.getItem("darkmodeActive");
    const checkBox = document.getElementById("darkmode-checkbox");

    if (!localStorageSetting && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        document.body.classList.add("darkmode");
        checkBox.checked = true;
    }

    if (localStorageSetting === "true") {
        document.body.classList.add("darkmode");
        checkBox.checked = true;
    }
});

/*
After lottiefiles have been replaced, add css class to their paths
to allow to change color dynamically
*/
setTimeout(() => {
    Array.from(document.getElementsByClassName("social-icon")).forEach((socialIcon) => {
        paths = socialIcon.shadowRoot.querySelectorAll("svg path");
        paths.forEach((path) => {
            path.classList.add("social-icon");
            path.removeAttribute("fill");
        });
    });

    Array.from(document.getElementsByClassName("project-social-icon")).forEach((socialIcon) => {
        paths = socialIcon.shadowRoot.querySelectorAll("svg path");
        paths.forEach((path) => {
            path.classList.add("project-social-icon");
            path.removeAttribute("fill");
        });
    });
}, 100);

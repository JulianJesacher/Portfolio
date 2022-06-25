//Darkmode
document.getElementById("darkmode-checkbox").addEventListener("click", (event) => {
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmodeActive", event.target.checked);
});

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

setTimeout(() => {
    Array.from(document.getElementsByClassName("social-icon")).forEach((socialIcon) => {
        paths = socialIcon.shadowRoot.querySelectorAll("svg path");
        paths.forEach((path) => {
            path.classList.add("social-icon");
            path.removeAttribute("fill");
        });
    });
}, 100);

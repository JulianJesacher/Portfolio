//Darkmode
document.getElementById("darkmode-checkbox").addEventListener("click", (event) => {
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmodeActive", event.target.checked);
});

function setDarkModePreference() {
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

    //add transition to darkmode
    Array.from(document.getElementsByClassName("darkmode-slider")).forEach((element) => element.classList.add("transition"));
}
window.onload = setDarkModePreference;

setTimeout(() => {
    document.body.classList.add("transition");
    Array.from(document.getElementsByClassName("social-icon")).forEach((element) => element.shadowRoot.querySelector('g').classList.add("social-icon"));
}, 1000);

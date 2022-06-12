//Darkmode

document.getElementById("darkmode-checkbox").addEventListener("click", (event) => {
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmodeActive", event.target.checked);
    console.log(event.target.checked);
});

function setDarkModePreference() {
    const localStorageSetting = localStorage.getItem("darkmodeActive");
    if (!localStorageSetting && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        document.body.classList.add("darkmode");
        document.getElementById("darkmode-checkbox").checked = true;
    }

    if (localStorageSetting === "true") {
        document.body.classList.add("darkmode");
        document.getElementById("darkmode-checkbox").checked = true;
    }
}
window.onload = setDarkModePreference;

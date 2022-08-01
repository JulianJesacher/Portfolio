//Add listener to darkmode slider
document.getElementById("darkmode-checkbox").addEventListener("click", (event) => {
    document.body.classList.toggle("darkmode");
    localStorage.setItem("darkmodeActive", event.target.checked);
});

/*
Load darkmode preferences from system/storage and
set darkmode accordingly
*/
window.addEventListener("load", (event) => {
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
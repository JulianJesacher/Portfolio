/**
 * Checks screen size and switches contact-me forms depending on screen size
 */
const handleFooterBackgroundText = () => {
    textElements = Array.from(document.getElementsByClassName("footer-background-text"));
    if (window.innerWidth > 1250) {
        textElements.forEach((textElement) => (textElement.textContent = "JULIAN JESACHER"));
    } else {
        textElements.forEach((textElement) => (textElement.textContent = "JULIAN"));
    }
};

window.addEventListener("resize", handleFooterBackgroundText);
window.addEventListener("load", handleFooterBackgroundText);

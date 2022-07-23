/*
  Detect window resizing and if value exceeded, change footer-background text content
*/
const handleFooterBackgroundText = () => {
    console.log("HEY")
    textElements = Array.from(document.getElementsByClassName("footer-background-text"));
    if (window.innerWidth > 1250) {
        textElements.forEach((textElement) => (textElement.textContent = "JULIAN JESACHER"));
    } else {
        textElements.forEach((textElement) => (textElement.textContent = "JULIAN"));
    }
};
window.addEventListener("resize", handleFooterBackgroundText);
window.addEventListener('load', handleFooterBackgroundText);

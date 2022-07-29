import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  Detect window resizing and if value exceeded, change footer-background text content
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
window.addEventListener('load', handleFooterBackgroundText);

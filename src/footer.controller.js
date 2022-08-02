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

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer-section",
        pin: false, // don't pin the footer-section
        start: "top center", // start animation when top of footer section is in the center of the screeen
        end: "+=800", // end animation after 800px scrolled from the beginning
        scrub: true, // only continue animation when actively scrollling
        snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 1, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
    },
});

ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 1250px)": function () {
        tl.addLabel("start")
            .from(".footer-background-text", { x: 0 }, 0)
            .addLabel("move-left")
            .to(".footer-background-text", { x: 2000 }, 0)
            .addLabel("move-back")
            .to(".footer-background-text", { x: -730 })
            .addLabel("end");
    },

    // mobile
    "(max-width: 1249px)": function () {
        tl.addLabel("start")
            .from(".footer-background-text", { x: 0 }, 0)
            .addLabel("move-left")
            .to(".footer-background-text", { x: 1000 }, 0)
            .addLabel("move-back")
            .to(".footer-background-text", { x: 30 })
            .addLabel("end");
    },
});
tl.disable();

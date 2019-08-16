function showPhoto() {
    const photos = document.querySelectorAll(".photo");

    for(let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", function() {
            this.querySelector("img").classList.toggle("photo-big");
            this.querySelector(".photo-story").classList.toggle("photo-story-show");
        })
    }
};

function useScrollReveal() {
    const slideLeft = {
        distance: "150%",
        origin: "left",
        opacity: null
    };

    const slideRight = {
        distance: "150%",
        origin: "right",
        opacity: null
    };

    ScrollReveal().reveal(".main-header", { delay: 200 });
    ScrollReveal().reveal(".second-header", { delay: 300 });
    ScrollReveal().reveal(".story-header, .story-fourth-header, .story-paragraph, .about-us-box", slideLeft);
    ScrollReveal().reveal(".third-header-gallery, .fourth-header-gallery, .photo, .about-us-box-second", slideRight);
    ScrollReveal().reveal(".social-icons-section-wrapper, .footer-wrapper", { delay: 400 });
}

function showAnimations() {
    const mobile = window.matchMedia("screen and (min-width: 750px)");

    if (mobile.matches) {
        useScrollReveal();
    }

    mobile.addListener( function(mobile) {
        if (mobile.matches) {
            useScrollReveal();
        }
    });
};

const init = () => {
    showPhoto();
    showAnimations();
};

document.addEventListener("DOMContentLoaded", init);

function showPhoto() {
    const photos = document.querySelectorAll(".photo");

    for(let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", function() {
            this.querySelector("img").classList.toggle("photo-big");
            this.querySelector(".photo-story").classList.toggle("photo-story-show");
        })
    }
}

function showAnimations() {

    const slideLeft = {
        distance: "100%",
        origin: "left",
        delay: 300,
        opacity: null
    };

    const slideRight = {
        distance: "100%",
        origin: "right",
        delay: 300,
        opacity: null
    };

    ScrollReveal().reveal(".main-header", { delay: 200 });
    ScrollReveal().reveal(".second-header", { delay: 300 });
    ScrollReveal().reveal(".story-header, .story-fourth-header, .story-paragraph", slideLeft);
    ScrollReveal().reveal(".third-header-gallery, .fourth-header-gallery, .gallery-photos", slideRight);
    ScrollReveal().reveal(".about-us-box", slideLeft);
    ScrollReveal().reveal(".about-us-box-second", slideRight);
    ScrollReveal().reveal(".social-icons-section-wrapper, .footer-wrapper", { delay: 400 });
}

const init = () => {
    showPhoto();
    showAnimations();
};

document.addEventListener("DOMContentLoaded", init);

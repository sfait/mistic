function showPhoto() {
    const photos = document.querySelectorAll(".photo");

    for(let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", function() {
            this.querySelector("img").classList.toggle("photo-big");
        })
    }
}

const init = () => {
    showPhoto();
};

document.addEventListener("DOMContentLoaded", init);

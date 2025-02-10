// Lightbox Functionality
let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".gallery-item img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    let lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = slides[slideIndex - 1].src;
}

// opens the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// closes the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// sets slideIndex to 1 initially, and shows slide on first item
var slideIndex = 1;
showSlides(slideIndex);

// controls for Next/Previous arrows
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// controls for thumbnail image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    // loops to the front if we go beyond the end of the slides array
    if (n > slides.length) { slideIndex = 1 }
    // loops to the end if we go beyond the array in the negative direction
    if (n < 1) { slideIndex = slides.length }
    // hides slides and sets dots inactive
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // displays the current slide index (-1 to account for position in array starting at 0)
    // activates that slide's dot and pulls the alt information to display
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
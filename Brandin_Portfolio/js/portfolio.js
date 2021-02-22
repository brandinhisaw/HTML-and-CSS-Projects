// functions for opening and closing the contact form pop-up
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// functions for use by the slideshow below
var slideIndex = 1;
showSlides(slideIndex);

// for use with Next, Previous buttons to increment the slide index
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// for use with the dots to set slide to selected dot number
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function used to display current slideIndex
function showSlides(n) {
    var i;
    // collects the slides and dots from the HTML class and stores them in their respective array
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // checks for position outside of the array and loops back to the start if it exceeds max, or to the end if it precedes the min
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // resets all slides to be hidden and inactive
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // sets the slideIndex (minus 1 to match array position) to active and displaying
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// function to set video playback speed to .5x speed
var video = document.getElementById("Background_Video");
video.playbackRate = 0.75;
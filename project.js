let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
    ymaps.ready(init);
    var myMap;

    function init() {

    myMap = new ymaps.Map("map", {
        center: [53.90740930501604,27.44189065525817],
        zoom: 13
    });

    myMap.controls.add(
    new ymaps.control.ZoomControl()
    );

    myPlacemark = new ymaps.Placemark([53.90740930501604,27.44189065525817], {
    balloonContent: "<div class='ya_map'>Заезжайте в гости!</div>"
}, {
    preset: "twirl#redDotIcon"
});

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}




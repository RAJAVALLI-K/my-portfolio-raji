
var owl = $('.contain');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});


let toggleBtn = document.querySelector('#nave-bar');
function btn() {
    toggleBtn.classList.toggle('nav');
}


var typed = new Typed(".auto-type", {
    strings: ["Front End Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


let loader = document.getElementById("loader-wrapper");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

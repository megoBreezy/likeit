var swiper = new Swiper(".welcome-slider", {
    effect: "fade",
    speed: 900,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});


var caseSlider = new Swiper(".case-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    },
});

//badge
window.onscroll = function() {badgeHide()};

function badgeHide() {
    var badges = document.querySelectorAll(".badge");

    for (const badge of badges) {
        var fixed = badge.offsetTop;

        if (window.pageYOffset > fixed) {
            
            badge.classList.add("badge-hide");
        } else {
            badge.classList.remove("badge-hide");
        }
    }
}


//menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-wrap');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', function(event) {
    event.preventDefault();

    menu.classList.toggle('is-active');
    this.classList.toggle('is-active');
    document.body.classList.toggle('body-overflow');
});

//counter animate
const pure = new PureCounter({
    // Setting that can't' be overriden on pre-element
    selector: ".counter", // HTML query selector for spesific element
    
    // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
    start: 0, // Starting number [uint]
    duration: 2, // The time in seconds for the animation to complete [seconds]
    delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    once: true, // Counting at once or recount when the element in view [boolean]
    pulse: false, // Repeat count for certain time [boolean:false|seconds]
    decimals: 0, // How many decimal places to show. [uint]
    legacy: true, // If this is true it will use the scroll event listener on browsers
    filesizing: false, // This will enable/disable File Size format [boolean]
    currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
    formater: "de-DE", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
    separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});



//aos
AOS.init({
    duration: 1200,
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var aboutSection = document.getElementById("about");
    var projectSection = document.getElementById("projects");
    var contactSection = document.getElementById("contact");
    
    var navbarLinks = document.querySelectorAll(".navbar a");

    if (aboutSection.offsetTop <= window.pageYOffset && projectSection.offsetTop > window.pageYOffset) {
        navbarLinks[0].classList.remove("active");
        navbarLinks[1].classList.add("active");
        navbarLinks[2].classList.remove("active");
        navbarLinks[3].classList.remove("active");
    } else if (projectSection.offsetTop <= window.pageYOffset && contactSection.offsetTop > window.pageYOffset) {
        navbarLinks[0].classList.remove("active");
        navbarLinks[1].classList.remove("active");
        navbarLinks[2].classList.add("active");
        navbarLinks[3].classList.remove("active");
    } else if (contactSection.offsetTop <= window.pageYOffset) {
        navbarLinks[0].classList.remove("active");
        navbarLinks[1].classList.remove("active");
        navbarLinks[2].classList.remove("active");
        navbarLinks[3].classList.add("active");
    } else {
        navbarLinks[0].classList.add("active");
        navbarLinks[1].classList.remove("active");
        navbarLinks[2].classList.remove("active");
        navbarLinks[3].classList.remove("active");
    }
}
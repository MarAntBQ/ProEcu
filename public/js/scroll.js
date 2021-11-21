const MenuLinks = document.querySelectorAll('ul li a');
//console.log(MenuLinks)
//MenuLinks[0].classList.add("active");
var about = document.getElementById("about");
var products = document.getElementById("products");
var contact = document.getElementById("contact");

function ScrollFnts() {
    var scrollTop = document.documentElement.scrollTop;
    var aboutTop = about.offsetTop;
    var aboutFinal = aboutTop - 50;
    var productsTop = products.offsetTop;
    var productsFinal = productsTop - 50;
    var contactTop = contact.offsetTop;
    var contactFinal = contactTop - 50;

    if (70 < scrollTop) {
        MenuLinks[0].classList.add("active");
    } else {
        MenuLinks[0].classList.remove("active");
    }

    if (aboutFinal < scrollTop) {
        MenuLinks[0].classList.remove("active");
        MenuLinks[1].classList.add("active");

    } else {
        MenuLinks[1].classList.remove("active");
    }

    if (productsFinal < scrollTop) {
        MenuLinks[0].classList.remove("active");
        MenuLinks[1].classList.remove("active");
        MenuLinks[2].classList.add("active");

    } else {
        MenuLinks[2].classList.remove("active");
    }

    if (contactFinal < scrollTop) {
        MenuLinks[0].classList.remove("active");
        MenuLinks[1].classList.remove("active");
        MenuLinks[2].classList.remove("active");
        MenuLinks[3].classList.add("active");

    } else {
        MenuLinks[3].classList.remove("active");
    }
}

window.addEventListener('scroll', ScrollFnts);
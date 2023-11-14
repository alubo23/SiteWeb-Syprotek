window.addEventListener("scroll", function() {
    // Obtiene la barra de navegación por su ID
    var navbar = document.getElementById("navbar");

    // Cambia el estilo de la barra de navegación cuando se ha hecho scroll
    if (window.scrollY > 100) {
        navbar.classList.add("solid"); // Agrega la clase "solid" para cambiar el color
    } else {
        navbar.classList.remove("solid"); // Elimina la clase "solid" para volver a la transparencia
    }
});

//Navbar
// element selector
const navButton = document.querySelector(".nav-button");
const menuContainer = document.querySelector(".menu-container");
const menuLinks = document.querySelectorAll(".menu-link");

// variable to toggle menuContainer
let showMenu = false;

// keep svg icon inside variables
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// add menuIcon by deafult
navButton.innerHTML = menuIcon;

// functions
const toggleShowMenu = () => {
  showMenu = !showMenu;

  if (showMenu) {
    navButton.innerHTML = closeIcon;
    menuContainer.classList.add("show");
  } else {
    navButton.innerHTML = menuIcon;
    menuContainer.classList.remove("show");
  }
};

// event listener
navButton.addEventListener("click", toggleShowMenu);

menuLinks.forEach((menuLink) =>
  menuLink.addEventListener("click", toggleShowMenu)
);


// Slider Review
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:3
            }
        }, {
            breakpoint: 600,
            setting: {
                slidesToShow: 2
            }
        },{
            breakpoint: 450,
            setting: {
                slidesToShow: 1
            }
        }]
    });
});
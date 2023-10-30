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
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});
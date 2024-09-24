/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar on page load
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos con la clase 'portfolio-item'
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function (event) {
            // Evita que el clic en el elemento detalle cierre el detalle
            event.stopPropagation();
            
            // Oculta todas las secciones de detalle
            document.querySelectorAll('.portfolio-item-detail').forEach(detail => {
                detail.style.display = 'none';
            });

            // Marca todos los items como no abiertos
            portfolioItems.forEach(el => el.removeAttribute('data-open'));

            // Muestra la sección de detalle correspondiente
            const targetId = this.getAttribute('data-target');
            const targetDetail = document.querySelector(targetId);

            if (targetDetail) {
                targetDetail.style.display = 'block';
                this.setAttribute('data-open', 'true');
            }
        });
    });

    // Cierra el detalle cuando se hace clic fuera del detalle
    document.addEventListener('click', function () {
        document.querySelectorAll('.portfolio-item-detail').forEach(detail => {
            detail.style.display = 'none';
        });
        portfolioItems.forEach(el => el.removeAttribute('data-open'));
    });
});

// Función para mover al siguiente elemento automáticamente
function autoSlide() {
    moveToSelected('next');
  }
  
  // Iniciar el carrusel automático
  function startCarousel() {
    // Cambiar la imagen cada 3 segundos (3000 milisegundos)
    setInterval(autoSlide, 3000);
  }
  
  // Llamar a la función para iniciar el carrusel automático
  startCarousel();
  
  // Función para mover la selección del carrusel
  function moveToSelected(element) {
    if (element == "next") {
      var selected = $(".selected").next();
      if (selected.length === 0) {
        selected = $("#carousel div").first(); // Si no hay siguiente, volver al primero
      }
    } else if (element == "prev") {
      var selected = $(".selected").prev();
      if (selected.length === 0) {
        selected = $("#carousel div").last(); // Si no hay previo, ir al último
      }
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        moveToSelected('prev');
        break;
  
      case 39: // right
        moveToSelected('next');
        break;
  
      default: return;
    }
    e.preventDefault();
  });
  
  // Eventos de clics (opcional, si quieres mantener la funcionalidad de clic)
  $('#carousel div').click(function() {
    moveToSelected($(this));
  });
  
  // Eventos de clic en los botones de navegación (opcional)
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.team-scroll-container');
    const wrapper = document.querySelector('.team-scroll-wrapper');

    // Clonar los elementos y agregar al final para crear el efecto de scroll infinito
    const items = wrapper.children;
    const itemCount = items.length;

    for (let i = 0; i < itemCount; i++) {
        const clone = items[i].cloneNode(true);
        wrapper.appendChild(clone);
    }
});
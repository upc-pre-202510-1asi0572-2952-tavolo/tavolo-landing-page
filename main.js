const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// EmailJS initialization
(function() {
  // Inicializa EmailJS con tu clave pública COMPLETA
  emailjs.init("ARWKRHe7J7IZFD_he"); // Reemplaza con la clave pública completa
  
  // Obtén el formulario de contacto
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Cambia el texto del botón mientras envía
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = "Enviando...";
      button.disabled = true;
      
      // Envía el formulario usando EmailJS
      emailjs.sendForm('service_jk7v4fg', 'template_q83gk49', this)
        .then(function() {
          // Mensaje de éxito
          alert('¡Mensaje enviado con éxito!');
          contactForm.reset();
          button.textContent = originalText;
          button.disabled = false;
        }, function(error) {
          // Mensaje de error
          console.error('Error al enviar el mensaje:', error);
          alert('Error al enviar el mensaje: ' + error.text);
          button.textContent = originalText;
          button.disabled = false;
        });
    });
  }
})();

// Añadir este código a tu archivo main.js
  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Cuanto más bajo, más rápido
    
    const startCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'));
          const count = parseInt(counter.innerText);
          
          // Calcular incremento
          let increment = Math.trunc(target / speed);
          
          // Si el incremento es demasiado pequeño
          if (increment < 1) {
            increment = 1;
          }
          
          // Si aún no alcanzamos el objetivo
          if (count < target) {
            // Incrementar el contador
            counter.innerText = count + increment;
            // Repetir hasta alcanzar el objetivo
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        
        updateCount();
      });
    };
    
    const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  // Eliminar o comentar el autoplay para que no sea automático
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Eliminar los breakpoints para que siempre muestre solo 1 tarjeta
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // }
});
    
    // Iniciar contadores cuando están en el viewport
    const statsSection = document.querySelector('.stats__container');
    
    // Función para comprobar si un elemento está en el viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
    
    // Iniciar contadores cuando la sección está visible
    function checkIfInView() {
      if (isInViewport(statsSection)) {
        startCounters();
        window.removeEventListener('scroll', checkIfInView);
      }
    }
    
    // Verificar al cargar y al hacer scroll
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();
  });
  
  // Añadir animación de ScrollReveal
  ScrollReveal().reveal(".stats__card", {
    ...scrollRevealOption,
    interval: 200,
  });

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

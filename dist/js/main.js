import {faq} from './faq.js';
import {modalRegistration} from "./modalRegistration.js";
import {setupMobileMenu} from "./mobileMenu.js";

modalRegistration();
faq();
setupMobileMenu();

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  targetOffset = targetElement.offsetTop - 30;
  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});

new Swiper('.reviews__swiper', {
  autoHeight: true,
  speed: 700,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  navigation: {
    prevEl: '.reviews__btn--prev',
    nextEl: '.reviews__btn--next'
  },
  breakpoints: {
    1160: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 'auto'
    }
  }
});
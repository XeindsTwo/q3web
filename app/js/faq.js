export function faq() {
  document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('[data-faq-btn]');
    const faqBodies = document.querySelectorAll('.faq__body');

    if (faqBodies.length === 0) {
      console.error("Error: The expected '.faq__body' element was not found.");
      return;
    }

    faqBodies.forEach(faqBody => {
      const faqItem = faqBody.closest('.faq__item');
      const faqTitle = faqItem?.querySelector('.faq__name');

      if (faqBody.classList.contains('faq__body--active')) {
        updateTabIndexes(faqBody, false);
        faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
        faqTitle?.classList.add('active');
      } else {
        updateTabIndexes(faqBody, true);
        faqTitle?.classList.remove('active');
      }
    });

    faqButtons.forEach(button => {
      button.addEventListener('click', function () {
        const faqItem = button.closest('.faq__item');
        const faqBody = faqItem.querySelector('.faq__body');
        const faqTitle = faqItem.querySelector('.faq__name');

        faqBodies.forEach((body) => {
          if (body !== faqBody) {
            const otherItem = body.closest('.faq__item');
            const otherHead = otherItem?.querySelector('.faq__name');
            body.style.maxHeight = '0px';
            body.classList.remove('faq__body--active');
            otherHead?.classList.remove('active');
            updateTabIndexes(body, true);
          }
        });

        if (faqBody.classList.contains('faq__body--active')) {
          faqBody.style.maxHeight = '0px';
          faqBody.classList.remove('faq__body--active');
          faqTitle?.classList.remove('active');
          updateTabIndexes(faqBody, true);
        } else {
          faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
          faqBody.classList.add('faq__body--active');
          faqTitle?.classList.add('active');
          updateTabIndexes(faqBody, false);
        }
      });
    });

    function updateTabIndexes(container, isHidden) {
      const focusableElements = container.querySelectorAll('a, button, input, [tabindex]');
      focusableElements.forEach(el => {
        if (isHidden) {
          el.setAttribute('tabindex', '-1');
        } else {
          el.removeAttribute('tabindex');
        }
      });
    }
  });
}
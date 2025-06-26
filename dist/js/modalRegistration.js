export function modalRegistration() {
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const html = document.documentElement;
    const body = document.body;
    const openButtons = document.querySelectorAll('.open-modal-btn');
    const closeButtons = [
      document.getElementById('modalCloseBtnCross'),
      document.getElementById('modalCloseBtn')
    ];

    const openModal = () => {
      modal.classList.add('active');
      html.classList.add('active');
      body.style.overflowX = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('active');

      if (!document.querySelector('.header__mobile')?.classList.contains('active')) {
        html.classList.remove('active');
      }

      body.style.overflowX = '';
    };

    openButtons.forEach(btn => {
      btn.addEventListener('click', openModal);
    });

    closeButtons.forEach(btn => {
      btn?.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
}
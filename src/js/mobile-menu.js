(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeLinkBtn: document.querySelector('[link-menu-close]'),
    closeLink2Btn: document.querySelector('[link2-menu-close]'),
    closeLink3Btn: document.querySelector('[link3-menu-close]'),
    closeLink4Btn: document.querySelector('[link4-menu-close]'),
    closeLink5Btn: document.querySelector('[link5-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeLinkBtn.addEventListener('click', toggleModal);
  refs.closeLink2Btn.addEventListener('click', toggleModal);
  refs.closeLink3Btn.addEventListener('click', toggleModal);
  refs.closeLink4Btn.addEventListener('click', toggleModal);
  refs.closeLink5Btn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
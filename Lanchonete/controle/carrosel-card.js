document.addEventListener('DOMContentLoaded', () => {
  const carrosselContainer = document.querySelector('.slides');
  const items = document.querySelectorAll('.produtoDestaque');
  const buttons = document.querySelectorAll('.btn-carrosel');
  let currentIndex = 0;

  function updateCarrossel() {
    const offset = -currentIndex * 100; // 100% width per item
    items.forEach((item, index) => {
      item.style.transform = `translateX(${offset}%)`;
    });
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentIndex = index;
      updateCarrossel();
    });
  });

  updateCarrossel(); // Initialize carrossel position
});

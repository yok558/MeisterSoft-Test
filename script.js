const product = document.querySelector('.products');
const main = document.querySelector('.main');

function changeProduct(e) {
  const parentCard = event.target.closest('.card');
  if (parentCard === null) {
    product.innerHTML = 'Наши продукты';
    return;
  }
  const cardName = parentCard.querySelector('h3').innerText;
  if (parentCard.innerHTML.includes(cardName)) {
    product.innerHTML = cardName;
  }
}

main.addEventListener('click', changeProduct);

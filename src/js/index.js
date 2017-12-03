import Product from './product';
import data from './data';

const products = Array.from(document.querySelectorAll('.product'));

products.forEach((product, index) => {
  const card = new Product(product, data[index]);
  if (data[index].existence) {
    product.addEventListener('click', card.selectedCard);
  } else {
    card.disabledCard();
    product.removeEventListener('click', card.selectedCard);
  }
});

const products = Array.prototype.slice.call(document.querySelectorAll('.product'));

products.forEach((product) => {
  const checkbox = product.querySelector('input[type=checkbox]');
  const buy = product.querySelector('.product__buy');
  const card = product.querySelector('.product__card');
  const heading = product.querySelector('.product__heading');

  const handlerSatusProduct = () => {
    if (!checkbox.hasAttribute('checked')) {
      checkbox.setAttribute('checked', true);
      product.classList.add('is-selected');
      buy.classList.add('visually-hidden');
      heading.classList.remove('visually-hidden');
    } else {
      checkbox.removeAttribute('checked');
      product.classList.remove('is-selected');
      buy.classList.remove('visually-hidden');
      heading.classList.add('visually-hidden');
      product.classList.remove('is-selected-hover');
    }
  };

  if (checkbox.hasAttribute('disabled')) {
    product.classList.add('is-disabled');
    buy.innerHTML = product.dataset.disabled;
  }

  checkbox.addEventListener('change', handlerSatusProduct);
  card.addEventListener('click', handlerSatusProduct);
  card.addEventListener('mouseleave', () => {
    if (checkbox.hasAttribute('checked')) {
      product.classList.add('is-selected-hover');
    } else {
      product.classList.remove('is-selected-hover');
    }
  });
});

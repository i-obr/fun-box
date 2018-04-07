function Product(el, data) {
  const good = el;
  const buy = good.querySelector('.product__buy');

  function disabledCard() {
    good.classList.add('is-disabled');
    buy.innerHTML = data.buyDefault;
  }

  function disableHover() {
    good.classList.remove('disable-hover');
    good.removeEventListener('mouseleave', disableHover);
  }

  function getTargetElem(evt) {
    const card = good.querySelector('.product__card');
    const link = good.querySelector('.product__buy a');
    let target = evt.target;
    evt.preventDefault();

    while (target !== good) {
      if (target === card || target === link) {
        evt.stopPropagation();
        return true;
      }
      target = target.parentNode;
    }

    return false;
  }

  function selectedCard(evt) {
    if (!getTargetElem(evt)) {
      return;
    }

    if (!good.classList.contains('is-selected')) {
      good.classList.add('is-selected');
      good.classList.add('disable-hover');
      buy.innerHTML = data.buy;
      good.addEventListener('mouseleave', disableHover);
    } else {
      good.classList.remove('is-selected');
      buy.innerHTML = data.buyDefault;
    }
  }

  this.selectedCard = selectedCard;
  this.disabledCard = disabledCard;
}

export default Product;

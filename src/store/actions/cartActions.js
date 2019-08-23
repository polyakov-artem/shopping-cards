import {
  TOGGLE_MENU,
  UPDATE_CART_PRODUCTS
} from '../actionTypes/cartTypes'

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  }
}

export function updateCartProducts(cartProducts) {
  return ({
    type: UPDATE_CART_PRODUCTS,
    payload: cartProducts
  })
}

export function addToCart(product) {
  return function(dispatch, getState) {
    const products = [...getState().cartReducer.products];
    const productIndex = findIndex(products, 'id', product.id);
    const productToAdd = { ...product };

    if (productIndex !== -1) {
      products[productIndex].quantity += 1
    } else {
      products.push(productToAdd)
      productToAdd.quantity = 1;
    };

    dispatch(updateCartProducts(products))
  };
}

export function removeFromCart(product) {
  return function(dispatch, getState) {
    const products = [...getState().cartReducer.products];
    const productIndex = findIndex(products, 'id', product.id);

    products.splice(productIndex, 1);

    dispatch(updateCartProducts(products))
  };
}

export function findIndex(array, arrayProp, value) {
  let j = array.length;

  for (let i = 0; i < j; i++) {
    if (array[i][arrayProp] === value) return i
  }

  return -1
}
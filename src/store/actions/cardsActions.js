import axios from 'axios'

import {
    LOADING_STARTED,
    UPDATE_PRODUCTS,
    LOADING_ENDED,
    LOADING_ERROR,
    UPDATE_ARRANGED_PRODUCTS,
    UPDATE_FILTERS,
    UPDATE_SORTBY
} from '../actionTypes/cardsTypes'

export function fetchProducts() {
  return async function(dispatch, getState) {
    dispatch({ type: LOADING_STARTED });

    try {
      const response = await axios.get('https://shopping-carts-d135c.firebaseio.com/products.json');
      dispatch(updateProducts(response.data));
      dispatch(updateArrangedProducts(response.data));
      dispatch(arrangeProducts());
      dispatch({ type: LOADING_ENDED });
    } catch (e) {
      dispatch(loadingError(e))
    };
  }
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    payload: products
  }
}

export function loadingError(e) {
  return {
    type: LOADING_ERROR,
    payload: e
  }
}

export function arrangeProducts() {
  return function(dispatch, getState) {
    const { sortBy, filters, products } = getState().cardsReducer;
    let arrangedProducts = sort([...products], sortBy);

    if (filters.length) {
      arrangedProducts = arrangedProducts.filter((product) => {
        return product.availableSizes.some((size) => filters.indexOf(size) >= 0)
      });
    };

    dispatch(updateArrangedProducts(arrangedProducts))
  };
}

export function sort(array, sortBy) {
  switch (sortBy) {
    case 'lowest':
      return array.sort((a, b) => a.price - b.price);
    case 'highest':
      return array.sort((a, b) => b.price - a.price);
    default:
      return array;
  }
}

export function updateArrangedProducts(arrangedProducts) {
  return {
    type: UPDATE_ARRANGED_PRODUCTS,
    payload: arrangedProducts
  }
}

export function updateFilters(filters) {
  return {
    type: UPDATE_FILTERS,
    payload: filters
  }
}

export function updateSortBy(sortBy) {
  return {
    type: UPDATE_SORTBY,
    payload: sortBy
  }
}
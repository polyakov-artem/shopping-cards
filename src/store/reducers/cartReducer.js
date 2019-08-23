import {
  TOGGLE_MENU,
  UPDATE_CART_PRODUCTS
} from '../actionTypes/cartTypes'

const initialState = {
  menuIsOpen: false,
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      };
    case UPDATE_CART_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
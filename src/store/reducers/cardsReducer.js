import {
    LOADING_STARTED,
    UPDATE_PRODUCTS,
    LOADING_ENDED,
    LOADING_ERROR,
    UPDATE_ARRANGED_PRODUCTS,
    UPDATE_FILTERS,
    UPDATE_SORTBY
} from '../actionTypes/cardsTypes';

const initialState = {
  products: [],
  arrangedProducts: [],
  filters: [],
  sortBy: 'Select',
  loading: false,
  error: null
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_STARTED:
      return {
        ...state,
        loading: true
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case LOADING_ENDED:
      return {
        ...state,
        loading: false
      };
    case LOADING_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case UPDATE_ARRANGED_PRODUCTS:
      return {
        ...state,
        arrangedProducts: action.payload
      };

    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload
      };

    case UPDATE_SORTBY:
      return {
        ...state,
        sortBy: action.payload
      };

    default:
      return state;
  }
}
import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import cardsReducer from './cardsReducer'

const rootReducer = combineReducers({
  cartReducer,
  cardsReducer
})

export default rootReducer;
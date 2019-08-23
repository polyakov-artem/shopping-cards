import React from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from './../../store/actions/cartActions';

const CartItem = (props) =>{
  const {removeFromCart, product, quantity} = props;
  const {sku,title,style,currencyFormat, price, availableSizes} = product;
  const removeProduct = ()=> removeFromCart(product);

  return (
    <li className='cart-item'>
      <img className='cart-item__img' src={`images/products/${sku}_2.jpg`} alt={title} />
      <div className='cart-item__col'>
        <h5 className='cart-item__title'>{title}</h5>
        <p className='cart-item__descr'>{availableSizes.join(', ')} | {style}</p>
        <p className='cart-item__quantity'>Quantity:
          <span>&nbsp;{quantity}</span>
        </p>
      </div>
      <button type='button' className='btn cart-item__remove-btn' onClick = {removeProduct}>
        <span>+</span>
      </button>
      <div className='cart-item__price'>{currencyFormat} {price.toFixed(2)}</div>
    </li>
  )
}

const mapDispatchToProps = {
  removeFromCart
}

export default connect(null, mapDispatchToProps)(CartItem)
import React from 'react'

import CartItem from './../CartItem/CartItem';

const CartList = (props) =>{
  const {products} = props;
  const listOfProducts = (
    <ul className='cart-list'>
      {products.map((product)=>(
        <CartItem product={product} quantity = {product.quantity} key = {product.id}/>
      ))}
    </ul>
  );

  return products.length === 0 
    ? <p className = 'cart__add-text'>Add something to cart...</p>
    : listOfProducts
}

export default CartList
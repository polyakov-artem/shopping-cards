import React from 'react';
import { connect } from 'react-redux'

import { addToCart } from './../../store/actions/cartActions';

const Card = (props) => {
  const classes =['card', ...(props.classes || [])].join(' ');
  const {product, addToCart} = props;
  const {isFreeShipping,sku,title,installments,currencyFormat} = product;
  const [dollars, cents=0] = (''+product.price).split('.');
  const [installmentsDollars, installmentsCents=0] = (product.price*0.5).toFixed(1).split('.');
  const addProductToCart = () => {
    addToCart(product)
  };

  return (
    <div className={classes} >
      <div className="card__img-wrap">
        {isFreeShipping && <span className='card__state'>Free shipping</span>}
        <img className='card__img responsive-img' src={`images/products/${sku}_1.jpg`} alt={title} />
      </div> 
      <h5 className='card__title'>{title}</h5>
      <p className='card__basic-price'>{currencyFormat}<span>{dollars}</span>.{cents}</p>
      <p className='card__spec-price'>or {installments} x{currencyFormat}<span>{installmentsDollars}</span>.{installmentsCents}</p>
      <button type='button' className='btn btn_size_1 btn_theme_1' onClick = {addProductToCart}>
        Add to cart
      </button>
    </div>
  )
}

const mapDispatchToProps = {
  addToCart
}

export default connect(null, mapDispatchToProps)(Card)




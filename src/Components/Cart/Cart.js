import React from 'react'
import { connect } from 'react-redux'

import { toggleMenu } from './../../store/actions/cartActions';
import CartList from './../CartList/CartList';

const Cart = (props) =>{
  const {toggleMenu, menuIsOpen, products} = props;
  const quantity = products.reduce((total, product)=>total+product.quantity, 0);
  const totalPrice = products.reduce((total, product)=>total+product.price*product.quantity, 0).toFixed(2);
  const currencyFormat = (products[0] && products[0].currencyFormat) || '';

  return (
    <React.Fragment>
      <div className={'hamburger hamburger_spin menu-close-btn ' + (menuIsOpen? ' is-active menu-close-btn_is_active':'')} onClick={toggleMenu}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <aside className={'cart' + (menuIsOpen? ' cart_is_open':'')}>
        <div className='cart__header'>
          <div className='cart__logo'>
            <img className='responsive-img' src='images/bag-icon.png' alt=""/>
            <div className='cart__num'>{quantity}</div>
          </div>
          <h4 className='cart__title'>Cart</h4>
        </div>
        <CartList products = {products}/>
        <div className='cart__total'>
          <div className='cart__total-col-1'>
            SUBTOTAL
          </div>
          <div className='cart__total-col-2'>
            <p className='cart__total-price'>{currencyFormat} {totalPrice}</p>
          </div>
        </div>
        <button className='btn btn_size_1 btn_theme_1'>CHECKOUT</button>
      </aside>
    </React.Fragment>
  )
}


function mapStateToProps(state) {
  return {
    menuIsOpen: state.cartReducer.menuIsOpen,
    products: state.cartReducer.products,
  }
}

const mapDispatchToProps = {
  toggleMenu,
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
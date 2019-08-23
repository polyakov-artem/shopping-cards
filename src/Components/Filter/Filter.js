import React from 'react'

import { connect } from 'react-redux'
import Checkbox from './../Checkbox/Checkbox';
import { updateFilters, arrangeProducts } from './../../store/actions/cardsActions';

const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends React.Component {

  componentDidMount(){
    this.filters = new Set();
  }

  filterProducts = (filter)=>{
    const filters = this.filters;

    filters.has(filter)
      ? filters.delete(filter)
      : filters.add(filter);

    this.props.updateFilters(Array.from(filters));
    this.props.arrangeProducts();
  };


  render(){
    return (
      <div className='filter'>
        <h4 className='filter__title'>Sizes</h4>
        <ul className='sizes'>
          {sizes.map((size) => (
            <li className='sizes__item' key={size}>
              <Checkbox label = {size} value={size} handleChange = {this.filterProducts}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateFilters,
  arrangeProducts,
}

export default connect(null, mapDispatchToProps)(Filter)
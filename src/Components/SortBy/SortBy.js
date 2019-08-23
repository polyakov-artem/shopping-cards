import React from 'react'
import { connect } from 'react-redux'

import Select from './../Select/Select';
import { updateSortBy, arrangeProducts } from './../../store/actions/cardsActions';

const SortBy = (props) => {
  const {updateSortBy, arrangeProducts} = props;
  const classes =['sortby', ...(props.classes || [])].join(' ');
  const sortProducts = (e) =>{
    updateSortBy(e.target.value);
    arrangeProducts()
  }


  return (
    <div className={classes}>
      <label className='sortby__label' htmlFor="sortby__select">Sort by </label>
      <Select 
        optionClasses = 'sortby__option'
        classes = {['sortby__select']}
        options = {[
          {value: 'default', label: 'Select'}, 
          {value: 'lowest', label: 'Lowest to highest'}, 
          {value: 'highest', label: 'Highest to lowest'}
        ]}
        name = 'sortby'
        onChange = {sortProducts}
        id = 'sortby'
      />
    </div>
  )
}

const mapDispatchToProps = {
  arrangeProducts,
  updateSortBy
}


export default connect(null, mapDispatchToProps)(SortBy)
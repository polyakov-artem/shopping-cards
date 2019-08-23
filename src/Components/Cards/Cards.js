import React from 'react';
import Card from './../Card/Card';
import Loader from './../Loader/Loader';

const Cards = (props)=>{
  const classes =['cards', ...(props.classes || [])].join(' ');

  const cards = (
    <div className={classes}>
      { props.arrangedProducts.map((product)=>{
        return (
          <Card
            key = {product.id}
            classes = {['cards__card', 'col-lg-3', 'col-md-4', 'col-sm-6']}
            product = {product}
          />
        )
      })}
    </div>
   );

  return (
    props.arrangedProducts.length
    ? cards
    : <Loader classes = {['cards__loader']}/>
  )
}

export default Cards
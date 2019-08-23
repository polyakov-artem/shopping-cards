import React from 'react';
import './Loader.css'

const Loader = (props)=>{
  const classes =['loader', ...(props.classes || [])].join(' ');
  return(
    <div className={classes} /> 
  )
}

export default Loader
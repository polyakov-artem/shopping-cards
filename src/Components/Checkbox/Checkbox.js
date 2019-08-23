import React from 'react'

const Checkbox = (props) => {
  const classes =['checkbox', ...(props.classes || [])].join(' ');
  const handleChange = () => {
    props.handleChange(props.label)
  }

  return (
    <label className={classes} >
      <input value={props.value} className='checkbox__control' type="checkbox" onChange = {handleChange}/>
      <span className='checkbox__box'>{props.label}</span>
    </label>
  )
};

export default Checkbox

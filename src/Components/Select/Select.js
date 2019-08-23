import React from 'react';

const Select = (props) => {
  const {optionClasses, name, onChange, id, options} = props;
  const classes =['select', ...(props.classes || [])].join(' ');

  return (
    <select className={classes} name={name} id={id} onChange = {onChange} >
      {options.map((option)=>(
        <option className={optionClasses} value={option.value} key={option.label} >{option.label}</option>
      ))}
    </select>
  )
}

export default Select;
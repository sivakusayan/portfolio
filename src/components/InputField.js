import React from 'react';

const InputField = ({ label, type, value, onChange, noValidate }) => (
  <label htmlFor={label.toLowerCase()} className='field field--text'>
    <p className='field__name'>
      {label}
    </p>
    <input
      type={type}
      name={label.toLowerCase()}
      id={label.toLowerCase()}
      className='field__input'
      value={value}
      onChange={onChange}
      novalidate={noValidate}
      required
    />
  </label>
);

export default InputField;

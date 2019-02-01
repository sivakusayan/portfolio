import React from 'react';

const InputField = ({ label, type, value, onChange, pattern }) => {
  if (type === 'textarea') {
    return (
      <label htmlFor={label.toLowerCase()} className='field field--textarea'>
        <textarea
          type={type}
          name={label.toLowerCase()}
          id={label.toLowerCase()}
          className='field__input'
          value={value}
          onChange={onChange}
          placeholder='Say hello!'
          required
        />
      </label>
    );
  }
  return (
    <label htmlFor={label.toLowerCase()} className='field field--text'>
      <input
        type={type}
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        className='field__input'
        value={value}
        onChange={onChange}
        pattern={pattern}
        required
      />
      <p className='field__name'>
        {label}
      </p>
    </label>
  );
}

export default InputField;

import React from 'react'

const FormRow = ({type, name, value, handleChange, labelText, placeholder}) => {
  return (
      <div className='form-row'>
          <label htmlFor={name}>{labelText || name}</label>
          <input type={type}
              value={value}
        name={name}
        placeholder={placeholder}
              onChange={handleChange}
          className='form-input'/>
    </div>
  )
}

export default FormRow
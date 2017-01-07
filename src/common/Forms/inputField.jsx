import React, { PropTypes } from 'react';

export default function inputField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  );
}

inputField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

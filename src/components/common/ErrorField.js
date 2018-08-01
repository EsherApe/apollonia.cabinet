import React from 'react';

function ErrorField(props) {
  const {input, type, placeholder, meta: {error, touched}} = props;
  const errorText = touched && error && <div className='error-text' style={{color: 'red'}}>{error}</div>;
  return (
    <div>
      <input {...input} type={type} className='form-control' placeholder={placeholder}/>
      {errorText}
    </div>
  );
}

export default ErrorField;

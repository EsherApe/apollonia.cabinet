import React from 'react';

function ConfirmPurchaseInput(props) {
  const {input, type, placeholder, address} = props;
  return (
    <div>
      <input {...input} type={type} className='form-control' placeholder={placeholder} value={address}/>
    </div>
  );
}

export default ConfirmPurchaseInput;
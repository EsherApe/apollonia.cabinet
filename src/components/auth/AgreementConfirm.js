import React, { Fragment } from 'react';
import { Field } from 'redux-form';

const AgreementConfirm = (props) => {
  return (
    <Fragment>
      <label>
        <Field name={props.name} component='input' type="checkbox" className='confirm-checkbox'/>
        <div className='agreement__btn btn btn-secondary d-flex justify-content-center align-items-center'>
          Confirm and accept
        </div>
      </label>
    </Fragment>
  );
};

export default AgreementConfirm;
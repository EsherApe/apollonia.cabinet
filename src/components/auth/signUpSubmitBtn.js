import React, {Fragment} from 'react';

function signUpSubmitBtn(props) {
  const {input, meta: {error, touched}} = props;
  const errorText = touched && error && <div style={{color: 'red'}}>{error}</div>;
  return (
    <Fragment>
      <button type='submit' {...input} className='sign-up__btn font-weight-bold text-uppercase text-primary'>Register my profile</button>
      {errorText}
    </Fragment>
  );
}

export default signUpSubmitBtn;

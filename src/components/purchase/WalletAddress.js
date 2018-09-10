import React, {Fragment} from 'react';
import {FormGroup, Col, Button} from 'reactstrap';
import {Field} from 'redux-form';
import ErrorField from '../common/ErrorField';

const WalletAddress = (props) => {
  return (
    <Fragment>
      <h5 className="purchase__form-title font-weight-bold">Your wallet</h5>
      <FormGroup>
        <Field name='wallet' type='text' component={ErrorField}/>
        <div className="text-right mt-3">
          <Button className='confirm-purchase__btn btn-primary'>Confirm wallet</Button>
        </div>
      </FormGroup>
    </Fragment>
  );
};

export default WalletAddress;
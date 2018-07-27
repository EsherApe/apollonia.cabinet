import React, {Fragment} from 'react';
import loaderImg from '../../img/bkg.svg';

function Loader(props) {
  return (
    <Fragment>
      <div className='loader-container'>
        <img src={loaderImg} alt="loader"/>
      </div>
    </Fragment>
  );
}

export default Loader;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

//tostify
import 'react-toastify/dist/ReactToastify.css';

library.add(fab);

ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
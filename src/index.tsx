import React from 'react';
import ReactDOM from 'react-dom';

import dictionary from '../data/google-10000-english-no-swears.json';

import App from './components/App';

ReactDOM.render((
  <App
    dictionary={dictionary}
  />
), document.getElementById('root'));

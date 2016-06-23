import { Router } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'app/common/components/history/js/history';
import mainStyles from './main.scss';


import rootRoute from 'app/pages/app-container/js/route.js';

ReactDOM.render(
  <Router
      history={browserHistory}
      routes={rootRoute}
  />, document.getElementById('app'));

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'

import jquery from 'jquery'

import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import registerServiceWorker  from './registerServiceWorker';
import axios from 'axios'
axios.defaults.withCredentials = true; 
// unregister();

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();

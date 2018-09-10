import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import Navbarr from './navbar.js';


import Footer from './Footer.js';

import Routerrs from './Routers.js';

import $ from 'jquery'
class App extends Component {
  componentDidMount(){
    $(this.refs.mainDiv).hide()
  }
  render() {
    return (
      <div ref="mainDIv">
        {/* <Navbarr /> */}
        <Routerrs />
        <Footer />
      </div>
    );
  }
}

export default App;

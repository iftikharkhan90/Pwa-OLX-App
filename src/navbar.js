
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar, NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';

import './navbar.css';

import logo from './images/olx.png';




import axios from 'axios';
// export const history = createHashHistory()


class Navbarr extends Component {

  constructor(props) {
    super(props);


  }
  // componentDidMount(){
  //   history.push('/donorInformation');
  // }






  render() {
    return (
      <div className="">
        <nav className="navbar navbar-default  ">
          <div className="header">
            <div className="container">

              <div className="navbar-header">

                <img src={logo} alt="logo" className="LogoImage" />
              </div>

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse" id="navbar-collapse">

                <ul className="nav navbar-nav navbar-right">

                  

                  <li> <Link to='/'><span className="textdesign"><b><i className="fa fa-home"></i> Home</b></span> </Link></li>
                  <li> <Link to='/dashBoard' className="btn btn-custom-hollow"><i className="fa fa-user"></i> My Account</Link></li>

                  {/* <li> <Link to='/registerform'><span className="textdesign"><b>Register</b></span> </Link></li> */}
                  <li><Link to='/addPost' className="btn btn-custom-orange mr-0">Post an Ad </Link></li>






                </ul>

              </div>
            </div>
          </div>
        </nav>
      </div>






    );
  }
}
export default withRouter(Navbarr);
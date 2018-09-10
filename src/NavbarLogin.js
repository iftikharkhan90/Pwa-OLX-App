
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Navbar, NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';
import './Navbarlogin.css';
import axios from 'axios';
import { withRouter } from 'react-router'

import logo from './images/olx.png';



class NavbarrLogin extends Component {

  constructor(props) {
    super(props);
    this.signOutDonor = this.signOutDonor.bind(this);

  }
  signOutDonor = (e) => {

    e.preventDefault();





    axios.post('/user/logout', "logOut").then((response) => {
      debugger;
      var authenticateUSer = JSON.parse(localStorage.getItem('authenticatedUser') || '{}');

      localStorage.setItem('authenticatedUser', null)
      // console.log(response);
      // console.log(this.props);

      this.props.history.push('/adPostloginform');


    }).catch((err) => {
      console.log(err);

      alert("err");

    })



  }




  render() {
    return (
      <div className="">
        <nav className="navbar navbar-default  navbarProfile ">
          <div className="">
            <div className="container">

              <div className="navbar-header">

                <img src={logo} alt="logo" className="LogoImage" />
              </div>

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse" >
                <ul className="nav navbar-nav navbar-right">

                  <li> <Link to='/'><h3 style={{ marginTop: "0px" }}><i className="fa fa-home"></i><b>Home</b></h3> </Link></li>
                  {/* <li> <Link to='/loginform' className="btn btn-custom-hollow"><i className="fa fa-user"></i> My Account</Link></li> */}

                  {/* <li> <Link to='/registerform'><span className="textdesign"><b>Register</b></span> </Link></li> */}

                  <li> <Link to='/dashBoard' className="btn btn-hollow"><i className="fa fa-user"></i> My Account</Link></li>
                  <li><Link to='/addPost' className="btn btn-success mr-0">Post an Ad </Link></li>
                  {/* <li> <Link to='/bloodtips' onClick = {(e)=>this.submitLogin(e)}><span className="signout"><b>SIGN OUT</b></span> </Link></li> */}
                  <li> <form onSubmit={(e) => this.signOutDonor(e)}>
                    <label htmlFor="signout" />
                    <button id="btn1" type="submit" className="btn btn-danger signout">SIGN OUT</button>

                  </form></li>



                </ul>


              </div>
            </div>
          </div>
        </nav>
      </div>






    );
  }
}
export default withRouter(NavbarrLogin);
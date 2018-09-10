import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './logIn.css';
import axios from 'axios';
import Navbarr from './navbar.js';

import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';

class AddLoginForm extends Component {

    constructor(props){
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
    }
    submitLogin =(e)=> {

        e.preventDefault();
        
    
        let email = e.target.elements.email.value.trim();
        let password = e.target.elements.password.value.trim();

        if (!email|| !password) {
            alert(" Please Enter Data Correctly");
          } else {
              let loginRecord = {
                email,
                password
              }
            axios.post('/user/loginform',loginRecord).then((response)=>{
                
                console.log(response);
               
                if(response.data){
                    
                    
                    let userData = {id: response.data._id, email: response.data.email, authenticated: true}
                    localStorage.setItem("authenticatedUser",   JSON.stringify(userData));
                    
                    // JSON.stringify({user:response});
                this.props.history.push(localStorage.getItem('pathName'));

                } 
               
            }).catch((err)=>{
                console.log(err);
                let message = document.getElementById("loginFailed_Message");
                message.innerHTML = "your email or password is wrong";
                message.style.backgroundColor = "red";
                message.style.textAlign = "center";
                // alert("err");
                
            })
              
          }

    }

    render() {
        return (
            <div>
            <Navbarr />
            
            <div className = "loginForm">
           <div className="container-fluid loginform-container">
        <div className="card card-container">
           {/* <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" />  */} 
             <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <div id = "loginFailed_Message" ></div>

            <form className="form-signin" onSubmit = {(e)=>this.submitLogin(e)}>
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name = "email"required autoFocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" name = "password" required/>
                {/* <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div> */}
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            {/* <Link to = "/popup" className="forgot-password">
                Forgot the password?
            </Link> */}
            <div className="text-muted">Don't have an account? <Link to = "/registerform">create your account</Link></div>
        </div>
    </div>
             


                
            </div>
            </div>


        );
    }
}
export default AddLoginForm;
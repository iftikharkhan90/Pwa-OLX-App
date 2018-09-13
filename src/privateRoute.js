

import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './logIn.css';

import axios from 'axios';
import Navbarr from './navbar.js';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import { Switch, BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {

    constructor(props) {
        super(props);
        

    }
    // componentDidMount=()=>{


    //   }
    success = () => {
        toast.success("Ad Posted Successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });

    }
    error = () => {
        toast.error('Internal Error Occured', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }

    render() {
        const Component = this.props.component;
       
        console.log(this.props.location)
        var authenticateUSer = JSON.parse(localStorage.getItem('authenticatedUser') || '{}');
localStorage.setItem("pathName", this.props.location.pathname);

        return (

            <Route render={(props) =>
                authenticateUSer !== null ?  (
                authenticateUSer.id.length === 24 && authenticateUSer.authenticated === true ? (
                    <div>

                        <Component {...props} />
                    </div>
                ) : (
                        <Redirect to={{
                            pathname: "/adPostloginform",
                            state: { from: props.location },
                            
                        }}
                        />
                    )
                ):
                (<div>
                      <div>
                    <ToastContainer history = {this.props.history} />
                </div>
                    <Redirect to={{
                        pathname: "/adPostloginform",
                        state: { from: props.location }
                    }}
                    
                    />
                  <div>
                {console.log("yes")}
                { this.error()}</div>
                </div>
                )
            }
            />










        );
    }
}
export default PrivateRoute;
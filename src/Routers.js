import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Jumbotron, FormGroup, Navbar, NavbarCollapse, NavbarHeader, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './Router.css';

import PrivateRoute from './privateRoute.js';

import Home from './Home.js';

import LoginForm from './logIn.js'
import Trigger from './sendMessagePopup.js';


import Navbarr from './navbar.js';
import ShowAdd from './ShowCategory.js'

import SingleAdd from './singleAddDetail.js'
import DashBoard from './dashBoard.js'




import OlxRegisterForm from './olxregister.js'
import Postad from './Postad.js';
import AddLoginForm from './adpostLogin.js';
class Routerrs extends Component {
    render() {
        return (
            
            <div>



                <Switch>
                    

                    <Route exact path='/' component={Home} />

                    <Route  path='/registerform' component={OlxRegisterForm} />
                    <Route  path='/adPostloginform' component={AddLoginForm} />
                    <PrivateRoute  path='/addPost' component={Postad} />
                    {/* <Route oath = '/addpost' component = {Postad}/> */}
                    <PrivateRoute  path='/dashBoard' component={DashBoard} />
                    <Route  path='/categories/:category' component={ShowAdd} />
                    <Route  path='/selectCategory/:category/:id' component={SingleAdd} />
                    {/* <Route path = '/dashBoard' component = {DashBoard}/> */}
                                   
                   
                    <Route  path='/loginform' component={LoginForm} />
                    <Route path = '/popup' component={Trigger}/>
                    
                    
                    <Route  path='/navbar' component={Navbarr} />
                    
                   
                    
                    
                    
                
                </Switch>
            </div>
            


        );
    }
}
export default Routerrs;
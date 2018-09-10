
import React, { Component } from 'react';

import './olxregister.css';

import registerPic from './images/register.jpg';
// import RenderMap from './googleMap.js';


import Navbarr from './navbar.js';



import axios from 'axios';
var errs = '';


class OlxRegisterForm extends Component {
    constructor(props) {
        super(props);
        // this.checkAge = this.checkAge.bind(this);

        this.submitForm = this.submitForm.bind(this);
        this.confirmEmail = this.confirmEmail.bind(this);
        this.state = {
            err: ''
        }
        // this.checkAge = this.checkAge.bind(this);
    }
    // check for age limit 
   
        // Check for weight
       
    confirmEmail() {
        let inputEmailField = document.getElementById('donor-email').value;
        let emailrecord = {
            inputEmailField
        }
        axios.post('/user/checkEmail', emailrecord)
            .then(function (response) {

                if (response.data === "email is already in use") {
                    errs = response.data;
                    let btns = document.getElementById('btn1');
                    btns.disabled = true;
                } else {
                    let btns = document.getElementById('btn1');
                    btns.disabled = false;
                }
                let emailCheck = document.getElementById("checkEmail");
                emailCheck.innerHTML = response.data;
                // emailCheck.style.fontSize = "30px";
                emailCheck.style.fontWeight = "bold";
                emailCheck.style.textAlign = "center"
                // emailCheck.style.backgroundColor = "Pink"


            }).catch(function (err) {
                console.log(err);
            })
    }






    



    submitForm(e) {
        e.preventDefault();


        let sellerName = e.target.elements.sellerName.value.trim();
       
        let sellerEmail = e.target.elements.sellerEmail.value.trim();
        let sellerPassword = e.target.elements.sellerPassword.value.trim();
       
        // let alertMessage = document.getElementById("messageWeightField").value;
        

        e.target.reset();
       

        if (!sellerName  || !sellerEmail || !sellerPassword ) {
            alert(" Please Enter Data Correctly");
        } else {
            let record = {
                sellerName,
                
               
                sellerEmail,
                sellerPassword,
                
            }
            console.log(record);

            axios.post('/user/registerForm', record)
                .then((response) => {
                    debugger;
                    // console.log(response.data);

                    //   alert("you have sucessfully registered ");
                    if (response) {
                        let success = document.getElementById("success");
                        success.innerHTML = " You have successFully Registerd! ";
                        success.style.fontSize = "30px";
                        success.style.fontWeight = "bold";
                        success.style.textAlign = "center"
                        success.style.backgroundColor = "Pink"
                        setTimeout( () => {

                            this.props.history.push('/loginform');


                        }, 3000);
                    }
                    // this.props.history.push('/bloodtips');




                }).catch(function (err) {
                    console.log(err);
                })

        }
    }





    render() {
        const isvalid = this.state.err;

        return (

            <div >
                <Navbarr />
                    <div className = "registerBody">yes this his focus</div>
                <div className="container-fluid registerBodystyle">

                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-12 ">
                            <img src={registerPic} alt="registerPic" />
                        </div>
                        {/* <div className="col-lg-1 col-md-3 col-sm-12">

                        </div> */}

                        <div className="col-lg-6 col-md-7 col-sm-12 formRegister">



                            <form onSubmit={this.submitForm} method="POST">
                            <div className = "container-fluid">
                                <div className="formHeading ">

                                    <h3>Register As A Seller</h3>


                                </div>
                                <div id="alertMessage" className="text-danger  "></div>
                                <div id="alertWeightMes" className="text-danger  "></div>

                                 <div className="row rowStyle">
                                     <div className="col-lg-12 col-md-12 col-sm-6 formBody">
                                        <label htmlFor="inputName" className="labelValues">Name:</label>
                                        <input id="donor-name" type="text" name="sellerName" defaultValue="iffi" className="form-control inputStyle inputName" placeholder="Your Name" required />
                                     </div>
                                    
                                 </div>
                                
                                <div className="row rowStyle">
                                    <div className="col-lg-12 col-md-12 col-sm-6 formBody">
                                        <label htmlFor="inputEmail" className="labelValues">Email:</label>
                                        <input id="donor-email" type="email" name="sellerEmail" onBlur={(e) => this.confirmEmail()} defaultValue="iffi@gmail.com" className="form-control inputStyle" placeholder="Your Email" required />
                                        <span id="checkEmail" className="text-danger font-weight-bold"></span>
                                    </div>
                                    </div>
                                    <div className="row rowStyle">
                                    <div className="col-lg-12 col-md-12 col-sm-6 formBody">
                                        <label htmlFor="inputPassword" className="labelValues">Password:</label>
                                        <input id="donor-password" type="password" name="sellerPassword" defaultValue="34567" className="form-control inputStyle" placeholder="must be between 4 to 8 char" required minLength="4" maxLength="8" />
                                    </div>
</div>
                                
                               
                                

                                
                               
                              

                                <button id="btn1" type="submit" className="btn btn-danger submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>Submit Form</button>
                                {/* <button className = 'btn-danger' type="submit">Submit</button> */}
                             </div>
                            </form>
                            <div id="success" className="text-success"></div>
                        </div>
                    </div>

                </div><br />
            </div>
            // </div>


        )
    }
}
export default OlxRegisterForm;
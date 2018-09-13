
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { Button, FormGroup, Navbar, NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';
import ViewMessage from './viewMessagePopup.js';


import './dashBoard.css';


import { ToastContainer, toast } from 'react-toastify';





import axios from 'axios';
// export const history = createHashHistory()


class SellerAds extends Component {

    constructor(props) {
        super(props);




        this.state = {
            idPic: "",
            displayAds: "",
            showComponentMessage: false,

        }

    }


    //Toastyfy Notification 

    dellSuccess = () => {
        toast.success("Ad Deleted Successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000
        });

    }
    dellError = () => {
        toast.error('No Ad Found to Delete', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }
    // delete The specific Ad
    dellAd = (obj) => {
        console.log(obj);
        let dellId = {
            obj,
        }

        axios.post('/user/dellAd', dellId).then((response) => {

            if (response.data) {

                
               
            
                var newList= this.state. displayAds.filter(function (ad) {
                    return ad._id != obj
                })

                this.setState({displayAds:newList})
                 this.dellSuccess();
            }
        }).catch(function (err) {
            console.log(err);
        })

    }
    // see the Specific Message 
    seeMessage(display, id) {
        
        // debugger;
        this.setState({

            idPic: id,
            showComponentMessage: display,

        })
        
        
        

    }

    componentDidMount = () => {
        const forEmail = JSON.parse(localStorage.getItem('authenticatedUser') || '{}')
        let email = forEmail.email;
        let sellerEmail = {
            email
        }
        console.log(sellerEmail);
        axios.get('/user/sellerAds?sellerEmail='+ email).then((response) => {
            // console.log(response.data);


            if (response.data) {


                console.log("server data", response.data);

                this.setState({ displayAds: response.data });
                console.log(this.state);

            }
        }).catch(function (err) {
            console.log(err);
        })

    }

    render() {
        const sellerAds = this.state
        return (
            <div className="container">
                <div>
                    <ToastContainer />
                </div>

                <div className="row">
                    {sellerAds.displayAds.length === 0 ?
                        <div className="container" style={{ backgroundColor: "royalBlue" }}>
                            <div className="row">
                                <h1>You have not posted any Ad Yet Post your Ads and become the Part of The Largets Site</h1>
                            </div>
                        </div>
                        : sellerAds.displayAds.map((obj, i) => {
                            return (
                                <div className="col-md-4" key={i}>
                                    <div className="card" style={{ width: "35rem", height: "50rem" }}>
                                        <div className="card-title"><h3>{obj.adTitle}</h3></div>
                                        <p className="card-text" >This Add Posted at {obj.createdAt}</p>
                                        <div >  <img className="card-img-top" src={obj.itemPic} alt="Card image cap" style={{ width: "250px", height: "200px", maxWidth: "100%", }} /></div>
                                        <div className="card-body"><br />
                                            <p > <label>Category:</label> <label style={{ color: "Blue", fontSize: "20px" }}>{obj.catogary}</label></p>


                                        </div>
                                        <div className="card-body">
                                            {/* <i className="fa fa-heart faStyle" ></i> */}

                                            <button className="btn btn-success" onClick={() => this.seeMessage(true, obj._id)} style={{ width: "100%" }}><i className="fa fa-eye " ></i> View the Message</button>
                                        </div>
                                        <div className="card-body">
                                            {/* <i className="fa fa-heart faStyle" ></i> */}

                                            <button className="btn btn-danger" onClick={() => this.dellAd(obj._id)} style={{ width: "100%" }}><i className="fa fa-trash" ></i> Delete this Post</button>

                                        </div>
                                    </div>

                                </div>

                            )


                        }
                        )}

                    {this.state.showComponentMessage  ?
                        <ViewMessage  adId = {this.state.idPic} seeMess = {this.seeMessage.bind(this)} /> :
                        null
                    }

                </div>

            </div>





        );
    }
}
export default withRouter(SellerAds);
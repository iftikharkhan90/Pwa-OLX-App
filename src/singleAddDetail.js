import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar, NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';
import Property from './images/house.png'
import Navbarr from './navbar.js';
import Trigger from './sendMessagePopup.js'

import './singleAddDetail.css';

import logo from './images/olx.png';




import axios from 'axios';
// export const history = createHashHistory()


class SingleAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DetailAdd: {

            },

            showComponent: false,


        }

    }



    componentDidMount = () => {
        var SingleAdds = JSON.parse(localStorage.getItem('addInfo') || '{}');


        this.setState({ DetailAdd: SingleAdds });

    }
    sendMessage = (id) => {
        console.log(id);
        this.setState({
            showComponent: true,
        })
        alert(this.state.showComponent);

    }






    render() {

        return (
            <div><Navbarr />

                <div className="container" style={{ border: "1px solid #E8E8E8", marginBottom: "10px" }}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="title"><h3>{this.state.DetailAdd.adTitle}</h3></div>
                            <div className="city"><p><i className="fa fa-map-pin"></i> {this.state.DetailAdd.city}  <span style={{ color: "#6c757d!important", marginLeft: "3px", marginRight: "3px" }}><b>|</b></span> AD ID: {this.state.DetailAdd._id} </p></div>

                            <hr style={{ border: "1px solid #E8E8E8 " }} />
                            <img src={this.state.DetailAdd.itemPic} alt="Ad detail" style={{ width: "100%", height: "500px" }} />
                            <hr style={{ border: "1px solid #E8E8E8 " }} />
                            <div className="row">
                                <div className="container">
                                    <h4>Condition:{this.state.DetailAdd.itemCondition}</h4>
                                    <h3 style={{ fontSize: "20px", letterSpacing: "0px" }}>{this.state.DetailAdd.itemDetails}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 left-triangle">
                        </div>
                        <div className="col-md-3" >
                            <div className="single-listing-item-price" style={{ marginTop: "20px" }}><span className="item-price">RS. {this.state.DetailAdd.price}</span></div>
                            <div className="information Center" style={{ backgroundColor: "#F1F5FC", marginTop: "10px" }}><span className="textChange ">Seller Information</span>
                                <div className="container" style={{ marginTop: "10px" }}  >

                                    <p style={{ color: "#6c757d" }}>Name: {this.state.DetailAdd.user}</p>
                                    <p style={{ color: "#6c757d" }}>Phone: {this.state.DetailAdd.sellerPhone}</p>
                                    <p style={{ color: "#6c757d" }}>Email: {this.state.DetailAdd.sellerEmail}</p>

                                </div>
                            </div>

                            <div className="row" style={{ marginTop: "10px", width: "100%", marginLeft: "3px" }}>
                                <div className="information Center" style={{ backgroundColor: "#F1F5FC" }}><span className="textChange ">Safety Tips Of Buyer</span>
                                    <div className="container" style={{ marginTop: "10px" }}  >

                                        <p >1. Meet seller at a safe location
</p>
                                        <p >2.  Check the item before you buy
</p>
                                        <p >3. Pay only after collecting item
</p>


                                    </div>

                                </div>
                                <hr style={{ border: "1px solid #E8E8E8 " }} />
                                <button className="btn btn-primary" onClick={() => this.sendMessage()}><i className="fa fa fa-send-o" ></i> Send Message to Seller</button>
                                
                                {this.state.showComponent ?
                                    <Trigger adId={this.state.DetailAdd._id} /> :
                                    null
                                }
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        );
    }
}
export default withRouter(SingleAdd);
// 
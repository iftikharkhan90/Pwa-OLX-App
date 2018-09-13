import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar, NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';
import Navbarr from './navbar.js';
import Property from './images/house.png'

import './ShowCategory.css';
import { ToastContainer, toast } from 'react-toastify';

import logo from './images/olx.png';




import axios from 'axios';
// export const history = createHashHistory()


class FavouriteAds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FvtAds: [],


        }

    }
    success = () => {
        toast.success("This Post Has been deleted from yourFavourite List", {
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


    // delete Favourite Ads


    deleteFvt = (postid) => {

        const fvtDelete = {
            postid
        };

        axios.post('/user/delFvt', fvtDelete).then((response) => {
            console.log(response.data);
            if (response.data ) {
                this.success();
                var newList = this.state.FvtAds.filter(function (ad) {
                    return ad._id != postid
                })
                this.setState({ FvtAds: newList })

            }


        }).catch(function (err) {
            console.log(err);
        })

    }



    componentDidMount() {
        const email = (JSON.parse(localStorage.authenticatedUser)).email;
        const fvtUserEmail = {
            email
        }
        axios.post('/user/getFvtAd', fvtUserEmail).then((response) => {
            console.log(response.data);


            if (response.data) {
                console.log("get fvrt data",response.data);

                this.setState({ FvtAds: response.data });



            }


        }).catch(function (err) {
            console.log(err);
        })
    }
    // color change 



    // Save Add





    render() {
        return (


            <div className="container">

                <div>
                    <ToastContainer />
                </div>
                <div className="row">
                    {this.state.FvtAds.length === 0 ? <div className="noAds">
                        <h3>You did not like any post yet!</h3>
                    </div> : this.state.FvtAds.map((obj, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <div className="card" style={{ width: "35rem", height: "50rem" }}>
                                    <div className="card-title"><h3>{obj.postID.adTitle}</h3></div>
                                    <p className="card-text" >You Liked this Post At {obj.createdAt}</p>
                                    <div > <img className="card-img-top" src={obj.postID.itemPic} alt="Card image cap" style={{ width: "250px", height: "250px", maxWidth: "100%", }} /></div>
                                    <div className="card-body"><br />
                                        <p > <label>Category:</label> <label style={{ color: "Blue", fontSize: "20px" }}>{obj.postID.catogary}</label></p>
                                        <h3><i className="fa fa-trash" id="fvt" onClick={() => { this.deleteFvt(obj._id) }}></i></h3>

                                    </div>

                                </div>

                            </div>

                        )


                    })}



                </div>

            </div>

        );
    }
}
export default withRouter(FavouriteAds);
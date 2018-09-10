
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar, NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';
import NavbarrLogin from './NavbarLogin.js';

import './dashBoard.css';
import SellerAds from './buyerAds.js';
import logo from './images/olx.png';
import FavouriteAds from './favouritePosts.js'





import axios from 'axios';
// export const history = createHashHistory()


class DashBoard extends Component {

    constructor(props) {
        super(props);
        

    }
    



    render() {


		
        return (
            <div className="">
                <NavbarrLogin />
                

                    <section id="tabs">
	<div className="container">
		
		<div className="row">
			<div className="col-md-12 ">
				<nav >
					<div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
					<div className = "col-md-4"> 	<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Ads Details</a></div>
						<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Favourite Ads</a>
						
					</div>
				</nav>

                    </div>
		</div>
	</div>
</section>           




				<div className="tab-content " id="nav-tabContent">
					<div className="tab-pane fade show " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
                    <SellerAds/>
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" style = {{marginTop : "0px"}}>
						<FavouriteAds/>
					</div>
					
				</div>
			
			
                            
               
            </div>






        );
    }
}
export default withRouter(DashBoard);
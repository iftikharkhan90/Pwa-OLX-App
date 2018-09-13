import React, { Component } from 'react';
import './Footer.css';
import footerLogo from './images/olx.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-body">
                <div className="container">
                    <div className="row ">
                        <div className="colo-md-2 col-sm-3">
                            <img className="footerLogo" src={footerLogo} alt="footerlogo" />
                        </div>
                    </div>
                    
                    </div>
                    <div className = "container">
                    <div className="row">
                        <div className="colo-md-12 ">
                            <hr ></hr>
                        </div>
                       </div> 
                       <div className = "row">
                       
                       </div>
                </div>


            </div>
        );
    }
}
export default Footer;
import React, { Component } from 'react';
import sliderPic from './images/slider1.jpg';
import {  BrowserRouter as Router, Link } from 'react-router-dom';
import './Slider.css';
// import RightArrow from './RightArrow';
// import LeftArrow from './LeftArrow';

class Slider extends Component {






    render() {

        return (
            <div className="background ">
                <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
                    
                        {/* <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>

                        </ol> */}
                        <div className = "container-fluid">
                         <div className = "row">
                         
                         <div className = "col-lg-12 col-sm-12 text-centre">
                         
                        <div className="carousel-inner" role="libox">
                       
                            <div className="item active">
                                <span >Search Blood, Save life !</span><br />
                                <h3 >you can search blood for every one here</h3>
                                {/* <a   data-target="#myCarousel" href="#" className="btn btn-slider active">Search Blood</a> */}
                                <ul>
                                <li>
              <a className="btn btn-default btn-outline btn-design btn-slider"  data-toggle="collapse" href="#nav-collapseSearch" aria-expanded="false" aria-controls="nav-collapseSearch"> Blood Search</a>
            </li>
          </ul>
          
                            </div>
                            <div className="item">
                                <span className = "text-align-centre">Donate Blood, Save life !</span>
                                <h3 className = "text-align-centre">
                                    Donating blood not only saves the life also save donor's lives.</h3>
                                    <Link to = '/registerform'   data-target="#myCarousel" href="#" className="btn btn-outline btn-slider active">Register Yourself</Link>
                            </div>

                        </div>

                    

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a><br/>
                    
                    
                    
                    </div>
                    
                    </div>
                   </div> 
                </div>

            </div>


        )
    }
}


export default Slider;
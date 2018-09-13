import React, { Component } from 'react';
import Navbarr from './navbar.js';

import animal from './images/cat.png'
import Toys from './images/doll.png'
import Clothes from './images/fashion.png'
import Property from './images/house.png'
import Vehicles from './images/vechile.jpg'
import Bikes from './images/motorbike.png'
import Laptops from './images/laptop.png'
import Mobiles from './images/smartphone.png'
import Books from './images/text-books.png'
import axios from "axios";
import Footer from './Footer.js';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Home.css';
class Home extends Component {



  constructor(props) {
    super(props);

    this.saveAdd = this.saveAdd.bind(this);
    this.state = {
      data: [],


    }
  }


  componentDidMount = () => {
    axios.get('/user/panel', "202").then((response) => {

      console.log(response.data);

      if (response.data) {
        this.setState({ data: response.data });
        // console.log(this.setState(response.data[0]))
        // console.log(this.state[0].message);



        // localStorage.setItem("appData",   JSON.stringify({user:response.data}));
        // JSON.stringify({user:response});
        // this.props.history.push('/');

      }

    }).catch((err) => {
      console.log(err);
      alert(err);
      // alert("err");

    })

  }
  saveAdd = (obj) => {
    console.log(obj);

    localStorage.setItem("addInfo", JSON.stringify(obj));
  }


  render() {

    return (
      <div>
        {console.log(this.props.match)}
        <Navbarr />

        <div className="container">
          <div className="row">
            <div className="col-lg-12">



              {/* <select className="selectopt" id='category' required>
                <option value="Mobile" className="defval" defaultValue>Select the Category</option>
                <option value="Mobile">Mobiles</option>
                <option value="Laptops">Laptops</option>
                <option value="Accesories">Toys</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Clothes">Clothes</option>
                <option value="Laptops">Properties</option>
                <option value="Accesories">Books</option>
                <option value="Vehicles">Animals</option>
                <option value="Clothes">Bikes</option>



              </select> */}





            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Link to={`/categories/Properties`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Property} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Properties</h1>


                </div>
              </div>
            </div>
            </Link>
            <Link to={`/categories/Books`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Books} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Books</h1>


                </div>
              </div>
            </div>
            </Link>
            <Link to={`/categories/Toys`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Toys} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Toys</h1>


                </div>
              </div>
            </div>
            </Link>
          </div>


          {/* sencond row */}



          <div className="row">
            <Link to={`/categories/Animals`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={animal} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Animals</h1>


                </div>
              </div>
            </div>
            </Link>
            <Link to={`/categories/Mobiles`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Mobiles} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Mobiles</h1>


                </div>
              </div>
            </div>
            </Link>
            <Link to={`/categories/Vehicles`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Vehicles} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Vehicles</h1>


                </div>
              </div>
            </div>
            </Link>
          </div>


          {/* 3rd row */}



          <div className="row">
            <Link to={`/categories/Bikes`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Bikes} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Bikes</h1>


                </div>
              </div>
            </div>
            </Link>
            <Link to={`/categories/Laptops`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Laptops} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Laptops</h1>


                </div>
              </div>
            </div>
            </Link>
            <Link to={`/categories/Clothes`} className="linkstyle"><div className="col-md-4">
              <div className="card" style={{ width: "30rem", height: "30rem" }}>
                <img className="card-img-top" src={Clothes} alt="Card image cap" style={{ width: "200px", height: "200px" }} />
                <div className="card-body">
                  <h1 className="card-title">Clothes</h1>


                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>

        {/* All the Ads Details      */}

        <div className="container homeBody">
          <div className="row">
            <h1 style={{ color: 'green', textAlign: 'center' }}>  All Display Adds</h1>
            <h4 style={{ color: 'green', textAlign: 'center' }}>We Found {this.state.data.length} ITEMS </h4>
            <div className="row">
              {this.state.data.length === 0 ? "No Adds" : this.state.data.map((obj, i) => {
                return (
                  <div  className="" id="divBorder" key={i}>
                  <div className = "col-lg-12">
                       <Link to={`/selectCategory/${obj.catogary}/${obj._id}`} ><div onClick={() => this.saveAdd(obj)}>
                    <div className="col-md-3">
                      <img src={obj.itemPic} className="pic" alt="add pic" />
                    </div>
                    <div className="col-lg-9">
                      <h3 style={{ color: 'red', }}>{obj.adTitle}
                      </h3><br />
                      <span><h3>Category:  {obj.catogary}</h3></span><br />
                      <span><h3 style={{ color: 'orange' }}>RS: {obj.price}</h3></span>
                  
                    </div></div></Link>
                    </div>
                    <hr/>
                  </div>
                )


              })}

            </div>
          </div>






        </div>





      </div>
    )
  }
}
export default Home;






{/* <div className="selectOption" tabIndex="1">
  <input className="selectopt" name="test" type="radio" id="opt1" />
  <label htmlFor="opt1" className="option">Mobiles</label>
  <input className="selectopt" name="test" type="radio" id="opt2"/>
  <label htmlFor="opt2" className="option">Laptops</label>
  <input className="selectopt" name="test" type="radio" id="opt3"/>
  <label htmlFor="opt3" className="option">Toys</label>
  <input className="selectopt" name="test" type="radio" id="opt4"/>
  <label htmlFor="opt4" className="option">Clothes</label>
  <input className="selectopt" name="test" type="radio" id="opt5"/>
  <label htmlFor="opt5" className="option"></label>
</div>
   */}
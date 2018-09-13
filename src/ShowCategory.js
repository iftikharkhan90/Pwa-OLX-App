import React, { Component } from 'react';
import {  BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar,  NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';
import Navbarr from './navbar.js';
import Property from './images/house.png'

import './ShowCategory.css';

import logo from './images/olx.png';
import { ToastContainer, toast } from 'react-toastify';




import axios from 'axios';
// export const history = createHashHistory()


class ShowAdd extends Component {

constructor(props){
  super(props);
  this.state = {
    Adds:[],
    fvt: false,
    
    
}


  

}


success = () => {
  toast.success("This post has Been Added in your Favourite list", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
  });

}
error = () => {
  toast.error('You have Deleted this Post from your favourite List on double click', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
  });

}

componentDidMount(){
console.log(this.props.match.params.category)
    let category = this.props.match.params.category
    console.log("iftikhar",category);
    axios.get('/user/getUserData?category='+ category ) .then((response) => {
        console.log(response.data);
      
        
        if (response.data) {
        //   localStorage.setItem("donorInfo",   JSON.stringify({user:response.data}));
        this.setState({Adds:response.data});
            console.log("iftikhar",response.data);
      
            
        }
      
      
      }).catch(function (err) {
        console.log(err);
      })
}
// color change 

addFvt =(postid)=>{
   const fvtEmail =  (JSON.parse(localStorage.authenticatedUser)).email;
    const fvtSave = {
        postid,fvtEmail
    };
    
    axios.post('/user/addfvt', fvtSave ) .then((response) => {
        console.log(response.data);
      if(response.data ==="Added"){
        
        this.success();
          
      }else{
        this.error();
      }

       
      
      }).catch(function (err) {
        console.log(err);
      })
    
}

// Save Add

saveAdd = (obj)=> {
    console.log(obj);
     
      localStorage.setItem("addInfo",   JSON.stringify(obj));
  }


  
    render() {
        return (
            <div>
                <Navbarr/>
            <div className ="container">

            <div>
                        <ToastContainer />
                    </div>
            <div className = "row">
            { this.state.Adds.length ===0 ? "No Adds": this.state.Adds.map((obj,i)=>{
          return (
            <div className = "col-md-4" key = {i}>
            <div className="card" style={{width: "35rem", height:"50rem"}}>
            <div className = "card-title"><h3>{obj.adTitle}</h3></div>
            <p className = "card-text" >This Add Posted at {obj.createdAt}</p>
            <div onClick = {()=>this.saveAdd(obj)}><Link to = {`/selectCategory/${obj.catogary}/${obj._id}`}  className = "linkstyle"><img className="card-img-top" src={obj.itemPic} alt="Card image cap" style ={{width:"250px", height:"250px" , maxWidth:"100%", }}/></Link></div>
              <div className="card-body"><br/>
              <p > <label>Category:</label> <label style ={{color:"Blue", fontSize: "20px"}}>{obj.catogary}</label></p>
               
                
              </div>
              <div className = "card-body">
              {JSON.parse(localStorage.authenticatedUser) !== null?
              <i className="fa fa-heart faStyle "  id = "fvt"  onClick ={()=>{this.addFvt(obj._id)}}></i>
              :''}
              </div>
            </div>
            
            </div>
            
          )


      })}



</div>

            </div>
</div>
        );
    }
}
export default withRouter(ShowAdd);
import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { withRouter } from 'react-router';
import { Modal } from 'react-bootstrap';
import SingleAdd from './singleAddDetail.js';
import './sendMessagePopup.css';






class Trigger extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
    //   this.forgotEmail = this.forgotEmail.bind(this);
      this.SendMessage = this.SendMessage.bind(this);
      
      
      this.state = {
        show: false,
        checkemail:false,
        
      };
// for show Notification 



    }

    success = () => {
        toast.success("Ad Posted Successfully!", {
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
    
     componentDidMount(){
        
         this.setState({show:true});
         
     }
    handleHide() {
      this.setState({ show: false });
      
      
    }
    // email

    SendMessage = () =>{
        let buyerName = this.refs.name.value.trim();
        let buyerPhone = this.refs.phoneNo.value.trim();
        let buyerEmail = this.refs.mail.value.trim();
        let buyerMessage = this.refs.message.value.trim();
        let clickedPostId = this.props.adId;
        
        
        if (!buyerMessage || !buyerName || !buyerPhone || !buyerEmail) {
            alert(" Please fill the field");
          } else {
              let sendMessage = {
                buyerName,
                buyerPhone,
                buyerEmail,
                buyerMessage,
                clickedPostId

                
              }
              axios.post('/contactBuyer',sendMessage).then((response)=>{
                
                console.log(response);
                if(response.data = "password has been updated"){
                  debugger; 
                  this.success();
                  setTimeout(() => {
                    this.handleHide();
                  }, 3000);
                   

                } 
               
            }).catch((err)=>{
                console.log(err);
                this.error();
                
            })
              
          }

    }


    

    render() {
      return (
          <div>
         
        <div className="modal-container" style={{ height: 200 }}>
        <div>
                    <ToastContainer />
                </div>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Send Message
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id = "Mess"></div>
                <form>
                    
              
              
              <div>
              <label>Name:</label>
              <input className = "popupInput2" type = "text" ref = "name" />
              </div>
              
             
              <div>
              <label>Phone No:</label>
              <input className = "popupInput" type = "number" ref = "phoneNo" placeholder = "Enter your Pnone No" required maxLength = "11"/></div>
              <div>
              <label>Email:</label>
              <input className = "popupInput" type = "email" ref = "mail" placeholder = "Enter your email"/></div>
              <div>
              <label>Message:</label>
              <input className = "popupInput" type = "text" ref = "message" placeholder = "Enter your Message"/></div>
              
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
              
                            <Button onClick = {this.SendMessage}>Send Message</Button>
              
            

            </Modal.Footer>
          </Modal>
        </div>
        </div>
      );
    }
  }

  export default withRouter(Trigger);
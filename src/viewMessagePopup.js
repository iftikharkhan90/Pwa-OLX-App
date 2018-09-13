import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { withRouter } from 'react-router';
import { Modal } from 'react-bootstrap';
import SingleAdd from './singleAddDetail.js';
import './sendMessagePopup.css';






class ViewMessage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    //   this.forgotEmail = this.forgotEmail.bind(this);



    this.state = {
      show: false,

      displayMessage: ""

    };
    // for show Notification 



  }

  success = () => {
    toast.success("Message has been sent to Seller!", {
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

  componentDidMount() {
    

    var that = this;
    const picid = this.props.adId;
    let messageRecord = {
      picid
    }
    axios.post('/user/showMessage', messageRecord).then((response) => {
      // console.log(response.data);


      if (response.data) {


        that.setState({ displayMessage: response.data });
        this.setState({state:this.state});
        // this.forceUpdate();
        


      }
    }).catch(function (err) {
      console.log(err);
    })

    this.setState({ show: true });


  }

  // email

  handleHide() {
    // this.setState({ show: false });
    this.props.seeMess(false);
  }

  render() {
 
    return (
      <div>

        <div className="modal-container" style={{ height: 200, width: "50%" }}>
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
                Buyer Message For This Ad
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="Mess" >
                {this.state.displayMessage[0] ?
                <div>
                <div className = "message"><h4 style = {{marginLeft:"10px"}}>{ this.state.displayMessage[0].buyerMessage}</h4></div>
                <hr/>
                <div className = "buyerInformatio"><p style = {{textAlign:"center", color:"green"}}>Buyer Information</p></div>
                <div className = "buyerName"><h4>Name: {this.state.displayMessage[0].buyerName}</h4></div>
                <div className = "buyerName"><h4>Phone No: {this.state.displayMessage[0].buyerPhone}</h4></div>
                <div className = "buyerName"><h4>Email: {this.state.displayMessage[0].buyerEmail}</h4></div>
                
                </div>
                : <div className = "noAvailable">
                <h3>Yet No body send you any Message</h3>
                </div>}
              </div>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>



              {/* <Button onClick = {this.forgotEmail}>Verify</Button> */}

            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewMessage);
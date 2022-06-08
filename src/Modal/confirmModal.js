// import PersonalInfo from "../Checkout/personalInfo";
// import { CarComponent } from "../Checkout/Car/carComponent";
import React, { Component } from "react";

export class ConfirmModal extends Component {
  somefunction(){
    return (null)
  }
  render(){
    return (
              <>
              {this.somefunction()}


<div className="modal fade" data-bs-keyboard="false" data-bs-backdrop="static"id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Confirmation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Please Confirm by Proceeding
        <br/>
        Name: {this.props.firstName} {" "} {this.props.lastName}
        <br/>
        Email: {this.props.email}
        <br/>
        Phone Number: {this.props.phoneNumber}
        <br/>
        Car Information
        <hr/>
        Year: {this.props.year1}
        <br/>
        Make:{this.props.make1}
        <br/>
        Model:{this.props.model1}
        {/* {console.log(CarComponent).state} */}
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" data-bs-keyboard="false" data-bs-backdrop="static" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="exampleModalToggleLabel2">You Are Booked!</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <p>
          
          <b>
        Your Booking has been confirmed.
        Check your email for details</b>
        </p>
        <i style={{fontSize:116}} className="bi bi-qr-code-scan"></i>
        <h4 className="mt-0">Booking ID: <i>{Date.now()}</i></h4>
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Go Back</button>
        <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
      </div>
    </div>
  </div>
</div>
 <a data-bs-dismiss="offcanvas" className="w-100 btn btn-primary btn-lg" data-bs-toggle="modal" href="#exampleModalToggle" type="submit" role="button">Confirm</a> 

</>
);
    }
};

    export default ConfirmModal;
import PersonalInfo from "../Checkout/personalInfo";

function ConfirmModal () {
    return (
              <>
              {/* className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" type="submit" role="button">Open first modal */}
<button data-bs-dismiss="offcanvas"type="submit" data-bs-toggle="modal" data-bs-backdrop="false" data-bs-target="#exampleModalToggle" className=" btn-lg">Confirm
</button>


<div className="modal fade" data-bs-keyboard="false" data-bs-backdrop="static"id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Confirmation</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Please Confirm by Proceeding
        <br/>
        Name: {PersonalInfo}
        {console.log(PersonalInfo)}
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" data-bs-keyboard="false" data-bs-backdrop="static" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title" id="exampleModalToggleLabel2">You Are Booked!</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <p><b>
        Your Booking has been confirmed.
        Check your email for details</b>
        </p>
        <i style={{fontSize:116}} className="bi bi-qr-code-scan"></i>
        <h4 className="mt-0">Booking ID: <i>{Date.now()}</i></h4>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Go Back</button>
        <button className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
      </div>
    </div>
  </div>
</div>
 <a data-bs-dismiss="offcanvas" className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" type="submit" role="button">Open first modal</a> 

</>
);
};

    export default ConfirmModal;
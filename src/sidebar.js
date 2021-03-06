import {default as Checkout} from "./Checkout/checkout"
//import {default as ConfirmModal} from './Modal/confirmModal';
function Sidebar () {
    return (
      <>

<div className="offcanvas offcanvas-end off-canvas-md" data-bs-backdrop="false" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <nav id="navbar-2" className="navbar navbar-light bg-light m-0 ms-2">
  <h1 className="navbar-brand m-0" id="offcanvasLabel">My Carts</h1>
  <ul className="nav nav-pills">

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Service</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#yourCart">Your Cart</a></li>
        <li><a className="dropdown-item" href="#carInfo">Car Info</a></li>
      </ul>
    </li>

        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Book</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Date" aria-expanded="true" aria-controls="select-Date" href="#selectDate">Select Date</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Staff" aria-expanded="true" aria-controls="select-Staff"href="#selectStaff">Select Staff</a></li>
        <li><a className="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Time" aria-expanded="true" aria-controls="select-Time"href="#selectTime">Select Time</a></li>
      </ul>
    </li>


        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Confirm</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#personalInfo">Personal Info</a></li>
        <li><a className="dropdown-item" href="#terms">Terms</a></li>
      </ul>
    </li>


  </ul>
  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</nav>
  <div className="offcanvas-body">
    <Checkout/>
  </div>
</div>

</>
);
};

    export default Sidebar;

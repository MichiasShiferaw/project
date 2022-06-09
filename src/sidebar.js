import {default as Checkout} from "./Checkout/checkout"
import {default as ConfirmModal} from './Modal/confirmModal';
function Sidebar () {
    return (
      <>

<div className="offcanvas offcanvas-end off-canvas-md" data-bs-backdrop="false" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <nav id="navbar-example2" class="navbar navbar-light bg-light mx-0">
  <h1 className="navbar-brand m-0" id="offcanvasExampleLabel">My Carts</h1>
  <ul class="nav nav-pills">

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Service</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#yourCart">Your Cart</a></li>
        <li><a class="dropdown-item" href="#carInfo">Car Info</a></li>
      </ul>
    </li>

        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Book</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Date" aria-expanded="true" aria-controls="select-Date" href="#selectDate">Select Date</a></li>
        <li><a class="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Staff" aria-expanded="true" aria-controls="select-Staff"href="#selectStaff">Select Staff</a></li>
        <li><a class="dropdown-item" data-bs-toggle="collapse" data-bs-target="#select-Time" aria-expanded="true" aria-controls="select-Time"href="#selectTime">Select Time</a></li>
        <li><a class="dropdown-item" href="#IDK">IDK</a></li>
      </ul>
    </li>


        <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Confirm</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#personalInfo">Personal Info</a></li>
        <li><a class="dropdown-item" href="#terms">Terms</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>


  </ul>
  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</nav>
  <div className="offcanvas-body">
    <Checkout/>
    {/* <span><ConfirmModal/></span> */}
  </div>
</div>

</>
);
};

    export default Sidebar;

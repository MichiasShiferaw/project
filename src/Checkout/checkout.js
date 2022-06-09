import { CarComponent} from './Car/carComponent';
import {default as Booking} from '../Booking/booking'
import {default as ConfirmModal} from '../Modal/confirmModal';
import {default as Terms} from "./terms";
import PersonalInfo from './personalInfo';
export default function Checkout () {
    return (
      <>
      <div className="container" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabIndex="0">
            <div id="scrollspyHeading1" className="col-sm-12 col-lg-12 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6  className="my-0">Oil Change</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (CDN)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
      <hr/>


      <div id="scrollspyHeading2" className="col-sm-12 col-lg-12 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Car Info</span>
          <span className="badge bg-primary rounded-pill"><i className="bi bi-truck"></i></span>
        </h4>
        <CarComponent/>
      </div>
      <hr/>
      <div className="col-md-12 col-lg-12">
        <h4 id="Book"className="mb-3">Booking</h4>
                 
          <Booking/>

           <hr className="my-4"/>
        <h4 id="personalInfo"className="mb-3">Personal Info</h4>
        <form className="needs-validation">
          <PersonalInfo/>

          <hr className="my-4"/>

          <h4 id="terms" className="my-3">Terms And Conditions</h4>
          <Terms/>

          <hr className="my-4"/>
          
          {/* <ConfirmModal/>
          <span type="submit">Continue to checkout</span>
          </ConfirmModal> */}
           {/* <button data-bs-target="#staticBackdrop" data-bs-dismiss="offcanvas" data-bs-toggle="#staticBackdrop" className="w-100 btn btn-primary btn-lg" type="button"><ConfirmModal/></button>  */}

{/* 
           <button type="button" data-bs-dismiss="offcanvas">
              <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" title="Tooltip">
                Hover Me           
              </a>
          </button> */}
           {/* <button type="button" data-bs-dismiss="offcanvas" className=" btn-lg">Confirm123 */}
           {/* <button onClick={<ConfirmModal/>} class="btn btn-primary" data-bs-backdrop="false" data-bs-toggle="modal" data-bs-target="#exampleModalToggle"
            type="submit"
           >
             Submit form</button>

                        <button class="btn btn-primary"
           >
             Submit form1</button> */}

            <ConfirmModal/> 
{/* </button>  */}


        </form>

      </div>
    </div>
</>
);
};


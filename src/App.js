// import logo from './logo.svg';
import './App.css';
// import {default as ConfirmModal} from './Modal/confirmModal';
//import {default as Booking} from "./Booking/booking"
import {default as ServiceAccordian} from './Services/ServiceAccordian';
import {default as ServiceCard} from './Services/ServiceCard';
import {default as Footer} from './Footer/footer';
import {default as Sidebar} from './sidebar';
import {default as Banner} from './Intro/index';
import {default as Promo} from './Intro/promo';
import {default as Prices} from './Pricing/prices';
import {default as ContactInfo} from './Footer/contactInfo';
import {default as Team} from './Footer/team';
import {default as NavBar } from './Intro/Navbar/navbar'
// import {default as CarComponent} from './Checkout/Car/carComponent';
function App() {
  return (
    <div className="App">
      <NavBar/>
<Banner/>
<Promo/>
<ServiceCard/>

<Sidebar/>
<Prices/>

{/* <ConfirmModal/> */}
            <div>
                <ServiceAccordian/>
            </div>

      
      {/* <Booking/> */}
      <Team/>
      <ContactInfo/>
      {/* <CarComponent/> */}
      <Footer/>

    </div>
    
  );
}

export default App;



import './App.css';

import {default as ServiceCard} from './Services/ServiceCard';
import {default as Footer} from './Footer/footer';
import {default as Sidebar} from './sidebar';
import {default as Banner} from './Intro/index';
import {default as Promo} from './Intro/promo';
import {default as Prices} from './Pricing/prices';
import {default as Team} from './Footer/team';
import {default as NavBar } from './Intro/Navbar/navbar'
function App() {
  return (
    <div className="App">
      <NavBar/>
<Banner/>
<Promo/>
<ServiceCard/>

<Sidebar/>
<Prices/>


      <Team/>

      <Footer/>

    </div>
    
  );
}

export default App;


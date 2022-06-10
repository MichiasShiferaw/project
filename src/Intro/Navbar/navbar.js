export default function NavBar (){
    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#promos">Promos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services &amp; Prices
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#services">Service Description</a></li>
            <li><a className="dropdown-item" href="#prices">Prices</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Store
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#team">About the Team</a></li>
            <li><a className="dropdown-item" href="#footer">Hours</a></li>
            <li><a className="dropdown-item" href="#footer">ContactUs</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="bi bi-cart-fill"></i>Open Cart</button>
      </form>
    </div>
  </div>
</nav>
        

    )};


            {/* <!-- navbar links --> */}
        {/* <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#topics">About The Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#reviews">Reviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Get in Touch</a>
                </li>
                <li className="nav-item d-md-none">
                    <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Open Cart
</button>
        
            </ul>
        </div> */}






//             <nav className="navbar navbar-expand-md navbar-light sticky-top ">
//         <div className="container-fluid">
//             <a href="#intro"className="navbar-brand">
//                 <span className="fw text-secondary">
//                     <i className="bi bi-book-half"></i>
//                     Car Doctor
//                 </span>
//             </a>

//             {/* <!-- toggle button for mobile nav--> */}
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
//                 aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//         </div>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <div className="dropdown-divider"></div>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
        


//     </nav>
//     )};


//             {/* <!-- navbar links --> */}
//         {/* <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <a className="nav-link" href="#topics">About The Book</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#reviews">Reviews</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#contact">Get in Touch</a>
//                 </li>
//                 <li className="nav-item d-md-none">
//                     <a className="nav-link" href="#pricing">Pricing</a>
//                 </li>
//                 <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
//   Open Cart
// </button>
        
//             </ul>
//         </div> */}
export default function NavBar (){
    return(

// <!-- navbar-->
//     <!--fixed-bottom-->
    <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top ">
        <div className="container-fluid">
            <a href="#intro"className="navbar-brand">
                <span className="fw text-secondary">
                    <i className="bi bi-book-half"></i>
                    Car Doctor
                </span>
            </a>

            {/* <!-- toggle button for mobile nav--> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
        {/* <!-- navbar links --> */}
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
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
        </div>

    </nav>
    )};
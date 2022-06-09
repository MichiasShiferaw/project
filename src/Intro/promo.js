

export default function Promo() {
  return (
    <div className="container pt-4 bg-dark">
<div id="carouselExampleInterval" className="carousel slide carousel-fade justify-content-center align-items-center" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/assets/images/Guy.png" className="img-3" alt="1"/>
      <p><a className="btn btn-lg btn-primary" href="#/">Sign up on Your Phone Today</a></p>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="/assets/images/car.png" className="img-3" alt="2"/>
    </div>
    <div className="carousel-item">
        <p className="text-end"><a className="btn btn-lg btn-primary" href="#/">Learn More</a></p>
      <img src="/assets/images/Mechanic1.png" className="img-3" alt="3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
};
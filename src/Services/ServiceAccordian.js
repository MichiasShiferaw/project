
function ServiceAccordian () {
    return (
      <>
        <div className="container-md">
            <div className="text-center">
                <h2>Services Description...</h2>
                <p className="lead text-muted">A quick glance at the topics you'll learn</p>
            </div>
            <div className="row my-5 g-5 justify-content-around align-items-center">
                <div className="col-6 col-lg-6">
                    <img src="/assets/images/car.png" className="img-fluid" alt="ebook"/>
                </div>
                <div className="col-lg-6">
    
                    {/* <!-- accordion --> */}
                    <div className="accordion" id="chapters">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                                   Oil Change
                                </button>
                            </h2>
                            <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
                                    Air Filters
                                </button>
                            </h2>
                            <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-2"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">
                                    Engine Tune-Up
                                </button>
                            </h2>
                            <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-3"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
                                    Tire Purchase
                                </button>
                            </h2>
                            <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-4"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                                    Tire Installation
                                </button>
                            </h2>
                            <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-5"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-6" aria-expanded="false" aria-controls="chapter-6">
                                    Brakes
                                </button>
                            </h2>
                            <div id="chapter-6" className="accordion-collapse collapse" aria-labelledby="heading-6"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-7" aria-expanded="false" aria-controls="chapter-7">
                                    Battery Installation
                                </button>
                            </h2>
                            <div id="chapter-7" className="accordion-collapse collapse" aria-labelledby="heading-7"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                                                <div className="accordion-item">
                            <h2 className="accordion-header" id="heading-8">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#chapter-8" aria-expanded="false" aria-controls="chapter-8">
                                    Other
                                </button>
                            </h2>
                            <div id="chapter-8" className="accordion-collapse collapse" aria-labelledby="heading-8"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus
                                        sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi
                                        tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
</>
);
};

    export default ServiceAccordian;
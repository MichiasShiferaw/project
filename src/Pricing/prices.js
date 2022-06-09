export default function Prices (){
    return(
<div className="container-6 container-lg-8 mt-5">
    <div className="card border-primary">
        <div className="card-header text-center text-primary"><b>Services &amp; Prices</b></div>
        <div className="card-body text-center py-5">
            <h4 className="card-title">Complete Edition</h4>

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
                                    <table className="table">
                <thead className="table-success">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                        <table className="table">
                <thead className="table-info">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                       <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                        <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                        <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                        <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                        <table className="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
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
                                                        <table className="table">
                <thead className="table-success">
                    <tr>
                    <th scope="col">Item#</th>
                    <th scope="col">Car Size</th>
                    <th scope="col">Standard Price ($ CDN) *</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">3424</th>
                    <td><b>Sedan</b></td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">12312</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">13892</th>
                    <td>Minivan/Wagon/Crossover</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">43242</th>
                    <td>SUV</td>
                    <td><b>$</b><i>12.99</i></td>
                    </tr>
                    <tr>
                    <th scope="row">99524</th>
                    <td>Pickup</td>
                    <td><b>$</b><i>17.99</i></td>
                    </tr>
                </tbody>
            </table>
                                </div>
                            </div>
                        </div>
                    </div>
            <button className="btn btn-outline-primary btn-lg mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Begin Shopping</button>
        </div>
    </div>
</div>
    )}
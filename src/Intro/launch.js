

export default function Launch (){

    return(
<section style={{backgroundColor:"#1F4690"}}className="text-light p-5 p-md-0 pt-lg-5 text-center text-sm-start bg--bs-altdark">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Welcome To <span style={{color:"#FFA500"}}> Car Doctor </span></h1>
                    <p className="lead my-4">
                        Created in 1999, Car Doctor is ranked <span  style={{color:"#FFA500"}}><b>#1</b></span> in 21st Century Auto Repair Stores in the world. Car Doctor performs simple jons to more complex with our World Class Mechanics. 
                    </p>
                    <a style={{backgroundColor:"#FFA500"}}className="btn btn-lg" href="#promos">Begin Your Browse</a>
                </div>
                <img style={{width:'208vh'}} className="img-fluid w-50 d-none d-sm-block" src="assets/images/Logo.png" alt="" />
            </div>
        </div>
    </section>
    )
};


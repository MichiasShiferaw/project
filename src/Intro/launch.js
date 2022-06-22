

export default function Launch (){

    return(
<section style={{backgroundColor:"#1F4690"}}className="text-light p-5 p-md-0 pt-lg-5 text-center text-sm-start bg--bs-altdark">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Welcome To <span style={{color:"#FFA500"}}> Car Doctor </span></h1>
                    <p className="lead my-4">
                        Created in 1999, Car Doctor was ranked <span  style={{color:"#FFA500"}}><b>#1</b></span> in 21st Century Auto Repair Stores in the last three years. Car Doctor performs simple jobs to more complex with our World Class Mechanics. Car Doctor was awarded Highest Customer Satisfaction Award among all mechanic shops in North America.          
                    </p>
                    <a style={{backgroundColor:"#FFA500"}}className="btn btn-lg" href="#promos">Begin Your Browse</a>
                </div>
                <img style={{width:'208vh'}} className="img-fluid w-50 d-none d-sm-block" src="assets/images/Logo.png" alt="" />
            </div>
        </div>
    </section>
    )
};


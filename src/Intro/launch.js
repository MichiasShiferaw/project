export default function Launch (){
    return(
<section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Welcome To <span className="text-warning"> Car Doctor </span></h1>
                    <p className="lead my-4">
                        We focus on teaching our students the fundamentals of the latest
                        and greatest technologies to prepare them for their first dev role
                    </p>
                    <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
                        Start The Enrollment
                    </button>
                </div>
                <img style={{width:'208vh'}} className="img-fluid w-50 d-none d-sm-block" src="assets/images/Guy.png" alt="" />
            </div>
        </div>
    </section>
    )
};


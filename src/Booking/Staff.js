export default function Booking() {


  return (

          <div className="list-group">
            <button type="button" className="list-group-item btn btn-secondary list-group-item-action d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <i class="bi bi-question-circle-fill"></i> <b>No Preference</b>
                    </div>
            </button>
            <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
                <div class="ms-2 me-auto">
                <div class="fw-bold"><i class="bi bi-person-circle me-0"></i> Maddox or <i>MadDog</i></div>
                Manager
                </div>
                <span className="badge bg-primary badge-pill">4.6 <i class="bi bi-star-fill text-altdark"></i></span>

            </button>
            <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div class="ms-2 me-auto">
                <div class="fw-bold"><i class="bi bi-person-circle me-0"></i> Duncan or <i>Dunc</i></div>
                Supervisor
                </div>
                <span className="badge bg-primary badge-pill">4.7 <i class="bi bi-star-fill text-altdark"></i></span>
            </button>
            <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div class="ms-2 me-auto">
                <div class="fw-bold"><i class="bi bi-person-circle me-0"></i> Kathryn or <i>Kathy</i></div>
                Senior Mechanic
                </div>
                <span className="badge bg-primary badge-pill">4.9 <i class="bi bi-star-fill text-altdark"></i></span>
            </button>
                        <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div class="ms-2 me-auto">
                <div class="fw-bold"><i class="bi bi-person-circle me-0"></i> Travis or <i>Travy-Patty</i> </div>
                Junior Mechanic
                </div>
                <span className="badge bg-primary badge-pill">4.7 <i class="bi bi-star-fill text-altdark"></i></span>
            </button>

                        <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div class="ms-2 me-auto">
                <div class="fw-bold justify-content-start" ><i class="bi bi-person-circle me-0"></i> Robert or <i>Robby</i> </div>
                Junior Mechanic
                </div>
                <span className="badge bg-primary badge-pill">5.0 <i class="bi bi-star-fill text-altdark"></i></span>
            </button>
            </div>

  );
}


export default function Terms () {
    return (
      <>
      <div className="form-check">
            <input type="checkbox" className="form-check-input" id="majority-age"defaultChecked required/>
            <label className="form-check-label" htmlFor="majority-age">I am the age of the majority or older</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="license" defaultChecked required/>
            <label className="form-check-label" htmlFor="license">I have a valid license</label>
          </div>

                    <div className="form-check">
            <input type="checkbox" className="form-check-input" id="agree-terms" defaultChecked required/>
            <label className="form-check-label" htmlFor="agree-terms">I agree to Car Doctor's <a href='#/'>Privacy Policy</a>, <a href='#/'>Terms of Service</a> and <a href='#/'>Terms of Service</a>.</label>
            </div>
           <div className="form-check">
            <input type="checkbox" className="form-check-input" id="agree-marketing"defaultChecked/>
            <label className="form-check-label" htmlFor="agree-marketing">I agree to receive marketing notifications with offers and news <i>(Optional)</i></label>
          </div>
          </>
    )
};
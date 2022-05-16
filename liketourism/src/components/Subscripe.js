import React from "react";
import "../assets/sass/subscripe.scss";

function Subscripe() {
  return (
    <div className="subscripe mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 infos">
            <h4>Vaxtınıza və pulunuza qənaət edin!</h4>
            <p>Abunə olsanız ən yaxşı təkliflər sizə göndəriləcək</p>
            <div className="input">
              <input className="form-control" type="text" />
              <button className="btn btn-primary">Abunə ol</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscripe;

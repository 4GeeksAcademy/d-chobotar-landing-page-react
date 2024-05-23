import React from "react";
function Card(props) {
    return (
      <div className="col mb-3">
        <div className="card">
          <div
            class="card-img-top bg-light d-flex align-items-center justify-content-center"
            style={{ height: "10rem" }}
          >
            {props.displayText}
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  
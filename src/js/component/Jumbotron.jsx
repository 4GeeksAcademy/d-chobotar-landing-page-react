import React from "react";

function Jumbotron() {
    return (
      <div className="bg-light p-2 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid d-flex flex-column align-items-start">
          <h1 className="display-5 fw-normal mb-4">A Warm Welcome</h1>
          <p className="fs-4 w-100 mb-4 text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error laudantium maxime. Tenetur maiores dolores tempore obcaecati ad quasi esse, voluptatem quam eius non facilis, delectus architecto minima rem cumque.
          </p>
          <button className="btn btn-primary btn-lg mb-4" type="button">
              Call To Action
          </button>
        </div>
      </div>
    );
  }
  
  export default Jumbotron;
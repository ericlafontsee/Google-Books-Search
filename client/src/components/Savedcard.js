import React from "react";
import API from "../utils/API";

function Savedcard(prop) {
  console.log(prop)
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{prop.title}</h2>
        <p className="card-text">Authors: {prop.authors}</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src={prop.image} className="card-img-center" alt={prop.title} />
              <br />
              <a href={prop.link} target="_blank" rel="noopener noreferrer" ><button className="btn btn-secondary">View</button></a>
              <button className="btn delete" id={prop._id} onClick={() => deleteBook(prop._id)}>Delete</button>
              <br />
            </div>
            <div className="col-lg-8">
              <h4>Description</h4>
              <p className="card-text"> {prop.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Savedcard;
import React from "react";
import API from "../utils/API";

function Savedcard(prop) {
  function deleteIt(id) {
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
              <img src={prop.image} className="card-img-left" alt={prop.title} />
              <br />
              <a type="button" href={prop.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View</a>
              <button className="btn btn-danger" id={prop._id} onClick={() => deleteIt(prop._id)}>Delete</button>
              <br />
            </div>
            <div className="col-lg-8">
              <p className="card-text">Description: {prop.description}</p>
              <br />
              <p className="card-text">Category: {prop.categories}</p>
              <br />
              <p className="card-text">Rating: {prop.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Savedcard;
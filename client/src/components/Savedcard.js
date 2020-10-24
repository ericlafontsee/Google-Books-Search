import React from "react";
import API from "../utils/API";

function Savedcard(prop) {
  let props = prop.data;
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
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">Authors: {props.authors}</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src={props.image} className="card-img-left" alt={props.title} />
              <br />
              <a type="button" href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View</a>
              <button className="btn btn-danger" id={props._id} onClick={() => deleteIt(props._id)}>Delete</button>
              <br />
            </div>
            <div className="col-lg-8">
              <p className="card-text">Description: {props.description}</p>
              <br />
              <p className="card-text">Pages: {props.pageCount}</p>
              <br />
              <p className="card-text">Published: {props.publishedDate}</p>
              <br />
              <p className="card-text">Category: {props.categories}</p>
              <br />
              <p className="card-text">Rating: {props.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Savedcard;
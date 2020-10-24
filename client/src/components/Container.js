import React from "react";

function Container(props) {
  return (
    <div className="row justify-content-lg-center main-container">
      {props.children}
    </div>
  )
}

export default Container;
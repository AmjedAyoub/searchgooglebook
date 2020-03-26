import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DelBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn delbtn">
      Delete
    </button>
  );
}

//  default DelBtn;
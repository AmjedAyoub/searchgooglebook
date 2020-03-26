import React from "react";
import "./style.css";

// const JSX_MODAL = (
//   <div className="ui dimmer modals visible active">  
//     <div className="ui standard modal visible active">
//       THIS IS SOME TEXT IN THE MODAL // add some UI features here
//     </div>
//   </div>
// );


// function Modal(props) {
//   return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
// }


// export default Modal;

export function Modal({ handleClose, show, children }){
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button onClick={handleClose}>close</button>
          <section className="modal-main2">
          {children}
          </section>
        </section>
      </div>
    );
  };
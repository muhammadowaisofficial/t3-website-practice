import React from "react";
import Login from '../Form/Login';

const Modal = (props) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn" onClick={props.onClick}>
        {props.text}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box" htmlFor="">
        <Login />
        </label>
      </label>
    </div>
  );
};

export default Modal;

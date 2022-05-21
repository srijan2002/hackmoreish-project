import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="close__container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        </div>
        <div className="title">
          <h4>PLACE YOUR ORDER HERE</h4>
        </div>
        <div className="body">
          <div className="items">
            <div className="item">PIZZA</div>
            <div className="item">PASTA</div>
            <div className="item">NAAN</div>
            <div className="item">DAL MAKHANI</div>
            <div className="item">BIRIYANI</div>
          </div>
          <div className="quantity__modal">
            <input type="text" className="amt" />
            <input type="text" className="amt" />
            <input type="text" className="amt" />
            <input type="text" className="amt" />
            <input type="text" className="amt" />
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
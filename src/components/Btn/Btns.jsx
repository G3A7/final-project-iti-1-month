/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { useState } from 'react';
import { useState } from 'react';
import './Btn.css';
function Btns({ setId }) {
  const [activeButton, setActiveButton] = useState(0);
    return (
      <div className="btn-container">
        <button
          onClick={() => {
            setId(0);
            setActiveButton(0);
          }}
          className={activeButton === 0 ? "active" : ""}
        >
          <span>All</span>
        </button>
    
        <button
          onClick={() => {
            setId(28);
            setActiveButton(28);
          }}
          className={activeButton === 28 ? "active" : ""}
        >
          <span>Action</span>
        </button>
    
        <button
          onClick={() => {
            setId(16);
            setActiveButton(16);
          }}
          className={activeButton === 16 ? "active" : ""}
        >
          <span>Animation</span>
        </button>
    
        <button
          onClick={() => {
            setId(18);
            setActiveButton(18);
          }}
          className={activeButton === 18 ? "active" : ""}
        >
          <span>Drama</span>
        </button>
    
        <button
          onClick={() => {
            setId(80);
            setActiveButton(80);
          }}
          className={activeButton === 80 ? "active" : ""}
        >
          <span>Crime</span>
        </button>
    
        <button
          onClick={() => {
            setId(10749);
            setActiveButton(10749);
          }}
          className={activeButton === 10749 ? "active" : ""}
        >
          <span>Romance</span>
        </button>
    
        <button
          onClick={() => {
            setId(9648);
            setActiveButton(9648);
          }}
          className={activeButton === 9648 ? "active" : ""}
        >
          <span>Mystery</span>
        </button>
      </div>
    );


}

export default Btns;

/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { useState } from 'react';
import './Btn.css';
function Btns({ setId }) {
  // const [apper, setapper] = useState(0);
  return (
  <>
  {/* <span  className='toggle' onClick={()=>{
         setapper(!apper);
         console.log(apper);
  }}></span> */}
        
        {/* style={{display: apper ? "block":"none",flexDirection:"column"}} */}
        <div  className="btn-container">
     
     <button
        onClick={() => {
          setId(0);
        }}
      >
        <span>All</span>
      </button>

      <button
        onClick={() => {
          setId(28);
        }}
      >
          <span>Action</span>
      </button>
      <button
        onClick={() => {
          setId(16);
        }}
      >
        <span>Animation</span>
      </button>
      <button
        onClick={() => {
          setId(18);
        }}
      >
        <span>Drama</span>
      </button>
      <button
        onClick={() => {
          setId(80);
        }}
      >
        <span>Crime</span>
      </button>
      <button
        onClick={() => {
          setId(10749);
        }}
      >
        <span>Romance</span>
      </button>
      <button
        onClick={() => {
          setId(9648);
        }}
      >
        <span>Mystery</span>
      </button>
    </div></>
  );
}

export default Btns;

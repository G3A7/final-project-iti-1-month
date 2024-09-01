/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 
import './Navbar.module.css';
import search from '../../assets/search.png';
import { useData } from "../context/globalContext";
import { useRef } from "react";

function Navbar({setSearch}) {
  const dataFromContext=useData();
   const inp =  useRef();
  // console.log(dataFromContext.data);
  return (
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
         <li><input ref={inp} onInput={(e)=>{
         setSearch(e.target.value);
         }} type="text" /> <img src={search} alt="" /> </li>
        <li><Link to="/watchList">WatchList <span>{dataFromContext.data.length}</span> </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar

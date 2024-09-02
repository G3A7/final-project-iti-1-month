/* eslint-disable react/prop-types */
import { useState } from "react";
import Btns from "../components/Btn/Btns";
import Products from "../components/Products/Products"
import Pagination from "../components/Pagination/Pagination";

const Home = ({search}) => {
  const [state , setId] =useState(0);
  // console.log(search);
  const [statePage, setStatePage] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  return (
    <>
      <Btns setId={setId}/>
      <Products search={search} state={state} setTotalPages={setTotalPages} statePage={statePage}/> 
      <Pagination totalPages={totalPages} statePage={statePage} setStatePage={setStatePage}/>
    </>
  )
}

export default Home;

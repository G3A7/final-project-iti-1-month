/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import { useState } from "react";
// import { API_KEY } from "./data";
import Home from "./Home/Home";

 import ContextProvider from "./components/context/globalContext"; 
import WatchList from "./WatchList/WatchList";
import DetailsProduct from "./Details/DetailsProduct";
import { useState } from "react";
import Footer from "./components/footer/Footer";



function App() {
  const [search , setSearch] = useState([]);

return <ContextProvider>
         <div>
         <Navbar setSearch={setSearch} /> 
         <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path={`/details/:id`} element={<DetailsProduct />} />
         </Routes>
         <Footer/>
         </div>
  </ContextProvider> ; 
}

export default App;
  
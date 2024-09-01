/* eslint-disable react/prop-types */
import { useData } from "../context/globalContext";
import { useEffect, useState } from "react";
import "./Products.css";
import { API_KEY } from "../../data";
import { Link } from "react-router-dom";
const Products = ({ state, statePage, setTotalPages , search }) => {
  // console.log(state,statePage);
  const [movies, getData] = useState([]);
  useEffect(() => {
    (search.length > 0 ) ? fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&include_adult=false&include_video=false&language=en-US&page=${statePage}&sort_by=popularity.desc${
          state && `&with_genres=${state}`
        }`).then((res) => res.json())
      .then((data) => {
        setTotalPages(data.total_pages);
        getData(data.results);
      }) : fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${statePage}&sort_by=popularity.desc${
          state && `&with_genres=${state}`
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setTotalPages(data.total_pages);
          getData(data.results);
        }) 

  }, [state, statePage, search]);
//  console.log(movies);
  // https://api.themoviedb.org/3/search/collection?api_key=YOUR_API_KEY&query=NAME
          
  // https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=${state}

  //https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

  const dataContext = useData();
  let idWatchList = [];
  idWatchList = dataContext.data.map((el) => {
    return el.id;
  });
  return (
    // <></>
    <div className="container">
      {movies.map((el) => {
        const isInWatchList = idWatchList.includes(el.id);
        return (
          <div key={el.id} className="card">
            <div className="img-div">
              <img src={`${"https://image.tmdb.org/t/p/w500" + el.poster_path}`}  alt="No Image"/>
            </div>
            <h3>{`${el.title.length < 30 ? el.title : el.title.slice(0, 30) + "..."}`}</h3>
            <p>{`${el.overview.slice(0, 40)}...`}</p>
            <div className="btn-flex">
              <button
                disabled={isInWatchList}
                style={{
                  cursor: isInWatchList ? "no-drop" : "pointer",
                  opacity: isInWatchList ? ".5" : "1",
                }}
                onClick={() => {
                  dataContext.dispatch({
                    type: "AddToWatchList",
                    payload: el,
                  });
                }}
              >
                AddToWatchList
              </button>
              <button>
                <Link to={`/details/${el.id}`}>details</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

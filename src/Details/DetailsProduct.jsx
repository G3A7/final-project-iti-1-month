import { useEffect, useState } from "react";
import "./DetailsProduct.css";

import { useParams } from "react-router-dom";
import { API_KEY } from "../data";

function DetailsProduct() {
  const [video, setVideo] = useState({});
  const [trailer, setTrailer] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      });
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        const trailerVideo = data.results.find((video) => video.type === "Trailer");
        setTrailer(trailerVideo);
      });
  }, [id]);
  console.log(video);

  const rating = (video.vote_average * 10).toFixed(1);
  const releaseYear = video.release_date;
  const voteCount = video.vote_count;

  return (
    <div style={{marginBottom:"10px"}} className="container-details-video">
      <div className="div-iframe" style={{textAlign:"center"}}>
       {
        trailer && <iframe style={{borderRadius:"10px"}}
         src={`https://www.youtube.com/embed/${trailer.key}`}
         title={trailer.name}
         width="90%"
         height="415"
         frameBorder="0"
         allowFullScreen
       ></iframe>
       }
      </div>
     <div className="div-card-details-video">
     <div className="div-tow-img">
        <img src={"https://image.tmdb.org/t/p/w500" + video.backdrop_path} alt="" />
        </div>
      <h1>{video.title}</h1>
      <p className="p-1">{video.overview}</p>
      <p className="p-2">
        <strong>Rating:</strong> {rating}% ({voteCount} votes)
      </p>
      <p className="p-3">
        <strong>Year:</strong> {releaseYear}
      </p>
     </div>
    </div>
  );
}

export default DetailsProduct;

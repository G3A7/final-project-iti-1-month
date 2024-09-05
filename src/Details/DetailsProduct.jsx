import { useEffect, useState } from "react";
import "./DetailsProduct.css";

import { useParams } from "react-router-dom";
import { API_KEY } from "../data";
import { useData } from "../components/context/globalContext";

function DetailsProduct() {
  const [video, setVideo] = useState({});
  const [trailer, setTrailer] = useState([]);
  const [cast, setCast] = useState([]);
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
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        const cast = data.cast.slice(0,8).map(member => ({
          name: member.name,
          character: member.character,
          profilePath: `https://image.tmdb.org/t/p/w500${member.profile_path}`, // URL للصورة
        }));
        setCast(cast)
        console.log(cast);
      })      
  }, [id]);
  // console.log(video);

  const rating = (video.vote_average * 10).toFixed(1);
  const releaseYear = video.release_date;
  const voteCount = video.vote_count;
  const dataFromContext=useData();
  let idWatchList = [];
  idWatchList = dataFromContext.data.map((el) => {
    return el.id;
  });
  const isInWatchList = idWatchList.includes(video.id);
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
      <button  disabled={isInWatchList}
                style={{
                  cursor: isInWatchList ? "no-drop" : "pointer",
                  opacity: isInWatchList ? ".5" : "1",
                }}
                 onClick={()=>{
              dataFromContext.dispatch({
                type:"AddToWatchList",
                payload:video
              })
            }}><span>AddToWatchList</span></button>
     </div>
      <p style={{padding:"10px"}}>Cast</p>
     <div className="div-img-cast" style={{display:"flex",alignItems:"center",justifyContent:"space-around",gap:"5px",flexWrap:"wrap"}}>
     {
      cast.map((member,idx)=>{
         return (member.profilePath && <img key={idx} src={member?.profilePath} alt={member.name} style={{ width: '100px', borderRadius: '10px', margin:"5px" }} />)    
      })
     }

     </div>
         </div>
  );
}

export default DetailsProduct;

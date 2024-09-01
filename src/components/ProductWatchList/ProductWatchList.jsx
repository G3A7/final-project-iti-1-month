import { useData } from "../context/globalContext";
import './ProductWatchList.css'
function ProductWatchList() {
    const dataFromContext=useData();
    console.log(dataFromContext.data);
  return (
    <div className="container-product-watchList">
      {
      dataFromContext.data.length ==0? <h1>No Watch List Man</h1> : 
       dataFromContext.data.map((item)=>{
          const rating = (item.vote_average * 10).toFixed(1);
          const releaseYear = new Date(item.release_date).getFullYear(); 
          const voteCount = item.vote_count;
           return (<div key={item.id} className="card-watchList">
           <div className="div-img-watch-list">
           <img src={`${"https://image.tmdb.org/t/p/w500"+item.poster_path}`}  alt="" />
           </div>
           <div className="div-cover">
           <h3>{item.title}</h3>
            <p>{item.overview}</p>
             <p>
             <strong>Rating:</strong> {rating}%  ({voteCount} votes)
             </p>
             <p>
             <strong>Year:</strong> {releaseYear}
             </p>
            <button onClick={()=>{
              dataFromContext.dispatch({
                type:"RemoveFromWatchList",
                payload:item
              })
            }}><span>RemoveFromWatchList</span></button>
           </div>
        </div>)
        })
      }
    </div>
  )
}

export default ProductWatchList;

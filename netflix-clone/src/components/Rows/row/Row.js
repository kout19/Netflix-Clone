import React, { useEffect, useState } from 'react'
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

 const Row = ({title, fetchURL, isLargeRow}) => {
   const [movies, setMovie] = useState([]);
   const [trailerURL, setTrailerURL] = useState("");
   const base_url = 'https://image.tmdb.org/t/p/original';
   useEffect(() => {
     (async () => {
       try {
         console.log(fetchURL);
         const request = await axios.get(fetchURL);
         console.log(request);
         setMovie(request.data.results);
       } catch (err) {
         console.log("error fetching data", err);
       }
     })()
   }, [fetchURL]);
   const handlClick = (movie) => {
     if (trailerURL) {
       setTrailerURL("");
     }
     else {
       movieTrailer(movie?.title || movie?.name || movie?.original.name).then((url) => {
         console.log(url);
         const urlParams = new URLSearchParams(new URL(url).search);
         console.log(urlParams);
         console.log(urlParams.get('v'));
         setTrailerURL(urlParams.get('v'));

       })
     }
   }
   const opts = {
     height: '390',
     width: '100%',
     playerVars: {
       autoplay:1,
     },
}
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies?.map((movie, index) => (
          <img 
            onClick={()=> handlClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLlarge"}`}
          />
        ))
        }
      </div>
      <div style={{padding:'4px'}}>
        {trailerURL &&<YouTube videoId={trailerURL}opts={opts}/> }
      </div>
      
    </div>
  )
}

export default Row;
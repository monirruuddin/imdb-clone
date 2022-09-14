import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from "../Card/Card"
import shuffle from '../Shuffle';
import './MovieList.css'

function MovieList() {
   const [movieList,setMovieList] = useState([]);
   const movieListRandom = shuffle(movieList)

    const {type} = useParams();
    const titleHere= (type ? type : "popular")

    let title = "";
    if(type =="popular"){
        title="POPULAR"
    }else if(type =="top_rated"){
        title="TOP RATED"
    }else if(type =="upcoming"){
        title = "UPCOMING"
    }else{
        title = "";
    }

const getData = ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${titleHere}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then((res)=>res.json())
    .then((data)=>setMovieList(data.results))
}

   useEffect(()=>{
    getData();
   },[type])
  return (

    <div className='movie__List'>
        <div className="list__title">{title || "POPULAR"}</div>
        <div className="list__cards"> 
            {
                movieListRandom.map((movie)=>{
                    return <Card key={movie.id} movie={movie}></Card>
                })
            }
            

        </div>
       
    </div>
  )
}

export default MovieList
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from "../Card/Card"
import './MovieList.css'

function MovieList() {
   const [movieList,setMovieList] = useState([]);
    const {type} = useParams();
    const titleHere= (type ? type : "popular")

    let title = "";
    if(type === "popular"){
        title="POPULAR"
    }else if(type === "top_rated"){
        title="TOP RATED"
    }else if(type === "upcoming"){
        title = "UPCOMING"
    }else{
        title = "";
    }

const getData = ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${(titleHere)}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then((res)=>res.json())
    .then((data)=>setMovieList(data.results))
}

   useEffect(()=>{
    getData();
   },[type])
  return (

    <div className='movie__List'>
        <div className="list__title"> {(type ? type : "popular")}</div>
        <div className="list__cards"> 
            {
                movieList.map((movie)=>{
                    return <Card movie={movie}></Card>
                })
            }
            

        </div>
       
    </div>
  )
}

export default MovieList
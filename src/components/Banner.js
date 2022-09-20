import React from 'react'
import { useState, useEffect } from 'react' 
import instance from '../instance'
import requests from '../request'
import './Banner.css'


function Banner() {

    const[movie,setMovies]=useState([])

async function fetchData(){
    const request= await instance.get(requests.fetchNetflixOriginals)
setMovies(request.data.results[
Math.floor(Math.random() * request.data.results.length - 1)
])

}


useEffect(()=>{

    fetchData()
},[])

function truncate(str,n){
return str?.length > n ? str.substr(0, n-1)+ "...": str;
}

console.log("Banner movie is",movie)
  return (
    <header className='header'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"   
            )`,
            backgroundPosition:"center center",
            height:"800px"
  }}>
<div className="banner__contents">
  <h1 className="banner_title">
    {movie.title || movie.name || movie.original_name}
  </h1>
</div>
<h1 className="banner_description">
{truncate(movie?.overview,150)}
</h1>
    </header>
  )
}

export default Banner

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../requests'
import "../scss/banner.scss"

let alma;
function Banner({title}) {
    const [movie,setMovie]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
           // return request
        }


        fetchData()
    },[])

    console.log("AAAAAAAAAAAAAAAAAA",movie)
    
     alma=`url("https://image.tmbd.org/t/p/original${movie?.backdrop_path}")`
     //https://image.tmbd.org/t/p/original/6KyJeOW7vTW0czdR0S6wzXAcfmw.jpg
    console.log("alma",alma)
  return (
    <header className='banner'
    style={
      {
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmbd.org/t/p/original${movie?.poster_path}")`,
        backgroundPosition:"center"
      }
    }>
      
      <div className='bannerCont'>
      <h1 className='title'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p>this is the banner image what i can get, sad, something is not right</p>
      <p>I mean thet this is the url path and still just get that one</p>

      <div className='btns'>
        <button className='banner_btn'>Play</button>
        <button className='banner_btn'>My list</button>
      </div>
      <h1 className='des'>
        {movie?.overview}
      </h1>
      </div>
      
    </header>
  )
}


export default Banner

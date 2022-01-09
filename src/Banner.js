import React, { useState, useEffect } from 'react'
import axios from './Axios';
import './Banner.css'
import requests from './Request';
function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setmovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();

    }, [])
    console.log(movie)
    function Truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string

    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center"
        }
        }>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_button1'>
                    <button className='banner_button'>play</button>
                    <button className='banner_button'>Mylist</button>
                </div>
                <h1 className='banner_discription'>
                    {Truncate(
                        movie?.overview
                        , 150)}
                </h1> </div>

            <div className='baner--fadebottom' />

        </header>
    )
}

export default Banner

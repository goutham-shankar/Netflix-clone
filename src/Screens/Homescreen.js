import React from 'react'
import Banner from '../Banner'
import "./Homescreen.css"
import Nav from '../Nav'
import requests from '../Request'
import Row from '../Row'
function Homescreen() {
    return (
        <div className='homescreen'>
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargerow
            />
            <Row
                title='Trending Now'
                fetchUrl={requests.fetchTrending}

            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}

            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}

            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}

            />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}

            />



        </div>
    )
}

export default Homescreen

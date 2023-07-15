import React from 'react'
import "./css/homescreen.css"
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import userrequests from './request'

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav/>  
       <Banner/>
      <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>

      <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>

      <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/>

      <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>

      <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>

      <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies}/>

      <Row title="Documentarie Movies" fetchURL={userrequests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen
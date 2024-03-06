import React from 'react'
import FetchData from '../components/FetchData'
import HomePageData from './HomePageData'

const Home = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
        style={{ height : "50vh"}} >
        <h1 style={{ fontSize : "50px", color : "orange"}}>News Feed</h1>
        <h5>LATEST NEWS OF THE DAY</h5>
        <h5 style={{ marginTop : "70px", textDecoration : "underline"}}>Hot Headlines</h5>
        <div style={{ color : "orange"}} >
        <HomePageData></HomePageData>
        </div>
      </div>
        <FetchData></FetchData>
    </div>
  )
}

export default Home
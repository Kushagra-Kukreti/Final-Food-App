import React from 'react'
import HomeHeader from './HomeHeader'
import './home.css'
export default function Home() {
  return (
    <div id="home" className='m-0 p-0'>


      <HomeHeader />
       
      <div class="jumbotron jumbotron-fluid bg-transparent ">
        <div class="container ">
          <h1 class="display-4 black bold">Food Is Our First Priority</h1>
          <p class="lead black"> A perfect place to satisfy your soul with our amazing course of meals.</p>
        </div>
      </div> 


    </div>
  )
}

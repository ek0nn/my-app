import React from 'react'
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
<div class = "main" > 
      <div class = "container-hero"> 
      <h1 className='welcome'>Welcome to,</h1>
      <h3 className='link'>Guess The Link</h3>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <Link to = "/youtubers"> 
  <button type="button" class="Cat">Youtubers</button>
  </Link>
  <button type="button" class="Cat"> soon</button>
  <button type="button" class="Cat"> soon</button>
</div>
      
      </div>

    </div>
  )
}

export default Home;
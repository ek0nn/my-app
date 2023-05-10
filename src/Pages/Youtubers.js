import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { names } from '../names';

function Youtubers(props) {

    const correctGuess = 'Pewdiepie';
    const { id } = useParams();
    const [input, setInput] = useState('');
    const snames = names.filter(name => name.id === id);
    const [page, setPage] = useState(1);
    const checkAnswer = () => {
        if(input.toLowerCase() === correctGuess.toLowerCase()) {
            alert('Correct! The name of the Youtuber is indeed ' + correctGuess);
        } else {
            alert('Sorry, that is not correct. Try again!');
        }
    };
    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
      }
  return (
    <div class = "linkmain" > 
    <h1 className='welcome2'>Youtubers</h1>
    
  
    <div className='guesscont'>
        <div className='imgHolder'>
            <img className='imgHolder' src = "images/raygun.jpg"  /> 
        </div>
        <div className='imgHolder'>
        <img className='imgHolder' src = "images/die.jpg"  /> 
        </div>
        <div className='imgHolder'>

        <img className='imgHolder' src = "images/pie.jpg"  /> 
        </div>

    </div>

    <form className='guess'>
    <input  value={input}  onChange={(e) => setInput(e.target.value)} type="name" class="inputGuess"  placeholder='Enter Your Guess'/>
    <button className = "submitbtn" onClick={checkAnswer}>Submit</button>
    </form>
    <Link to={`/YoutubeTemplate/${1 + 1}`}> 

    <button className = "submitbtn"  onClick={handleNext}>Next</button>
    
    </Link>
     </div>
     
  )
}

export default Youtubers
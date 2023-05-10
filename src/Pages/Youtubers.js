import React, { useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { names } from '../names';
import { Navigate } from 'react-router-dom';

function Youtubers(props) {
    const navigate = useNavigate();

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
        setPage(prevPage => {
            const nextPage = prevPage + 1;
            if (nextPage <= 10) { // check if nextPage exceeds the limit
                navigate(`/YoutubeTemplate/${nextPage}`);
                return nextPage;
            } else {
                return prevPage; // if nextPage exceeds the limit, return the current page
            }
        });
    };
  return (
    <div className = "linkmain" > 
    <h1 className='welcome2'>Youtubers</h1>
    {snames.map(pr => (
        <div className='guesscont'>
            <div className='imgHolder'>
                <img className='imgHolder' src = {pr.img1}  /> 
            </div>
            <div className='imgHolder'>
                <img className='imgHolder' src = {pr.img2}   /> 
            </div>
            <div className='imgHolder'>
                <img className='imgHolder' src = {pr.img3}   /> 
            </div>
        </div>
    ))}
    <form className='guess'>
        <input  value={input}  onChange={(e) => setInput(e.target.value)} type="name" className="inputGuess"  placeholder='Enter Your Guess'/>
        <button className = "submitbtn" onClick={checkAnswer}>Submit</button>
    </form>
    <button className = "submitbtn"  onClick={handleNext}>Next</button>
</div>
     
  )
}

export default Youtubers
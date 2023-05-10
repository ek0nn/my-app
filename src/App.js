import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Youtubers from './Pages/Youtubers';
import YoutubeTemplate from './Pages/YoutubeTemplate';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Home/>} />  
    <Route path='youtubers' element = {<Youtubers/>}/>  
    <Route path= "YoutubeTemplate/:id" element = {<YoutubeTemplate/>}/>  
    
    </Routes>
</BrowserRouter>
  );
}

export default App;

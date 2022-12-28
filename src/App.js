import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Terms from './pages/Terms';
import GetStarted from './pages/GetStarted'
import Services from './pages/Services';
import Chat from './pages/Chat'
import Feedback from './pages/Feedback';
import GetStartedFeedback from './pages/GetStartedFeedback';
import ServiceFeedback from './pages/ServiceFeedback';
import './App.css'
import "swiper/css/bundle";


function App() {
  return (
   <div >
     <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/terms' element = {<Terms/>}/>
      <Route path='/start' element = {<GetStarted/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/chat' element = {<Chat/>}/>
      <Route path='/feedback' element = {<Feedback/>}/>
      <Route path='/getfeedback' element = {<GetStartedFeedback/>}/>
      <Route path='/servicefeed' element = {<ServiceFeedback/>}/>

    </Routes>
    </BrowserRouter>
   </div>
    
  );
}

export default App;

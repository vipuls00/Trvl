import './App.css';
import React from 'react';
 import {BrowserRouter as Router,Switch,Routes,Route,Link} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './components/Home';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import CardMain from './components/CardMain';
import Footer from './components/Footer';
 function App() {
  return (
    <React.Fragment>
  {/* <Router> 
   <NavBar></NavBar>
   <Routes>
   <Route path='/' exact element = {<Home/>}></Route>
   <Route path='/Services' exact element = {<HeroSection/>}></Route>
   <Route path='/CardMain' exact element = {<CardMain/>}></Route>
   <Route path='/Footer' exact element = {<Footer/>}></Route>
   </Routes> 
  </Router> */}
 <NavBar></NavBar>
<HeroSection></HeroSection>
<CardMain></CardMain>
<Footer></Footer>
    </React.Fragment>
  );
} 
export default App;

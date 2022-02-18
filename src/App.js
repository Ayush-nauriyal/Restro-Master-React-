import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import backPic from './components/photos/pic-5.jpg'
import React, { useState } from 'react';
import Welcome from './components/Welcome'
import Home from './components/Home';
import About from './components/About';
import Photogallery from './components/Photogallery';
import Contact from './components/Contact';
import Menu from './components/Menu'

import Footer from './components/Footer';
import{
  BrowserRouter as Router,
  Routes,
  Route

}from "react-router-dom";

function App() {
  
  //title name and image
  const [title,setTitle]= useState({

    name:"Indian Masala NYC",
    img: backPic
  });


//function to switch title name and image
  const switchTitle =(nme,pic)=>
  {
    setTitle(
      {
       name:nme,
       img:pic
      }
    )
  }



  
  return (
    <>
   <Router>
     
   <Navbar switchTitle={switchTitle} />

   <Title  title={title}/>
   

  
   <Welcome/>


   <Routes>
<Route exact path="/" element={<Home/>}>

</Route>
<Route exact path="/about" element={<About/>}>

</Route>
<Route exact path="/menu" element={<Menu/>}>

</Route>
<Route exact path="/photos" element={<Photogallery/>}>

</Route>
<Route exact path="/contact" element={<Contact/>}>

</Route>

</Routes>

<Footer/> 


   </Router>
    </>
  );
}

export default App;

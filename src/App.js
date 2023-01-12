import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Head from './Web/Home';
import Navbar from './Web/Navbar';
import Section1 from './Web/Section1';
import Section2 from './Web/Section2';
import Section3 from './Web/Section3';
import Footer from './Web/Footer';


function App(){
  return(
    <div className='Website'>
      <Head/>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App =() => {
  return (
    <div className='container-fluid'>
      <Header size='36px' />
      <Footer size='48px' />
    </div>
  );
}

export default App;

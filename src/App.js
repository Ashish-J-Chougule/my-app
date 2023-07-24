// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=> {
    if(mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#bec3c9';
      document.body.style.color='white';
    }else{
      setMode('light');
      document.body.style.backgroundColor='#868e96';
      document.body.style.color='black';
    }
  }
  return (
    <>
      <Navbar title="Navbar" navbarMode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm title="This is form" toggleMode={mode}/>
      </div>
      {/* <Navbar/> */}
      <About/>
    </>
  );
}

export default App;

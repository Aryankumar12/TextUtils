import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";   
import Alert from "./components/Alert";   

import React from "react";


function App() {
  const [mode, setMode]= useState('light')
  const [alert, setAlert]= useState(null)

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#252341'
      document.title= "TextUtils - Dark"
      showAlert("Dark mode has been Activated", "success")
      

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.title= "TextUtils - Light"
      showAlert("Dark mode has been Deactivated", "dark")

    }
  }
  return (
    <>
      <Navbar title="TextUtils" secondLink="Contact" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      {/* <About></About> */}
      <TextForm showAlert={showAlert} heading="Enter the title of the text" mode= {mode}/>
    </>
  );
}

export default App;

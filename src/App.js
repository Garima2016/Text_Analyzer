import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';
//import Slider from './Components/Slider';
import Alert from './Components/Alert';
//import About from './Components/About';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //weather dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enable", "success");
      document.title = "text Analyzer - DarkMode"

    }

    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("light mode enable", "success");
      document.title = "text Analyzer - LightMode"
    }
  }
  return (
    <>
      <Navbar title="TextAnalyzer" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*<Router>
          <Routes>
             <Route exact path='/about' element={<About/>}/> 

            <Route exact path="/">
              <TextForm heading="Enter Text to Analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
            </Route>
          </Routes>
        </Router> */}
        <TextForm heading="Enter Text to Analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
      </div>
      {/* <Slider/> */}
    </>
  );
}

export default App;

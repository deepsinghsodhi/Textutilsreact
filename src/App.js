import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert =(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      showalert("Dark mode has been enabled","success");
      document.title = 'Textutils - Dark Mode'
      setInterval(() => {
        document.title = "Textutils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert("light mode has been enabled","success");
      document.title = 'Textutils - Light Mode'
    }
  }
  return (
    <>
<Router>
<Navbar title="Textutils" about="about" mode={mode} toggleMode={toggleMode} />
<Alert alert= {alert}/>
<div className='container my-3'>
<Switch>
          <Route exact path="/about">
            <About />
            </Route>
            <Route exact path="/">
            <Textform showalert={showalert} heading='Enter the text to analyze below'  mode={mode} />

          </Route>
        </Switch>
</div>
  </Router>
{/* <About/>  */}
   </>
  );
}

export default App;

import  React, { useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Darkmode from './components/Darkmode';
import Textutility from './components/Textutility';
import MathOpp from './components/MathOpp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState('light');
  const toggleDarkMode = () => {
    if(isDarkMode === 'light'){
      setIsDarkMode('dark');
      document.body.style.backgroundColor = 'rgb(60 60 60)';
    }
    else{
      setIsDarkMode('light');
      document.body.style.backgroundColor = 'white';
    }
    console.log("Clicked");
  }

  // const changeColor = (color) => {
  //   console.log(color);
  //   if(color === 'red'){
  //     document.body.style.backgroundColor = '#840404';
  //   }
  //   else if(color === 'green'){
  //     document.body.style.backgroundColor = '#2C9E4B';
  //   }
  //   else if(color === 'blue'){
  //     document.body.style.backgroundColor = '#23689B';
  //   }
  // }
  return (
    <>
      <Router>
        <Navbar title={"First"} dropdown={"More"} dropdownaction={{ action1: "Action-1", action2: "Action-2", action3: "Action-3", logState: "Logout" }} mode={isDarkMode} toggleMode={toggleDarkMode}/>
        {/* <Darkmode isDark={isDarkMode} toggleMode={toggleDarkMode}/> */}
        <Routes>
          <Route exact path="/" element={<Textutility mode={isDarkMode}/>} />
          <Route exact path='/MathOpp' element={<MathOpp mode={isDarkMode}/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
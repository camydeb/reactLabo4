import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './components/logo/logo';



class App extends React.Component {
  render(){
    return(
      <div className="container">
        
        <Router>
            <Navbar/> 
            <Logo/>
        </Router>
        
          
      </div>
  );
  }
    
}

export default App;
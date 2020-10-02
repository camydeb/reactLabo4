import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './components/logo/logo';
import Ajout from './components/ajout/ajout';



class App extends React.Component {
  render(){
    return(
      <div className="container">
        
        <Router>
            <Navbar/> 
            <Logo/>
            <Route path="/ajout" component={Ajout}/>

        </Router>
        
          
      </div>
  );
  }
    
}

export default App;
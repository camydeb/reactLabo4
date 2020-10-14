import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './components/logo/logo';
import Ajout from './components/ajout/ajout';
import Liste from './components/liste.js/liste';
import Edit from './components/edit/edit';
import AjoutDep from './components/ajoutDep/ajoutDep';



class App extends React.Component {
  render(){
    return(
      <div className="container">
        
        <Router>
            <Navbar/> 
            <Logo/>
            <Route path="/Liste" component={Liste}/>
            <Route path="/ajout" component={Ajout}/>
            <Route path="/ajoutDep" component={AjoutDep}/>
            <Route path="/edit/:id" component={Edit}/>  


        </Router>
        
          
      </div>
  );
  }
    
}

export default App;
import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){

        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Bienvenue</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/liste" className="nav-link">Utilisateurs</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/ajout" className="nav-link">Ajout d'utilisateurs</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/ajoutDep" className="nav-link">Ajout departements</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

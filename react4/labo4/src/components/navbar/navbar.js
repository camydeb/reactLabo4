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
                        </li>
                        <li className="navbar-item">
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

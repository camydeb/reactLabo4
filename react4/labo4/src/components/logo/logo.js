import React from 'react';
import logo1 from '../logo/logo1.png';


class Logo extends React.Component{

        render(){
        return(
            <div>            
                <div className="container">
                    <div className="row">
                        <a href="https://fr.reactjs.org/"><img src={logo1} alt="Logo" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logo;
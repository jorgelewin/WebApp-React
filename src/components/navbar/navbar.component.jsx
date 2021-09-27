import React from 'react';
import './navbar.component.css';

class Navbar extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <header>
                <h4 className="name">POKEDEX</h4>
            <nav>
            <a href="/" className="link_Character">CHARACTER DETAIL</a>
           
          </nav>
          <a href="/" className="link_About">ABOUT</a>
          </header>
        );
    }
}

export default Navbar;
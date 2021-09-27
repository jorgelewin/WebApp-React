import React from 'react';
import './navbar.component.css';
import pokebola from './pokebola.svg';


class Navbar extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <header>
                <img className="logo" src={pokebola} alt="logo" height="50px"/>
                <h4 className="name">POKEDEX</h4>
            
            <a href="/" className="link_Character">CHARACTER DETAIL</a>
          <a href="/" className="link_About">ABOUT</a>
          </header>
        );
    }
}

export default Navbar;
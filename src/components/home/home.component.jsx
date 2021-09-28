import React from 'react';
import Character from '../character/character.component';
import Data from '../../data/data.json';
import './home.component.css'

class Home extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
            {Data.Characters.map((evento) =>  <Character nombre={evento.name} foto={evento.photo} />  )} 
            </div>
            </div>
        );
    }
}

export default Home;
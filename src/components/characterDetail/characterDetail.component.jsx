import React from 'react';
import Data from '../../data/data.json'
import './characterDetail.component.css'

class CharacterDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Bulbasaur",
            type: ["Planta", "Veneno"],
            description: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
            photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            height: 0.7,
            weight: 6.9,
            ability: "Espesura" 
        }
    }

    onChangeCharacterDetail = (evento) => {
        evento.preventDefault();
        Data.Characters.find((element) => {
            if (element.name === evento.target.value) {
                this.setState({
                    name: element.name,
                    type: element.type,
                    description: element.description,
                    photo: element.photo,
                    height: element.height,
                    weight: element.weight,
                    ability: element.ability,
                });
            }
        });
    };

    render(){
        return (
            <div onChange={(evento) => this.onChangeCharacterDetail(evento)} className="characterDetail">
                <select id="characters">
                {Data.Characters.map((evento) =>  <option value={evento.name}>{evento.name}</option>  )}  
                </select>
                <div className="card">
                    <img src={this.state.photo} alt="" />
                      <h4>{this.state.name}</h4> 
                      <p>{this.state.description}</p>
                      <hr />
                       <div className="container">
                           <div className="row">
                              <p>Tipo: {this.state.type[0]}</p>
                              <p>Habilidad: {this.state.ability}</p>
                              <p>Altura: {this.state.height} m</p>
                              <p>Peso: {this.state.weight} kg</p>
                           </div>
                       </div >
               </div> 
            </div>
        );
    }
}

export default CharacterDetail;
import React from 'react';
import './character.component.css'

class Character extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            
               <div className="character">
                    <img src={this.props.foto} alt="" />
                      <p>{this.props.nombre}</p> 
               </div>       
        );
    }
}

export default Character;
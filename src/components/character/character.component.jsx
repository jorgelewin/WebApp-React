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
                      <h4>{this.props.nombre}</h4> 
               </div>       
        );
    }
}

export default Character;
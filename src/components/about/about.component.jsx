import React from 'react';
import './about.component.css'

class About extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <footer>
                © Derechos Reservados |<a href="/">Jorge Lewin</a>
            </footer>
        );
    }
}

export default About;
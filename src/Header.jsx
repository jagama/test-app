import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            header: 'Titolone'
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <h1>{this.state.header}</h1>
            </React.Fragment>
        );
    }
}
 
export default Header;
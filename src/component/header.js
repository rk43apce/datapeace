import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

    render(){

        let {navIcon} = this.props       
        return(
            <nav className="navbar dp-navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to={`/`} className="navbar-brand">                        
                    <i className={ navIcon }></i>                                            
                </Link>  
            </nav>
        )
    }

}
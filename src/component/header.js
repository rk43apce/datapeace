import React, {Component} from 'react';

export default class Header extends Component {

    render(){

        return(
            <nav className="navbar dp-navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
                <i className="fa fa-bars "></i></a>
            </nav>
        )
    }

}
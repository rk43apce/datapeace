import React, {Component} from 'react';

export default class Search extends Component {

    render(){

        return(
           <div className="search-panel">
                <div className="wrapper">
                    <input className="input" onChange={this.props.onSearch} placeholder="Search by first name" type="text"/>
                    <span className="dp-search"><i className="fa fa-search" aria-hidden="true"></i></span>
                    <span className="underline"></span>
                </div>
           </div>
        )
    }

}
import React, {Component} from 'react';

export default class Loader extends Component {

    constructor(props){
        super(props);

    
    }

    render(){

        let {loader} = this.props

        return(

            <div className={loader? 'loading':''}></div>
        )
    }

}
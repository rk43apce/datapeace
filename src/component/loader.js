import React, {Component} from 'react';

export default class Loader extends Component {

    render(){

        let {loader} = this.props

        return(

            <div className={loader? 'loading':''}></div>
        )
    }

}
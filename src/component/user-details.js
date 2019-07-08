import React, {Component} from 'react';
import Header from './header'
export default class UserDetails extends Component {


    componentDidMount(){
 
    }

    render(){       
        
        // console.log(this.props.match.params)

        return(
           <div >
                <Header navIcon={'fa fa-arrow-left'}/>    
                <h1>USer Details</h1>
           </div>
        )
    }

}
import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Table extends Component {

    constructor(props){
        super(props);        
        this.state = {
            sortBy: 'first_name'
        }
    }

     dynamicSort = (property)=> {
        var sortOrder = 1;
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    shortBy=(value)=>{
        this.setState({sortBy:value})
    }
    


    render(){
        
        let {sortBy} =  this.state        
        let {users} =  this.props 
               
        users.sort(this.dynamicSort(sortBy)) 

        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" onClick={()=>this.shortBy('first_name')} >First Name <i className="fa fa-sort"></i></th>
                        <th scope="col" onClick={()=>this.shortBy('last_name')}>Last Name <i className="fa fa-sort"></i></th>
                        <th scope="col" onClick={()=>this.shortBy('company_name')}>Company Name <i className="fa fa-sort"></i></th>
                        <th scope="col" onClick={()=>this.shortBy('city')}>City <i className="fa fa-sort"></i></th>  
                        <th scope="col" onClick={()=>this.shortBy('zip')}>Zip <i className="fa fa-sort"></i></th>
                        <th scope="col" onClick={()=>this.shortBy('email')}>Email <i className="fa fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user=>{
                     
                           return( 
                                
                                <tr key={user.id}>    
                                    <td>
                                        <Link to={`/user/${user.id}`}>
                                            {user.first_name}&nbsp;
                                        </Link>               
                                     </td>
                                    <td>{user.last_name}</td>
                                    <td>{user.company_name}</td>
                                    <td>{user.city}</td>                                  
                                    <td>{user.zip}</td>
                                    <td>{user.email}</td>                                   
                                </tr> 
                            )
                        })
                    }
                                 
                </tbody>
            </table>
        )
    }

}
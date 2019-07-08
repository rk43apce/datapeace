import React, {Component} from 'react';


export default class Table extends Component {

    constructor(props){
        super(props);
    }

    render(){

        let {users} =  this.props

        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">First Name <i className="fa fa-sort"></i></th>
                        <th scope="col">Last Name <i className="fa fa-sort"></i></th>
                        <th scope="col">Company Name <i className="fa fa-sort"></i></th>
                        <th scope="col">City <i className="fa fa-sort"></i></th>  
                        <th scope="col">Zip <i className="fa fa-sort"></i></th>
                        <th scope="col">Email <i className="fa fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user=>{
                     
                           return( 
                           
                                <tr key={user.id}>                              
                                    <td>{user.first_name} </td>
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
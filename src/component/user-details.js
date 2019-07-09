import React, {Component} from 'react';
import Header from './header'
import axios from 'axios'
import Loader from './loader';



export default class UserDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            user:'',     
            loader:false,
            order: false,
            loader:false,
        }
    }

    componentDidMount(){
        this.inti();
    }


    inti = async ()=>{   

        let {userId}  = this.props.match.params

        try {                
            this.setState({loader:true})   
            const apiResp = await axios.get(' https://demo9197058.mockable.io/users');
            let user =  apiResp.data.filter(user=>{
                return(
                    user.id == userId
                )
            })
            this.setState({user: user})   

          } catch (error) {
            console.error(error);
          }       

          this.setState({loader:false})   
    }



    render(){       
        
        let {user, loader} =  this.state

        return(
           <div >
                <Loader loader={loader}/> 
                <Header navIcon={'fa fa-arrow-left'}/>
                <div className="container"> 
                    <div className="card mt-5">
                        <div className="card-body">

                            {
                                user[0]?
                                <div className="user-details">
                                <h3 className="my-3">
                                    {`${ user[0].first_name} ${user[0].last_name}`}
                                </h3>    

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Company
                                        <span className="text-muted">{
                                            `${ user[0].company_name}`}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                       City
                                       <span className="text-muted">{
                                            `${ user[0].city}`}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        State
                                        <span className="text-muted">{
                                            `${ user[0].state}`}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Zip
                                        <span className="text-muted">{
                                            `${ user[0].zip}`}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Email
                                        <span className="text-muted">{
                                            `${ user[0].email}`}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Web
                                        <span className="text-muted">{
                                            `${ user[0].web}`}
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Age
                                        <span className="text-muted">{
                                            `${ user[0].age}`}
                                        </span>
                                    </li>
                                </ul>
                                </div>

                                :
                                null
                            }
                                
                           
                        </div>
                    </div>   
                </div>
           </div>
        )
    }

}
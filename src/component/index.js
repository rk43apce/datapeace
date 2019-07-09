import React, {Component} from 'react';
import axios from 'axios'
import Table from './table';
import Search from './search';
import Pagination from './pagination';
import Loader from './loader';
import Header from './header'


export default class User extends Component {

    constructor(props){
        super(props);

        this.state={
            users:[],
            userPerPage:5,
            currentPage: 1,
            search:'',
            loader:false,
            order: false
        }
    }

    componentDidMount(){
        this.inti();
    }


    inti = async ()=>{
        try {
            this.setState({loader:true})                   
            const apiResp = await axios.get(' https://demo9197058.mockable.io/users');
             this.setState({users: apiResp.data})   
          } catch (error) {
            console.error(error);
          }
          this.setState({loader:false})   
    }


    setCurrentPage=(number)=>{

        this.setState({currentPage: number})
    }

    onSearch=(e)=>{
        let searchValue =  e.target.value;

        this.setState({search:searchValue});
    }

    toggleLoader=(status)=>{
        this.setState({loader: status})
    }


    render(){

            let {users, userPerPage, currentPage, search, loader} =  this.state
            users =  users.slice(1, 100);
            const indexOfLastUser = currentPage * userPerPage;       
            const indexOfFirstUser = indexOfLastUser - userPerPage; 
            users = users.filter(user=>{           
                return(
                    user.first_name.toLowerCase().search(search.toLowerCase()) !=-1
                )
            })

            let perPageUsers = users.slice(indexOfFirstUser, indexOfLastUser);

        return(
            <div>            
                <Loader loader={loader}/> 
                <Header navIcon={'fa fa-bars'}/>           
                <div className="container"> 
                <div className="card mt-5">
                   
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="search">
                                    <Search onSearch={this.onSearch} />
                                </div>
                            </div>
                        </div>  
                        <div className="line"></div>
                        <div className="">  
                            <Table users={perPageUsers}/>
                        </div>
                        <div className="">             
                            <Pagination
                                userPerPage={userPerPage}
                                indexOfFirstUser={indexOfFirstUser}                        
                                indexOfLastUser={indexOfLastUser}
                                totalUsers={users.length} 
                                setCurrentPage={this.setCurrentPage} 
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
           </div>
            </div>
        )
    }

}
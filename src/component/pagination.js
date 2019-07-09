import React, {Component} from 'react';

export default class Pagination extends Component{

    constructor(props){
        super(props)
    }

    render(){

      let {userPerPage, totalUsers, indexOfFirstUser, indexOfLastUser, currentPage} = this.props
        let pageNumbers = []        
        for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
            pageNumbers.push(i);
        }

        return(
            <nav className="">
            <ul className='pagination justify-content-center' >
               
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>                        
                        <a  href='#' onClick={()=>this.props.setCurrentPage(number)}  className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                
            </ul>
          </nav>
        )
    }

}
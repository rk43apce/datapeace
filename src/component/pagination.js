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
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>                        
                        <a  href='#' onClick={()=>this.props.setCurrentPage(number)}  className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                 <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
          </nav>
        )
    }

}
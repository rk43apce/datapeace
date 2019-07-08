import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from '../index'
import UserDetails from '../user-details'

export const Routes = (props) => {

    return (
        <Router>  
          <Route path="/" exact component={User} />
          <Route path="/user/:userId" exact component={UserDetails} />
          {/* <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} /> */}
      </Router>
    )
}

import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Company from './Company';
import Details from './Details';

class Web extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/Company" component={Company} />
          <Route path="/Company/:id" component={Details} />
        </div>
      </Router>
    );

  }
}

export default Web;

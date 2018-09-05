import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Company from './js/Company';
import Details from './js/Details';

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add( faHeart, faBookmark);

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

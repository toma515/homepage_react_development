import React,{Component} from 'react';
import axios from 'axios';

import Layout_Details from './Layout_Details';
import '../css/Common.css';
import '../css/Details.css';

class Details extends Component {

  state = {
    details : []
  }


  componentDidMount(){
    const { id } = this.props.match.params;
     axios.get('http://localhost:4000/company/'+ id)
     .then(
       response=>{
         this.setState({
           details : response.data.details
         });
       })
     .catch(
       error=>{
         console.log(error);
       });
  }

  render(){
    const { details } = this.state;

    return(
      <div>
            <Layout_Details info={details} />
        {/* {details.name} */}
      </div>


    );
  }
}

export default Details;

import React,{Component} from 'react';
import axios from 'axios';

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
        {details.map((value)=>{

          return (
            <div>{value.name}</div>
          )}
        )}
      </div>


    );
  }
}

export default Details;

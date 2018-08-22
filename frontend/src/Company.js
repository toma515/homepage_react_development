import React,{Component} from 'react';
import axios from 'axios';

import Card from './Card';
import './Company.css';

class Company extends Component {

  state = {
    count : 0,
    company : []
  }

  componentDidMount(){
    axios.get('http://localhost:4000/company')
    .then(
      response=>{
        this.setState({
          count : response.data.count,
          company : response.data.company
        });
      })
    .catch(
      error=>{
        console.log(error);
      });
  }

  companyDeatails(id){
    this.props.history.push(`/company/${id}`);
  }

  render(){

    const {count, company } = this.state;

    return(
      <div className="container">
        {company.map(value=>{
          return(
            <div onClick={this.companyDeatails.bind(this, value.id)}>
                <Card info={value} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default Company;

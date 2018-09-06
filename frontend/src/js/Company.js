import React,{Component} from 'react';
import axios from 'axios';
import update from 'react-addons-update';

// import Layout_Company from './Layout_Company';
import Company_layout from './Company_layout';

import '../css/Common.css';
import '../css/Company.css';

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

  favoriteToggle(id){
    let {company} =this.state;
    // alert("a");
    // let favorite = company[id-1].favorite;
    // console.log(company[id-1].favorite);
    this.setState({
      count : this.state.count,
       company : update   (
         this.state.company,{
           [id-1] : {
             id: {$set : company[id-1].id },
             name: {$set : company[id-1].name },
             recruit: {$set : company[id-1].recruit },
             rebate: {$set : company[id-1].rebate },
             recommendation: {$set : company[id-1].favorite === 0?
               company[id-1].recommendation+1 : company[id-1].recommendation-1 },
             favorite: {$set : company[id-1].favorite === 0? 1 : 0 },
             bookmark : {$set : company[id-1].bookmark },
             type: {$set : company[id-1].type },
             address : {$set : company[id-1].address }
           }
         }
       )
     });
  }



  render(){

    const {count, company } = this.state;

    return(
      <div className="container">
        {company.map(value=>{
          return(
                <Company_layout info={value} move_func={this.companyDeatails.bind(this, value.id)}
                  favor_func={this.favoriteToggle.bind(this, value.id)}/>
          )
        })}
      </div>
    );
  }
}

export default Company;

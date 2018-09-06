import React,{Component} from 'react';
import axios from 'axios';

// import Layout_Details from './Layout_Details';
import Details_layout from './Details_layout';
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

  favoriteToggle(favorite){
    let {details} =this.state;

    this.setState({
      details : {
        id: details.id,
        name: details.name,
        recruit: details.recruit,
        rebate: details.rebate,
        recommendation: favorite === 0? details.recommendation + 1 : details.recommendation - 1 ,
        favorite: favorite === 0? 1 : 0,
        bookmark : details.bookmark,
        type: details.type,
        address : details.address }
     });
  }

  bookmarkToggle(bookmark){
    let {details} =this.state;

    this.setState({
      details : {
        id: details.id,
        name: details.name,
        recruit: details.recruit,
        rebate: details.rebate,
        recommendation: details.recommendation ,
        favorite: details.favorite,
        bookmark : bookmark === 0? 1 : 0,
        type: details.type,
        address : details.address }
     });
  }


  render(){
    const { details } = this.state;

    return(
      <div>
            <Details_layout info={details} favor_func={this.favoriteToggle.bind(this, details.favorite)}
            book_func={this.bookmarkToggle.bind(this, details.bookmark)}/>
        {/* {details.name} */}
      </div>


    );
  }
}

export default Details;

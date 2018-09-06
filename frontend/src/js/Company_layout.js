import React,{Component} from 'react';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Company_layout extends Component {

  render(){
    let {info, move_func, favor_func } = this.props;
    let color = info.favorite === 0? 'gray' : 'red';
    return(
      <div key={info.id} className="cp_card">
        <div className="cp_item" >
          <div onClick={move_func}>
            <div className="cp_photo" >
            </div>
            <div className="cp_info" >
              <h3>{info.recruit}</h3>
              <div className="cp_name">{info.name}</div>
              <p>채용 보상금 {info.rebate} 원</p>
            </div>
          </div>
          <div className="cp_opt" >
            <div className="cp_recom" >
              {info.recommendation > 0 && <span>{info.recommendation} 명 추천 </span>}
            </div>
              <FontAwesomeIcon icon="heart" size="2x" className={`cp_favorite ${color}`}
               onClick={favor_func}/>
            {/* <div className="cp_favorite" style = {{background: bg}}></div> */}
          </div>
        </div>
      </div>

    );
  }
}

export default Company_layout;

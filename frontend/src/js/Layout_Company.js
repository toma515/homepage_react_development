import React from 'react';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout_Company = ({info, func}) =>{
  let bg = info.favorite === 0? 'none' : 'red';


  return (
    <div key={info.id} className="cp_card">
      <div className="cp_item" >
        <div className="cp_photo" >

        </div>
        <div className="cp_info" >
          <h3>{info.recruit}</h3>
          <div className="cp_name">{info.name}</div>
          <p>채용 보상금 {info.rebate} 원</p>
        </div>
        <div className="cp_opt" >
          <div className="cp_recom" >
            {info.recommendation > 0 && <span>{info.recommendation} 명 추천 </span>}
          </div>
          <FontAwesomeIcon icon="heart" size="2x" 
            className="cp_favorite" style = {{color: bg}} />
          {/* <div className="cp_favorite" style = {{background: bg}}></div> */}
        </div>
      </div>
    </div>
  )
}

export default Layout_Company;

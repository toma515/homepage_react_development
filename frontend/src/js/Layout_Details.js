import React from 'react';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout_Details = ({info}) =>{

  let bg ='none';
  if(info.favorite===1) bg = 'red';

  return (

    <div className="container">

      <div className="dt_box1">
        <div className="dt_photo">
          <div className="dt_rebate">
            <p>채용성공시 추천사 작성인에게 {info.rebate} 원</p>
            <p>지원자에게 {info.rebate} 원</p>
          </div>
        </div>
        <div className="dt_detail">
          <div className="dt_title">
            <div className="dt_logo"></div>
            <div className="dt_title2">
              <h3>{info.recruit}</h3>
              <div className="dt_name">{info.name} • {info.address}</div>
            </div>
          </div>
            <div className="dt_explan">채용설명</div>
        </div>
      </div>
      <div className="dt_box2">
        <div className="dt_btn dt_btn1" on>
          <FontAwesomeIcon icon="heart" className="dt_favorite" style={{color:bg}}/>
        </div>
        <div className="dt_btn dt_btn2">
          <FontAwesomeIcon icon="bookmark" className="dt_bookmark"/>
        </div>
        <div className="dt_btn dt_btn3">공유하기</div>
        <div className="dt_btn dt_btn4">지원하기</div>

      </div>
    </div>
  )
}

export default Layout_Details;

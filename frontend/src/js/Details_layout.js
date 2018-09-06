import React,{Component} from 'react';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Details_layout extends Component {

  render(){

    let {info, favor_func, book_func} = this.props;
    // let favor_color = "none";
    // if(info.favorite===1) favor_color = 'red';
    let favor_color = info.favorite === 0? 'gray' : 'red';
    let bookmark_color = info.bookmark === 0? 'gray' : 'blue';

    return(
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
        <div className={`dt_btn dt_btn1 ${favor_color}`} onClick={favor_func}>
            <FontAwesomeIcon icon="heart" />
          </div>
          <div className={`dt_btn dt_btn2 ${bookmark_color}`} onClick={book_func}>
            <FontAwesomeIcon icon="bookmark" />
          </div>
          <div className="dt_btn dt_btn3"
            onClick={()=>{alert("공유하기를 누르셨습니다.")}}>공유하기</div>
          <div className="dt_btn dt_btn4"
            onClick={()=>{alert("지원하기를 누르셨습니다.");}}>지원하기</div>

        </div>
      </div>

    );
  }
}

export default Details_layout;

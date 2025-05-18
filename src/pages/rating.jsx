import { Link } from "react-router-dom";

import { RxAvatar } from "react-icons/rx";


export default function Rating() {

  return (
    <div>
        <div className="podium">
          <div className='podium-block'> 
            <div className="podium-color-block-1"><RxAvatar className="rating-human" /></div>
            <div className="podium-color-block-2"><RxAvatar className="rating-human" /></div>
            <div className="podium-color-block-3"><RxAvatar className="rating-human"/></div>
          </div>
      </div>
      <div className="rating-buttons">
          <Link to='/statistics'><div className="rating-button-inner">Статистика</div></Link>
          <Link to='/rating'><div className="rating-button-inner">Рейтинг</div></Link>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";


export default function Statistics() {
  return (
    <div className="rating-buttons">
        <div className="rating-button-inner"><Link to='/statistics'>Статистика</Link></div>
        <div className="rating-button-inner"><Link to='/rating'>Рейтинг</Link></div>
    </div>
  );
}
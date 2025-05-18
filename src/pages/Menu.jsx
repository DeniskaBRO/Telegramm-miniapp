import { Link } from "react-router";

import { useUser } from '../contexts/UserContext';

import { RxAvatar } from "react-icons/rx";
import { SlArrowRight } from "react-icons/sl";

export default function Menu() {

  const InfoUser = useUser();

  const user = InfoUser?.user;

  return (
    <div className="menu">
      <div className="menu-avatar-block">
        <RxAvatar className="menu-avatar-icon"/>
        <div className="menu-avatar-text">
          {user?.first_name} --- {InfoUser?.level} lvl
        </div>
      </div>
      <div className="menu-tab"><Link to="/newnote">Добавить запись<SlArrowRight className="menu-right-arrow"/></Link></div>
      <div className="menu-tab"><Link to="/yournotes">Ваши записи<SlArrowRight className="menu-right-arrow"/></Link></div>
      <div className="menu-tab"><Link to="/statistics">Статистика<SlArrowRight className="menu-right-arrow"/></Link></div>
      <div className="menu-tab"><Link to="/achieves">Достижения<SlArrowRight className="menu-right-arrow"/></Link></div>
      <div className="menu-tab"><Link to="/handbook">Справочник<SlArrowRight className="menu-right-arrow"/></Link></div>
    </div>
  );
}
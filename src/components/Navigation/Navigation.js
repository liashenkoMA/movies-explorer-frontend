import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';
import Navicon from '../../images/Navicon.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export function Navigation(props) {

  const user = React.useContext(CurrentUserContext);
  const [open, setOpen] = React.useState(true);
  const [loggedIn, setloggedIn] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (user.email) {
      setloggedIn(true)
    }
  }, [user, setloggedIn]);

  function isOpenMenu() {
    setOpen(!open);
  };

  function handleClick() {
    navigate(props.rout.profile);
  };

  return (
    <nav className={`navigation ${!open ? 'navigation_type_open' : ''}`}>
      {loggedIn ? (
        <>
          <button type="button" className={`navigation__button ${open ? 'navigation__button_type_open' : 'navigation__button_type_close'}`} onClick={isOpenMenu}></button>
          <div className={`navigation__conteiner ${open ? 'navigation__conteiner_type_loggedoff' : 'navigation__conteiner_type_loggeon'}`}>
            <ul className="navigation__links">
              <li className="navigation__link navigation__link_type_burger"><Link to={props.rout.main} className={`navigation__rout ${location.pathname === props.rout.main && 'navigation__rout_type_action'}`} >Главная</Link></li>
              <li className="navigation__link"><Link to={props.rout.movies} className={`navigation__rout ${location.pathname === props.rout.movies && 'navigation__rout_type_action'}`} >Фильмы</Link></li>
              <li className="navigation__link"><Link to={props.rout.savedmovies} className={`navigation__rout ${location.pathname === props.rout.savedmovies && 'navigation__rout_type_action'}`} >Сохранённые фильмы</Link></li>
            </ul>
            <button type="button" onClick={handleClick} className={`navigation__btn-profile navigation__btn-profile_type_profile ${location.pathname === props.rout.main && 'navigation__btn-profile_page-main'} ${!open ? 'navigation__btn-profile_type_burger' : ''}`} ><img src={Navicon} alt="Навигация" className="navigation__icon"></img>Аккаунт</button>
          </div>
        </>
      ) : (
        <div className="navigation__conteiner navigation__conteiner_type_loggedIn">
          <Link to={props.rout.register} className="navigation__link navigation__link_type_loggedIn">Регистрация</Link>
          <Link to={props.rout.login} className="navigation__btn">Войти</Link>
        </div>
      )}
    </nav>
  );
}

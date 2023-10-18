import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export function MoviesCard(props) {

  const [save, setSave] = React.useState(false);
  const location = useLocation();

  function handleClick() {
    setSave(!save);
  };

  function durationFilm() {
    const h = Math.trunc(props.duration / 60);
    const m = props.duration % 60;
    return `${h}ч${m}м`;
  }

  function classNameBtn() {
    if (location.pathname === props.rout.savedmovies) {
      return 'moviescard__btn_type_deleteicon';
    } else {
      return `moviescard__btn_type_icon ${save ? 'moviescard__btn_type_activeicon' : ''}`
    }
  }

  return (
    <div className="moviescard">
      <img src={props.image} className="moviescard__img" alt={`Картинка к фильму - ${props.name}`}></img>
      <div className="moviescard__description">
        <h2 className="moviescard__title">{props.name}</h2>
        <span className="moviescard__duration">{durationFilm()}</span>
        <button onClick={handleClick} className={`moviescard__btn ${classNameBtn()}`}></button>
      </div>
    </div>
  );
}
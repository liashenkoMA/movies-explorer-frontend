import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { CurrentSaveMoviesContext } from '../../contexts/CurrentSaveMoviesContext';

export function MoviesCard(props) {

  const [save, setSave] = React.useState(false);
  const saveMoviesList = React.useContext(CurrentSaveMoviesContext);
  const location = useLocation();

  React.useEffect(() => {
    saveMoviesList.find((movie) => {
      if (movie.movieId === props.movie.id) {
        setSave(true);
      }
      return null;
    })
  }, [saveMoviesList]);

  function handleClick(movieCard) {
    setSave(!save);

    if (location.pathname === props.rout.movies) {
      saveOrDeleteMovie(movieCard);
    } else {
      props.onDelete(movieCard.target.offsetParent.firstChild.innerText);
    }
  };

  function saveOrDeleteMovie(movieCard) {
    if (save === false) {
      props.saveMovies(movieCard.target.offsetParent.firstChild.innerText);
    } else {
      props.onDelete(movieCard.target.offsetParent.firstChild.innerText);
    }
  }

  function durationFilm() {
    const h = Math.trunc(props.movie.duration / 60);
    const m = props.movie.duration % 60;
    return `${h}ч${m}м`;
  };

  function classNameBtn() {
    if (location.pathname === props.rout.savedmovies) {
      return 'moviescard__btn_type_deleteicon';
    } else {
      return `moviescard__btn_type_icon ${save ? 'moviescard__btn_type_activeicon' : ''}`
    }
  };

  return (
    <div className="moviescard">
      <img src={location.pathname === props.rout.movies ? `https://api.nomoreparties.co${props.movie.image.url}` : props.movie.image} className="moviescard__img" alt={`Картинка к фильму - ${props.movie.nameRU}`}></img>
      <div className="moviescard__description">
        <h2 className="moviescard__title">{props.movie.nameRU}</h2>
        <span className="moviescard__duration">{durationFilm()}</span>
        <button onClick={handleClick} className={`moviescard__btn ${classNameBtn()}`}></button>
      </div>
    </div>
  );
}
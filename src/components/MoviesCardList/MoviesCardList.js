import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { CurrentMoviesContext } from '../../contexts/CurrentMoviesContext';
import { CurrentSaveMoviesContext } from '../../contexts/CurrentSaveMoviesContext';
import Preloader from '../Preloader/Preloader';

export function MoviesCardList(props) {

  const moviesContext = React.useContext(CurrentMoviesContext);
  const moviesSaveContext = React.useContext(CurrentSaveMoviesContext);
  const [currentMovies, setCurrentMovies] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [isLoad, setisLoad] = React.useState(props.isLoading);
  const numberMovies = currentMovies.length;
  const location = useLocation();
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setisLoad(false)
      setCurrentMovies(JSON.parse(localStorage.getItem('movies')));
    } else {
      setCurrentMovies(moviesContext);
    }
  }, [setCurrentMovies, moviesContext]);

  React.useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(width)

  React.useEffect(() => {
    if (width >= 1280) {
      setTotalCount(16);
    } else if (width >= 1024 && width < 1280) {
      setTotalCount(12);
    } else if (width >= 768 && width < 1024) {
      setTotalCount(8);
    } else if (width >= 320 && width < 768) {
      setTotalCount(5);
    }
  }, [width, setTotalCount, currentMovies]);

  function addMoviesBtn() {
    if (width >= 1280) {
      setTotalCount(totalCount + 4);
    } else if (width >= 1024 && width < 1280) {
      setTotalCount(totalCount + 3);
    } else if (width >= 768 && width < 1280) {
      setTotalCount(totalCount + 2);
    } else if (width >= 320 && width < 768) {
      setTotalCount(totalCount + 2);
    }
  };

  function checkMovies(movies, title) {
    const film = movies.find((movie) => {
      if (movie.nameRU.includes(title) || movie.nameEN.includes(title)) {
        return movie;
      }
      return null
    });
    return film;
  };

  function saveFilm(title) {
    props.saveMovies(checkMovies(currentMovies, title));
  };

  function deleteFilm(title) {
    props.onDelete(checkMovies(moviesSaveContext, title))
  }

  return (
    <section className="moviescardlist">
      {isLoad
        ?
        <Preloader />
        :
        (numberMovies === 0 || props.errorMessage === true ?
          (
            <p className="moviescardlist__error-text">{props.errorMessage ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" : "Ничего не найдено"}</p>
          )
          :
          (<div className="moviescardlist__conteiner">
            {
              location.pathname === props.rout.movies ?
                currentMovies.filter((movies, index) => index < totalCount).map((movie) => (
                  <MoviesCard key={movie.id} rout={props.rout} movie={movie} saveMovies={saveFilm} onDelete={deleteFilm} />
                ))
                :
                props.currentSaveSearchMovies.map((movie) => (
                  <MoviesCard key={movie.movieId} rout={props.rout} movie={movie} onDelete={deleteFilm} />
                ))
            }
          </div>)
        )
      }
      <button type="button" className={`moviescardlist__bnt ${totalCount >= numberMovies || location.pathname === props.rout.savedmovies ? 'moviescardlist__bnt_type_off' : ''}`} onClick={addMoviesBtn}>Ещё</button>
    </section >
  );
}

import React from 'react';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Footer } from '../Footer/Footer';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { getMovies } from '../../utils/MoviesApi';
import { signUp, signIn, getUser, patchUser, signOutUser, postMovies, deleteMovies, getSaveMovies } from '../../utils/MainApi';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

import { CurrentMoviesContext } from '../../contexts/CurrentMoviesContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CurrentSaveMoviesContext } from '../../contexts/CurrentSaveMoviesContext';

function App() {

  const [currentMovies, setCurrentMovies] = React.useState([]);
  const [currentSaveMovies, setCurrentSaveMovies] = React.useState([]);
  const [currentSaveSearchMovies, setCurrentSaveSearchMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [errorMessageMovies, setErrorMessageMovies] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [saveProfile, setSaveProfile] = React.useState(false);
  const navigate = useNavigate();

  const rout = {
    main: '/',
    movies: '/movies',
    savedmovies: '/saved-movies',
    profile: '/profile',
    login: '/signin',
    register: '/signup',
    notfound: '*',
  }
  const jwt = localStorage.getItem('jwt');

  React.useEffect(() => {
    if (jwt) {
      getUser(jwt).then((data) => {
        setCurrentUser(data);
        navigate(rout.movies);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [jwt]);

  React.useEffect(() => {
    if (jwt) {
      getSaveMovies().then((moviesList) => {
        setCurrentSaveMovies(moviesList.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, [jwt]);

  function filterSearch(movies, search) {
    let moviesList = movies;

    return moviesList = moviesList.filter(function (movie) {
      if (movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search)) {
        return movie;
      }

      return null
    })
  };

  function filterCheack(movies, check) {
    let moviesList = movies;

    if (check) {
      return moviesList = moviesList.filter(function (movie) {
        return movie.duration <= 40;
      })
    } 

    return moviesList;
  };

  function handleGetAllMovies(search, check) {
    setIsLoading(true);

    getMovies().then((movies) => {

      let moviesFilters = filterSearch(movies, search);
      moviesFilters = filterCheack(moviesFilters, check);
      setCurrentMovies(moviesFilters);

      localStorage.setItem('movies', JSON.stringify(moviesFilters));
      localStorage.setItem('input', search);
      localStorage.setItem('checkbox', check);
    }).catch((err) => {
      console.log(err);
      setErrorMessageMovies(true)
    })
      .finally(() => setIsLoading(false));
  };

  function handleGetSaveMovies(search, check) {

    let moviesFilters = filterSearch(currentSaveMovies, search);

      moviesFilters = filterCheack(moviesFilters, check);
    
    setCurrentSaveSearchMovies(moviesFilters);
  };

  function onRegister(name, email, password) {
    signUp(name, email, password).then((user) => {
      setCurrentUser(user);
      navigate(rout.movies);
      setErrorMessage(false);
    }).catch((err) => {
      console.log(err);
      setErrorMessage(true)
    })
  };

  function onLogin(email, password) {
    signIn(email, password).then((user) => {
      setCurrentUser(user);
      navigate(rout.movies);
      setErrorMessage(false);
    }).catch((err) => {
      console.log(err);
      setErrorMessage(true)
    })
  };

  function checkisSaveProfile() {
    setSaveProfile(false)
  };

  function patchUserInfo(name, email) {
    patchUser(name, email)
      .then((state) => {
        setSaveProfile(true)
        setCurrentUser(state);
        setErrorMessage(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(true);
      })
      .finally(() => setTimeout(checkisSaveProfile, 3000));
  };

  function exidProfile() {
    signOutUser();
    setCurrentUser([]);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('input');
    localStorage.removeItem('checkbox');
    navigate(rout.main);
  };

  function saveMovies(movie) {
    const image = `https://api.nomoreparties.co${movie.image.url}`;
    const thumbnail = `https://api.nomoreparties.co${movie.image.url}`;

    postMovies(movie.country, movie.director, movie.duration, movie.year, movie.description, image, movie.trailerLink, thumbnail, movie.id, movie.nameRU, movie.nameEN)
      .then((movie) => {
        setCurrentSaveMovies([movie.data, ...currentSaveMovies]);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  function handleDeleteMovie(movie) {
    deleteMovies(movie._id)
      .then(() => {
        setCurrentSaveMovies((state) => state.filter((c) => c._id !== movie._id));
        setCurrentSaveSearchMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className="app">
      <CurrentMoviesContext.Provider value={currentMovies}>
        <CurrentSaveMoviesContext.Provider value={currentSaveMovies}>
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route path={rout.main} element={
                <>
                  <Header rout={rout} />
                  <Main />
                  <Footer />
                </>
              } />
              <Route path={rout.movies} element={
                <ProtectedRoute rout={rout}>
                  <Header rout={rout} />
                  <Movies rout={rout} onSubmit={handleGetAllMovies} saveMovies={saveMovies} onDelete={handleDeleteMovie} isLoading={isLoading} errorMessage={errorMessageMovies} filterCheack={filterCheack} />
                  <Footer />
                </ProtectedRoute>
              } />
              <Route path={rout.savedmovies} element={
                <ProtectedRoute rout={rout}>
                  <Header rout={rout} />
                  <SavedMovies rout={rout} onSearch={handleGetSaveMovies} onDelete={handleDeleteMovie} isLoading={isLoading} currentSaveSearchMovies={currentSaveSearchMovies} />
                  <Footer />
                </ProtectedRoute>
              } />
              <Route path={rout.profile} element={
                <ProtectedRoute rout={rout}>
                  <Header rout={rout} />
                  <Profile rout={rout} patchUser={patchUserInfo} signOutUser={exidProfile} errorMessage={errorMessage} saveProfile={saveProfile} />
                </ProtectedRoute>
              } />
              <Route path={rout.login} element={<Login rout={rout} onLogin={onLogin} errorMessage={errorMessage} />} />
              <Route path={rout.register} element={<Register rout={rout} onRegister={onRegister} errorMessage={errorMessage} />} />
              <Route path={rout.notfound} element={<NotFound />} />
            </Routes>
          </CurrentUserContext.Provider>
        </CurrentSaveMoviesContext.Provider>
      </CurrentMoviesContext.Provider>
    </div>
  );
}

export default App;

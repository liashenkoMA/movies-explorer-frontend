import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Footer } from '../Footer/Footer';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';

function App() {

  const rout = {
    main: '/',
    movies: '/movies',
    savedmovies: '/saved-movies',
    profile: '/profile',
    login: '/signin',
    register: '/signup',
    notfound: '*',
  }

  return (
    <div className="app">
      <Routes>
        <Route path={rout.main} element={
          <>
            <Header rout={rout} />
            <Main />
            <Footer />
          </>
        } />
        <Route path={rout.movies} element={
          <>
            <Header rout={rout} />
            <Movies rout={rout} />
            <Footer />
          </>
        } />
        <Route path={rout.savedmovies} element={
          <>
            <Header rout={rout} />
            <SavedMovies rout={rout} />
            <Footer />
          </>
        } />
        <Route path={rout.profile} element={
          <>
            <Header rout={rout} />
            <Profile />
          </>
        } />
        <Route path={rout.login} element={<Login rout={rout} />} />
        <Route path={rout.register} element={<Register rout={rout} />} />
        <Route path={rout.notfound} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
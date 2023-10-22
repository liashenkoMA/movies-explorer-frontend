import './SavedMovies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function SavedMovies(props) {
  return (
    <main>
      <section className="savedmovies">
        <SearchForm />
        <MoviesCardList rout={props.rout} />
      </section>
    </main>
  );
}
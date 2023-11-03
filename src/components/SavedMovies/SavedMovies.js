import './SavedMovies.css';

import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function SavedMovies(props) {
  return (
    <main>
      <section className="savedmovies">
        <SearchForm rout={props.rout} onSearch={props.onSearch} />
        <MoviesCardList rout={props.rout} onDelete={props.onDelete} isLoading={props.isLoading} currentSaveSearchMovies={props.currentSaveSearchMovies} />
      </section>
    </main>
  );
}
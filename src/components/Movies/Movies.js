import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function Movies({ rout, onSubmit, saveMovies, onDelete, isLoading, errorMessage, filterCheack }) {

  return (
    <main>
      <section className="movies">
        <SearchForm rout={rout} onSubmit={onSubmit} filterCheack={filterCheack} />
        <MoviesCardList rout={rout} saveMovies={saveMovies} onDelete={onDelete} isLoading={isLoading} errorMessage={errorMessage} />
      </section>
    </main>
  );
}
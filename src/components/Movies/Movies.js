import './Movies.css';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';

export function Movies(props) {


  return (
    <main>
      <section className="movies">
        <SearchForm />
        <MoviesCardList rout={props.rout} />
      </section>
    </main>
  );
}
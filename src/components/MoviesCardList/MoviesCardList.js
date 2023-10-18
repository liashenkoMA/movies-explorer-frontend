import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { massiv } from '../../utils/massiv.js';

export function MoviesCardList(props) {

  return (
    <section className="moviescardlist">
      <div className="moviescardlist__conteiner">
        {massiv.map((movie) => (
          <MoviesCard rout={props.rout} name={movie.name} duration={movie.duration} image={movie.image} />
        ))
        }
      </div>
      <button type="button" className="moviescardlist__bnt">Ещё</button>
    </section>
  );
}
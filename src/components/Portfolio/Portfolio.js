import './Portfolio.css';
import strelka from '../../images/strelka.svg';

export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__conteiner">
        <h3 className="portfolio__title">Портфолио</h3>
        <ol className="portfolio__description">
          <li className="portfolio__card">
            <p className="portfolio__text">Статичный сайт</p>
            <a href="https://liashenkoma.github.io/how-to-learn/" target='_blank' className="portfolio__link" rel='noopener noreferrer'>
              <img src={strelka} className="portfolio__img" alt="Ссылка на мой сайт"></img>
            </a>
          </li>
          <li className="portfolio__card">
            <p className="portfolio__text">Адаптивный сайт</p>
            <a href="https://liashenkoma.github.io/russian-travel/" target='_blank' className="portfolio__link" rel='noopener noreferrer'>
              <img src={strelka} className="portfolio__img" alt="Ссылка на мой сайт"></img>
            </a>
          </li>
          <li className="portfolio__card">
            <p className="portfolio__text">Одностраничное приложение</p>
            <a href="https://mestomaks.nomoredomainsicu.ru/" target='_blank' className="portfolio__link" rel='noopener noreferrer'>
              <img src={strelka} className="portfolio__img" alt="Ссылка на мой сайт"></img>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
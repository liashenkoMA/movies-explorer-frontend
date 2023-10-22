import './Portfolio.css';
import strelca from '../../images/strelka.svg';


export function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__conteiner">
        <h3 className="portfolio__title">Портфолио</h3>
        <ol className="portfolio__description">
          <li className="portfolio__card">
            <a href="https://liashenkoma.github.io/how-to-learn/" target='_blank' className="portfolio__link" rel='noopener noreferrer'>
              <p className="portfolio__text">Статичный сайт</p>
              <img src={strelca} className="portfolio__link-icon" alt="картинка"></img>
            </a>
          </li>
          <li className="portfolio__card">
            <a href="https://liashenkoma.github.io/russian-travel/" target='_blank' className="portfolio__link" rel='noopener noreferrer'>
              <p className="portfolio__text">Адаптивный сайт</p>
              <img src={strelca} className="portfolio__link-icon" alt="картинка"></img>
            </a>
          </li>
          <li className="portfolio__card">
            <a href="https://mestomaks.nomoredomainsicu.ru/" target='_blank' className="portfolio__link" rel='noopener noreferrer'>
              <p className="portfolio__text">Одностраничное приложение</p>
              <img src={strelca} className="portfolio__link-icon" alt="картинка"></img>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
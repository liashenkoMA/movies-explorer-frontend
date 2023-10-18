import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__conteiner">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content">
          <p className="footer__copyright">© 2023</p>
          <ol className="footer__links">
            <li className="footer__link-element"><a href='https://practicum.yandex.ru' className="footer__link" target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a></li>
            <li className="footer__link-element"><a href='https://github.com/liashenkoMA/movies-explorer-frontend' className="footer__link" target='_blank' rel='noopener noreferrer'>Github</a></li>
          </ol>
        </div>
      </div>
    </footer>
  );
}
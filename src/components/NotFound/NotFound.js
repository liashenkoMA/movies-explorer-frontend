import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <main>
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <span className="notfound__description">Страница не найдена</span>
        <button type="button" className="notfound__btn" onClick={handleClick}>Назад</button>
      </section>
    </main>
  );
}
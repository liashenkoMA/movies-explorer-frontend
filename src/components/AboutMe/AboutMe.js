import './AboutMe.css';
import photo from '../../images/photo.jpg';

export function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__conteiner">
        <h2 className="aboutme__header" id="aboutme">Студент</h2>
        <div className="aboutme__student">
          <div className="aboutme__info">
            <div>
              <h3 className="aboutme__name">Максим</h3>
              <p className="aboutme__profession">SEOшник, 30 лет</p>
              <p className="aboutme__description">Родился в Ноябрьске Тюменской области. Живу в Самаре. Блогер, геймер, турист, анимешник, учу японский язык. Окончил СГАУ им. Королева. Работаю сеошником, продвигаю сайты. Планомерно изучаю программирование.</p>
            </div>
            <a href="https://github.com/liashenkoMA" target='_blank' className="aboutme__github" rel='noopener noreferrer'>Github</a>
          </div>
          <img src={photo} alt="Моё фото" className="aboutme__photo"></img>
        </div>
      </div>
    </section>
  );
}
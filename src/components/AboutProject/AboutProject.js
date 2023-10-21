import './AboutProject.css';

export function AboutProject() {
  return (
    <section className="aboutproject">
      <div className="aboutproject__conteiner">
        <h2 className="aboutproject__header" id="aboutproject">О проекте</h2>
        <div className="aboutproject__content">
          <div className="aboutproject__leftcolumn">
            <h3 className="aboutproject__title">Дипломный проект включал 5 этапов</h3>
            <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="aboutproject__rightcolumn">
            <h3 className="aboutproject__title">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutproject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='aboutproject__duration'>
          <p className="aboutproject__time aboutproject__time_type_week">1 неделя</p>
          <p className="aboutproject__time aboutproject__typeproject aboutproject__typeproject_type_week">Back-end</p>
          <p className="aboutproject__time aboutproject__time_type_month">4 недели</p>
          <p className="aboutproject__time aboutproject__typeproject aboutproject__typeproject_type_month">Front-end</p>
        </div>
      </div>
    </section>
  );
}
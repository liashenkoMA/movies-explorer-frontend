import './Techs.css';

export function Techs() {
  return (
    <section className="techs">
      <div className="techs__body">
        <h2 className="techs__header" id="techs">Технологии</h2>
        <div className="techs__content">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ol className="techs__cards">
            <li className="techs__card">HTML</li>
            <li className="techs__card">CSS</li>
            <li className="techs__card">JS</li>
            <li className="techs__card">React</li>
            <li className="techs__card">Git</li>
            <li className="techs__card">Express.js</li>
            <li className="techs__card">mongoDB</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
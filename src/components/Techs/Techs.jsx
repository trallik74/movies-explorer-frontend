import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__inner">
        <h2 className="section-title">Технологии</h2>
        <div className="techs__content">
          <h3 className="techs__heading">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;

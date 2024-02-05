import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="section-title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__list-item">
          <p className="about-project__heading">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__list-item">
          <p className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__bar-area">
        <div className="about-project__bar">
          <div className="about-project__progression-bar about-project__progression-bar_type_back-end">
            1 неделя
          </div>
          <span className="about-project__bar-description">Back-end</span>
        </div>
        <div className="about-project__bar">
          <div className="about-project__progression-bar about-project__progression-bar_type_front-end">
            4 недели
          </div>
          <span className="about-project__bar-description">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

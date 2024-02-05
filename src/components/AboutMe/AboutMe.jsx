import "./AboutMe.css";
import photo from "../../images/about-me__photo.png";
import Portfolio from "../Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section-title">Студент</h2>
      <article className="about-me__content">
        <div className="about-me__text-сontainer">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__proffesion">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link about-me__link_type_github"
            href="https://github.com/trallik74"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фотография" className="aout-me__photo" />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;

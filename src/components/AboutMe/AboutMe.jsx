import "./AboutMe.css";
import photo from "../../images/about-me__photo.png";
import Portfolio from "../Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section-title">Студент</h2>
      <article className="about-me__content" aria-label="Информация обо мне">
        <div className="about-me__text-сontainer">
          <p className="about-me__name">Дмитрий</p>
          <p className="about-me__proffesion">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__description">
            Frontend-разаработчик, как основной фреймворк использую React. Ищу
            коллектив в котором смогу развиваться и совершенствоваться в этом
            направление. Профильное IT образование, нет коммерческого опыта
            разработки. Выбрал frontend т.к. люблю работать с визуальной
            составляющей приложения и мгновенно видеть результат своей работы.
            Имею базовое представление о работе веб-приложений, их серверной и
            клиентской частей. Изучаю новые технологии, читаю техническую
            документацию и литературу, стремлюсь к "чистоте" своего кода.
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
        <img src={photo} alt="Фотография" className="about-me__photo" />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;

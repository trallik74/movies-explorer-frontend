import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-list-item">
          <a
            className="portfolio__link portfolio__link_type_github"
            href="https://github.com/trallik74/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <div className="portfolio__arrow-icon" />
          </a>
        </li>
        <li className="portfolio__link-list-item">
          <a
            className="portfolio__link portfolio__link_type_github"
            href="https://github.com/trallik74/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <div className="portfolio__arrow-icon" />
          </a>
        </li>
        <li className="portfolio__link-list-item">
          <a
            className="portfolio__link portfolio__link_type_github"
            href="https://github.com/trallik74/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <div className="portfolio__arrow-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2024</p>
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-list-item">
              <a
                className="footer__menu-link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__menu-list-item">
              <a
                className="footer__menu-link"
                href="https://github.com/trallik74"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

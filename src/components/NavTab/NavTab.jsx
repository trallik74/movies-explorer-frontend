import "./NavTab.css";

function NavTab() {
  function handleClick(selectorId) {
    const element = document.getElementById(selectorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li>
          <button
            className="nav-tab__button"
            type="button"
            onClick={() => {
              handleClick('about-project');
            }}
            aria-label={`Кнопка проктрутки к секции "О проекте"`}
          >
            О проекте
          </button>
        </li>
        <li>
          <button
            className="nav-tab__button"
            type="button"
            onClick={() => {
              handleClick('techs');
            }}
            aria-label={`Кнопка проктрутки к секции "Технологии"`}
          >
            Технологии
          </button>
        </li>
        <li>
          <button
            className="nav-tab__button"
            type="button"
            onClick={() => {
              handleClick('about-me');
            }}
            aria-label={`Кнопка проктрутки к секции "Студент"`}
          >
            Студент
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;

import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

function Navigation() {
  const { isLoggedIn } = useContext(UserContext);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function handleOpenBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  return isLoggedIn ? (
    <>
      <nav
        className={`menu menu_type_loggined burger-menu ${
          isBurgerMenuOpen ? "burger-menu_active" : ""
        }`}
      >
        <div className="menu__wrapper">
          <ul className="menu__list">
            {isBurgerMenuOpen && (
              <li className="menu__list-item menu__list-item_type_home">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu__link menu__link_type_main-navigation menu__link_active"
                      : "menu__link menu__link_type_main-navigation"
                  }
                  to="/"
                  onClick={handleCloseBurgerMenu}
                >
                  Главная
                </NavLink>
              </li>
            )}
            <li className="menu__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "menu__link menu__link_type_main-navigation menu__link_active"
                    : "menu__link menu__link_type_main-navigation"
                }
                to="/movies"
                onClick={handleCloseBurgerMenu}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "menu__link menu__link_type_main-navigation menu__link_active"
                    : "menu__link menu__link_type_main-navigation"
                }
                to="/saved-movies"
                onClick={handleCloseBurgerMenu}
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <Link className="menu__link menu__link_type_account" to="/profile">
            Аккаунт
          </Link>
          {isBurgerMenuOpen && (
            <button
              type="button"
              className="burger-button burger-button_type_close"
              aria-label="Кнопка закрытия бургер-меню"
              onClick={handleCloseBurgerMenu}
            />
          )}
        </div>
      </nav>
      <button
        type="button"
        className="burger-button burger-button_type_open"
        aria-label="Кнопка открытия бургер-меню"
        onClick={handleOpenBurgerMenu}
      />
    </>
  ) : (
    <nav className="menu menu_type_auth">
      <Link className="menu__link menu__link_type_registration" to="/signup">
        Регистрация
      </Link>
      <Link className="menu__link menu__link_type_login" to="/signin">
        Войти
      </Link>
    </nav>
  );
}

export default Navigation;

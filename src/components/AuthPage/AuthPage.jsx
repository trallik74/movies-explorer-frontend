import Logo from "../Logo";
import "./AuthPage.css";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Link } from "react-router-dom";
import { useState } from "react";

function AuthPage({ isLogginPage, isSending, onSubmit }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation();
  const [isInputEdited, setIsInputEdited] = useState({});

  function onInputChange(evt) {
    handleChange(evt);
    if (evt.target.name) {
      setIsInputEdited({ ...isInputEdited, [evt.target.name]: true });
    }
  }

  return (
    <main className="auth">
      <div className="auth__content">
        <div className="auth__welcome">
          <Logo />
          <h2 className="auth-title">
            {isLogginPage ? "Рады видеть!" : "Добро пожаловать!"}
          </h2>
        </div>
        <form
          className="auth-form"
          noValidate
          autoComplete="off"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit(values);
          }}
        >
          {!isLogginPage && (
            <>
              <label className="auth-label">
                Имя
                <input
                  type="text"
                  className={`auth__input ${
                    isInputEdited.name ? "auth__input_type_edited" : ""
                  }`}
                  name="name"
                  value={values.name || ""}
                  onChange={onInputChange}
                  maxLength={30}
                  minLength={2}
                  
                  required
                />
              </label>
              <span className="auth__error-message">{errors.name || ""}</span>
            </>
          )}
          <label className="auth-label">
            E-mail
            <input
              type="email"
              className={`auth__input ${
                isInputEdited.email ? "auth__input_type_edited" : ""
              }`}
              name="email"
              value={values.email || ""}
              onChange={onInputChange}
              
              required
            />
          </label>
          <span className="auth__error-message">{errors.email || ""}</span>
          <label className="auth-label">
            Пароль
            <input
              type="password"
              className={`auth__input ${
                isInputEdited.password ? "auth__input_type_edited" : ""
              }`}
              name="password"
              value={values.password || ""}
              onChange={onInputChange}
              required
            />
          </label>
          <span className="auth__error-message">{errors.password || ""}</span>
          <button
            type="submit"
            className={`auth__button ${
              isLogginPage
                ? "auth__button_type_login"
                : "auth__button_type_registration"
            }`}
            disabled={!isValid || isSending}
          >
            {isLogginPage
              ? isSending
                ? "Вход..."
                : "Войти"
              : isSending
              ? "Регистрация..."
              : "Зарегистрироваться"}
          </button>
        </form>
        <p className="auth__link-area">
          {isLogginPage ? (
            <>
              Ещё не зарегистрированы?
              <Link className="auth__link" to="/signup">
                Регистрация
              </Link>
            </>
          ) : (
            <>
              Уже зарегистрированы?
              <Link className="auth__link" to="/signin">
                Войти
              </Link>
            </>
          )}
        </p>
      </div>
    </main>
  );
}

export default AuthPage;

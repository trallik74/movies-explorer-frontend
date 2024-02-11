import "./Profile.css";
import Header from "../Header";
import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";

function Profile({ isSending, onLogout, onProfileUpdate }) {
  const { userName, userEmail } = useContext(CurrentUserContext);
  const [isEnable, setIsEnable] = useState(false);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation();

  useEffect(() => {
    if (userName && userEmail) {
      resetForm(
        {
          name: userName,
          email: userEmail,
        },
        {},
        true
      );
    }
  }, [userName, userEmail, resetForm]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const isResStatusOk = await onProfileUpdate({
        name: values.name,
        email: values.email,
      });
      setIsEnable(!isResStatusOk);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <form
          className="profile__form"
          onSubmit={handleSubmit}
          name="profile-form"
          autoComplete="off"
          noValidate
        >
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              type="text"
              name="name"
              className="profile__input"
              value={values.name || ""}
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              disabled={!isEnable || isSending}
              required
            />
          </label>
          <span className="profile__error-message">{errors.name || ""}</span>
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              type="email"
              name="email"
              className="profile__input"
              value={values.email || ""}
              onChange={handleChange}
              disabled={!isEnable || isSending}
              required
            />
          </label>
          <span className="profile__error-message">{errors.email || ""}</span>
          {isEnable && (
            <button
              type="submit"
              className="profile__button profile__button_type_submit"
              disabled={
                !isValid ||
                isSending ||
                (values.name === userName && values.email === userEmail)
              }
            >
              {isSending ? "Сохранение..." : "Сохранить"}
            </button>
          )}
        </form>
        {!isEnable && (
          <button
            type="button"
            onClick={() => {
              setIsEnable(!isEnable);
            }}
            className="profile__button profile__button_type_edit"
          >
            Редактировать
          </button>
        )}
        <button
          type="button"
          className="profile__button profile__button_type_logout"
          aria-label="Кнопка выхода из аккаунта"
          onClick={onLogout}
        >
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;

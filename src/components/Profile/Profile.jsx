import "./Profile.css";
import Header from "../Header";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useFormValidation } from "../../hooks/useFormValidation";

function Profile({ isSending }) {
  const { userName, userEmail } = useContext(UserContext);
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

  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__title">Привет, {userName}!</h2>
        <form
          className="profile__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            setIsEnable(!isEnable);
          }}
          name="profile-form"
          noValidate
        >
          <label className="profile__label">
            <span className="profile___label-text">Имя</span>
            <input
              type="text"
              name="name"
              className="profile__input"
              value={values.name || ""}
              required
              minLength={2}
              maxLength={30}
              onChange={handleChange}
              disabled={!isEnable}
            />
          </label>
          <span className="profile___error-message">{errors.name || ""}</span>
          <label className="profile__label">
            <span className="profile___label-text">E-mail</span>
            <input
              type="email"
              name="email"
              className="profile__input"
              value={values.email || ""}
              onChange={handleChange}
              disabled={!isEnable}
              required
            />
          </label>
          <span className="profile___error-message">{errors.email || ""}</span>
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
        >
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;

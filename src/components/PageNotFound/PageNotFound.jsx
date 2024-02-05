import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main className="page-not-found">
      <p className="page-not-found__error">404</p>
      <h2 className="page-not-found__message">Страница не найдена</h2>
      <button
        className="page-not-found__button"
        onClick={goBack}
        type="button"
        aria-label="Кнопка возврата на предыдущую страницу"
      >
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;

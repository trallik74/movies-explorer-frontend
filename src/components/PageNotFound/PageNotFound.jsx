import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page__content">
      <main className="page-not-found">
        <p className="page-not-found__error">404</p>
        <p className="page-not-found__message">Страница не найдена</p>
        <button className="page-not-found__button">Назад</button>
      </main>
    </div>
  );
}

export default PageNotFound;

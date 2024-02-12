import { useLocation } from "react-router-dom";
import { MOVIE_URL } from "../../utils/const";
import "./MoviesCard.css";

function MoviesCard({
  title,
  duration,
  link,
  image,
  isSaved,
  onMovieSave,
  onMovieDelete,
}) {
  const location = useLocation().pathname;

  function convertTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  }

  function convertImageUrl(url) {
    return `${MOVIE_URL}${url}`;
  }

  return (
    <article className="movies-card" aria-label={`Карточка фильма ${title}`}>
      <a
        href={link}
        className="movies-card__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={location === "/movies" ? convertImageUrl(image) : image}
          alt={title}
        />
      </a>
      <div className="movies-card__description">
        <p className="movies-card__title">{title}</p>
        <p className="movies-card__duration">{convertTime(duration)}</p>
      </div>
      {location === "/movies" ? (
        <button
          className={`movies-card__button ${
            isSaved ? "movies-card__button_type_saved" : ""
          }`}
          type="button"
          onClick={isSaved ? onMovieDelete: onMovieSave}
        >
          {isSaved ? "" : "Сохранить"}
        </button>
      ) : (
        <button
          className="movies-card__button movies-card__button_type_delete"
          type="button"
          onClick={onMovieDelete}
        />
      )}
    </article>
  );
}

export default MoviesCard;

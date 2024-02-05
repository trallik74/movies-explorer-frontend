import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ data }) {
  return (
    <div className="movies-card-list">
      {data.length === 0 ? (
        <p className="movies-card-list__not-found-message">
          По вашему запросу ничего не найдено
        </p>
      ) : (
        data.map((movie) => (
          <MoviesCard
            title={movie.nameRU}
            duration={movie.duration}
            link={movie.trailerLink}
            image={movie.image.url}
            isSaved={movie.isSaved}
          />
        ))
      )}
    </div>
  );
}

export default MoviesCardList;

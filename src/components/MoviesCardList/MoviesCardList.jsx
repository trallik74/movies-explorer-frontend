import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useEffect, useState } from "react";
import { MOVIE_URL } from "../../utils/const";

function MoviesCardList({
  data,
  isNotFound,
  savedMoviesList,
  handleMovieSave,
  handleMovieDelete,
}) {
  const location = useLocation();
  const [moviesCardList, setMoviesCardList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(getWidth());
  const [renderSettings, setRenderSettings] = useState(handleRenderSettings());

  useEffect(() => {
    function getScreenWidth() {
      setScreenWidth(getWidth());
    }
    if (location.pathname === "/movies") {
      window.addEventListener("resize", getScreenWidth);
      setIsLoaded(true);
    }
    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/movies") {
      handleRenderSettings();
      setMoviesCardList([...data.slice(0, renderSettings.start)]);
    } else {
      setMoviesCardList([...data]);
    }
  }, [data]);

  useEffect(() => {
    if (isLoaded) {
      setMoviesCardList([
        ...moviesCardList,
        ...data.slice(
          moviesCardList.length,
          moviesCardList.length + renderSettings.more
        ),
      ]);
    }
  }, [renderSettings]);

  function handleRenderSettings() {
    if (screenWidth > 1200) {
      return { start: 12, more: 3 };
    } else if (screenWidth <= 1200 && screenWidth > 750) {
      return { start: 8, more: 2 };
    } else {
      return { start: 5, more: 2 };
    }
  }

  function getWidth() {
    return window.innerWidth;
  }

  function handleButtonClick() {
    setRenderSettings(handleRenderSettings());
  }

  return (
    <>
      <div className="movies-card-list">
        {isNotFound ? (
          <p className="movies-card-list__not-found-message">
            Ничего не найдено
          </p>
        ) : (
          moviesCardList.map((movie) => (
            <MoviesCard
              key={movie.id || movie._id}
              title={movie.nameRU}
              duration={movie.duration}
              link={movie.trailerLink}
              image={
                location.pathname === "/movies" ? movie.image.url : movie.image
              }
              isSaved={savedMoviesList.find(
                (item) => item.movieId === movie.id
              )}
              onMovieSave={() => {
                console.log("save");
                console.log(movie);
                handleMovieSave({
                  country: movie.country,
                  director: movie.director,
                  duration: movie.duration,
                  year: movie.year,
                  description: movie.description,
                  image: MOVIE_URL + movie.image.url,
                  trailerLink: movie.trailerLink,
                  thumbnail: MOVIE_URL + movie.image.formats.thumbnail.url,
                  movieId: movie.id,
                  nameRU: movie.nameRU,
                  nameEN: movie.nameEN,
                });
              }}
              onMovieDelete={() => {
                handleMovieDelete(
                  savedMoviesList.find(
                    (card) =>
                      card.movieId === movie.id ||
                      card.movieId === movie.movieId
                  )._id
                );
              }}
            />
          ))
        )}
      </div>
      {location.pathname === "/movies" &&
        !(data.length === moviesCardList.length) && (
          <button
            type="button"
            className="movies-card__more-button"
            onClick={handleButtonClick}
          >
            Ещё
          </button>
        )}
    </>
  );
}

export default MoviesCardList;

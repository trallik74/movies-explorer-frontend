import "./Movies.css";
import Header from "../Header";
import Footer from "../Footer";
import SearchForm from "../SearchForm";
import Preloader from "../Preloader";
import MoviesCardList from "../MoviesCardList";
import { useEffect, useState } from "react";

function Movies({
  isSending,
  filterMoviesList,
  getMoviesList,
  handleInfoTooltip,
  savedMoviesList,
  handleMovieSave,
  handleMovieDelete,
}) {
  const [currentMoviesList, setCurrentMoviesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitEmpty, setIsSubmitEmpty] = useState(false);
  const [isTumblerActive, setIsTumblerActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const list = JSON.parse(localStorage.getItem("movies"));
      const isActive = localStorage.getItem("isTumblerActive") === "true";
      const value = localStorage.getItem("inputValue");

      setIsTumblerActive(isActive);
      setInputValue(value);
      setCurrentMoviesList(filterMoviesList(list, isActive, value));
    }
  }, []);

  useEffect(() => {
    if (currentMoviesList.length === 0 && inputValue !== "") {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [currentMoviesList]);

  function handleChange(evt) {
    if (isSubmitEmpty) {
      setIsSubmitEmpty(false);
    }
    setInputValue(evt.target.value);
  }

  function handleTumblerChange() {
    setIsTumblerActive(!isTumblerActive);
  }

  async function handleMovieList() {
    if (!localStorage.getItem("movies")) {
      let movies;
      try {
        movies = await getMoviesList();
      } catch (err) {
        console.log(err);
        handleInfoTooltip({
          message:
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          isCorrect: false,
        });
      }
      if (movies) {
        localStorage.setItem("movies", JSON.stringify(movies));
      }

      return movies || [];
    } else {
      return JSON.parse(localStorage.getItem("movies"));
    }
  }

  async function handleSubmit() {
    if (inputValue === "") {
      setIsSubmitEmpty(true);
    } else {
      const moviesList = await handleMovieList();
      setCurrentMoviesList(
        filterMoviesList(moviesList, isTumblerActive, inputValue)
      );
      localStorage.setItem("isTumblerActive", isTumblerActive);
      localStorage.setItem("inputValue", inputValue);
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <main className="movies">
        <SearchForm
          inputValue={inputValue}
          isSubmitEmpty={isSubmitEmpty}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isTumblerActive={isTumblerActive}
          handleTumblerChange={handleTumblerChange}
          isSending={isSending}
        />
        {isSending && <Preloader />}
        <MoviesCardList
          data={currentMoviesList}
          isNotFound={isNotFound}
          savedMoviesList={savedMoviesList}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;

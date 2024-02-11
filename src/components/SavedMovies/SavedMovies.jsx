import "./SavedMovies.css";
import Header from "../Header";
import Footer from "../Footer";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";
import { useEffect, useState } from "react";

function SavedMovies({
  savedMoviesList,
  handleMovieSave,
  handleMovieDelete,
  filterMoviesList,
}) {
  const [currentMoviesList, setCurrentMoviesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitEmpty, setIsSubmitEmpty] = useState(false);
  const [isTumblerActive, setIsTumblerActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (currentMoviesList.length === 0 && inputValue !== "") {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [currentMoviesList]);

  useEffect(() => {
    setCurrentMoviesList(
      filterMoviesList(savedMoviesList, isTumblerActive, inputValue)
    );
  }, [savedMoviesList]);

  function handleChange(evt) {
    if (isSubmitEmpty) {
      setIsSubmitEmpty(false);
    }
    setInputValue(evt.target.value);
  }

  function handleTumblerChange() {
    setIsTumblerActive(!isTumblerActive);
  }

  function handleSubmit() {
    if (inputValue === "") {
      setIsSubmitEmpty(true);
    } else {
      setCurrentMoviesList(
        filterMoviesList(savedMoviesList, isTumblerActive, inputValue)
      );
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <main className="saved-movies">
        <SearchForm
          inputValue={inputValue}
          isSubmitEmpty={isSubmitEmpty}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isTumblerActive={isTumblerActive}
          handleTumblerChange={handleTumblerChange}
        />
        <MoviesCardList
          data={currentMoviesList}
          savedMoviesList={savedMoviesList}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          isNotFound={isNotFound}
        />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;

import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import {
  signup,
  signin,
  checkToken,
  updateUserInfo,
} from "../../utils/usersApi";
import { getSavedMovies, saveMovie, deleteMovie } from "../../utils/mainApi";
import { getMovies } from "../../utils/movieApi";
import { SHORT_MOVIE_DURATION } from "../../utils/const";
import errorHandler from "../../utils/errorHandler";
import PageNotFound from "../PageNotFound";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import Main from "../Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    userName: "",
    userEmail: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [infoTooltipData, setInfoTooltipData] = useState({
    isOpen: false,
    isCorrect: false,
    message: "",
  });
  const [timerId, setTimerId] = useState("");
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      getSavedMoviesList();
    }
  }, [currentUser.isLoggedIn]);

  function onInfoTooltipOpen() {
    if (timerId) {
      clearTimeout(timerId);
    }

    setTimerId(
      setTimeout(() => {
        setInfoTooltipData({ ...infoTooltipData, isOpen: false });
        setTimerId("");
      }, 3000)
    );
  }

  function handleInfoTooltip({ message, isCorrect }) {
    onInfoTooltipOpen();
    setInfoTooltipData({
      isOpen: true,
      isCorrect,
      message,
    });
  }

  function handleInfoTooltipClose() {
    setInfoTooltipData({ ...infoTooltipData, isOpen: false });
    clearTimeout(timerId);
    setTimerId("");
  }

  function authorization(token) {
    return checkToken(token).then((res) => {
      if (res) {
        setCurrentUser({
          isLoggedIn: true,
          userName: res.name,
          userEmail: res.email,
        });
      }
    });
  }

  function enterAccount({ password, email }) {
    return signin({ password, email }).then((res) => {
      if (res.token) {
        const jwt = res.token;
        localStorage.setItem("jwt", jwt);
        authorization(jwt).then((res) => {
          navigate("/movies", { replace: true });
        });
      }
    });
  }

  function handleLogin({ password, email }) {
    setIsSending(true);
    enterAccount({ password, email })
      .then((res) => {
        handleInfoTooltip({
          message: "Вы успешно авторизовались",
          isCorrect: true,
        });
      })
      .catch((err) => {
        handleInfoTooltip({
          message:
            errorHandler(err) ||
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате",
          isCorrect: false,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  function handleLogout() {
    setCurrentUser({
      isLoggedIn: false,
      userName: "",
      userEmail: "",
    });
    localStorage.clear();
  }

  function handleRegistration({ name, password, email }) {
    setIsSending(true);
    signup({ name, password, email })
      .then((res) => {
        enterAccount({ password, email }).then((res) => {
          handleInfoTooltip({
            message: "Вы успешно зарегистрировались",
            isCorrect: true,
          });
        });
      })
      .catch((err) => {
        handleInfoTooltip({
          message:
            errorHandler(err) ||
            "При регистрации пользователя произошла ошибка",
          isCorrect: false,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  function handleTokenCheck() {
    const path = location.pathname;
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      authorization(jwt)
        .then((res) => {
          navigate(path, { replace: true });
        })
        .catch((err) => {
          console.log(err);
          console.log(
            `${err.status}: При авторизации произошла ошибка. Переданный токен некорректен`
          );
          handleLogout();
        })
        .finally(() => {
          setIsLoaded(true);
        });
    } else {
      setIsLoaded(true);
    }
  }

  function handleProfileUpdate({ name, email }) {
    setIsSending(true);
    return updateUserInfo({ name, email })
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          userName: res.name,
          userEmail: res.email,
        });
        handleInfoTooltip({
          message: "Данные профиля успешно обновлены",
          isCorrect: true,
        });
        return true;
      })
      .catch((err) => {
        handleInfoTooltip({
          message:
            errorHandler(err) || "При обновлении профиля произошла ошибка",
          isCorrect: false,
        });
        return false;
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  function getMoviesList() {
    setIsSending(true);
    return getMovies()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltip({
          message:
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          isCorrect: false,
        });
        return [];
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  function getSavedMoviesList() {
    setIsSending(true);
    getSavedMovies()
      .then((res) => {
        setSavedMoviesList(res);
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltip({
          message:
            "Во время загрузки сохраненных фильмов произошла ошибка. Перезайдите в акаунт",
          isCorrect: false,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  function handleMovieSave({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) {
    saveMovie({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    })
      .then((res) => {
        setSavedMoviesList([res, ...savedMoviesList]);
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltip({
          message:
            "Что-то пошло не так... Попробуйте ещё раз или перезагрузите страницу",
          isCorrect: false,
        });
      });
  }

  function handleMovieDelete(id) {
    deleteMovie(id)
      .then((res) => {
        setSavedMoviesList((movies) =>
          movies.filter((item) => item._id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltip({
          message:
            "Что-то пошло не так... Попробуйте ещё раз или перезагрузите страницу",
          isCorrect: false,
        });
      });
  }

  function filterMoviesList(MoviesList, isTubmlerActive, searchValue) {
    let movies = [...MoviesList];

    if (isTubmlerActive) {
      movies = movies.filter((item) => item.duration <= SHORT_MOVIE_DURATION);
    }

    movies = movies.filter(
      (item) =>
        item.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchValue.toLowerCase())
    );

    return movies;
  }

  return (
    <>
      {isLoaded && (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isSending={isSending}
                  isLoggedIn={currentUser.isLoggedIn}
                  filterMoviesList={filterMoviesList}
                  getMoviesList={getMoviesList}
                  handleInfoTooltip={handleInfoTooltip}
                  savedMoviesList={savedMoviesList}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={currentUser.isLoggedIn}
                  savedMoviesList={savedMoviesList}
                  handleMovieSave={handleMovieSave}
                  handleMovieDelete={handleMovieDelete}
                  filterMoviesList={filterMoviesList}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isSending={isSending}
                  isLoggedIn={currentUser.isLoggedIn}
                  onLogout={handleLogout}
                  onProfileUpdate={handleProfileUpdate}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  isSending={isSending}
                  onLogin={handleLogin}
                  isLoggedIn={currentUser.isLoggedIn}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  isSending={isSending}
                  isLoggedIn={currentUser.isLoggedIn}
                  onRegister={handleRegistration}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
      {infoTooltipData.isOpen && (
        <InfoTooltip
          settings={infoTooltipData}
          onClose={handleInfoTooltipClose}
        />
      )}
    </>
  );
}

export default App;

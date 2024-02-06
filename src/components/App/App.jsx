import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "../PageNotFound";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register";
import Main from "../Main";
import { useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: true,
    userName: "Виталий",
    userEmail: "pochta@yandex.ru",
  });
  const [isSending, setIsSending] = useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies isSending={isSending} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile isSending={isSending} />} />
        <Route path="/signin" element={<Login isSending={isSending} />} />
        <Route path="/signup" element={<Register isSending={isSending} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;

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
import { UserContext } from "../../context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    isLoggedIn: true,
    userName: "Виталий",
    userEmail: "pochta@yandex.ru",
  });
  const [isSending, setIsSending] = useState(false);

  return (
    <UserContext.Provider value={userData}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies isSending={isSending} />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile isSending={isSending} />} />
        <Route path="/signin" element={<Login isSending={isSending} />} />
        <Route path="/signup" element={<Register isSending={isSending} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

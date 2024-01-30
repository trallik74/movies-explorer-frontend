import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "../PageNotFound";
import Header from "../Header/Header";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movies" element={<Header />} />
        <Route path="/saved-movies" element={<Header />} />
        <Route path="/profile" element={<h1>4</h1>} />
        <Route path="/signin" element={<h1>5</h1>} />
        <Route path="/signup" element={<h1>6</h1>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

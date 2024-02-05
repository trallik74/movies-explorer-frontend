import "./SavedMovies.css";
import Header from "../Header";
import Footer from "../Footer";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";

function SavedMovies() {
  const testData = [
    {
      nameRU: "«Роллинг Стоунз» в изгнании",
      duration: 61,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
      },
      isSaved: true,
    },
    {
      nameRU: "Без обратного пути",
      duration: 104,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/blur_a43fcf463d.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "Фавела на взрыве",
      duration: 80,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/881707734_640_d6a3a43358.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "«Роллинг Стоунз» в изгнании",
      duration: 61,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
      },
      isSaved: true,
    },
    {
      nameRU: "Без обратного пути",
      duration: 104,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/blur_a43fcf463d.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "Фавела на взрыве",
      duration: 80,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/881707734_640_d6a3a43358.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "«Роллинг Стоунз» в изгнании",
      duration: 61,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
      },
      isSaved: true,
    },
    {
      nameRU: "Без обратного пути",
      duration: 104,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/blur_a43fcf463d.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "Фавела на взрыве",
      duration: 80,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/881707734_640_d6a3a43358.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "«Роллинг Стоунз» в изгнании",
      duration: 61,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
      },
      isSaved: true,
    },
    {
      nameRU: "Без обратного пути",
      duration: 104,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/blur_a43fcf463d.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "Фавела на взрыве",
      duration: 80,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/881707734_640_d6a3a43358.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "«Роллинг Стоунз» в изгнании",
      duration: 61,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
      },
      isSaved: true,
    },
    {
      nameRU: "Без обратного пути",
      duration: 104,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/blur_a43fcf463d.jpeg",
      },
      isSaved: false,
    },
    {
      nameRU: "Фавела на взрыве",
      duration: 80,
      trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      image: {
        url: "/uploads/881707734_640_d6a3a43358.jpeg",
      },
      isSaved: false,
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList data={testData} />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;

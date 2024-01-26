import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from '../PageNotFound';


function App() {
  return (<>
    <Routes>
      <Route path="/" element={<h1>1</h1>} />
      <Route path="/movies" element={<h1>2</h1>} />
      <Route path="/saved-movies" element={<h1>3</h1>} />
      <Route path="/profile" element={<h1>4</h1>} />
      <Route path="/signin" element={<h1>5</h1>} />
      <Route path="/signup" element={<h1>6</h1>} />
      <Route path="*" element={ <PageNotFound />} />
    </Routes>
  </>)
}

export default App;

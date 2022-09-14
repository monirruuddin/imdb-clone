import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import Home from "./pages/Home/Home";
import Movie from "./pages/MovieDetail/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="movie/:id" element={<Movie/>} />
          <Route path="movies/:type" element={<MovieList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

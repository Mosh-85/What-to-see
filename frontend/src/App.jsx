import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";
import { useState } from "react";
import Genres from "./components/Genres";
import Postpage from "./components/Postpage";
import MovieCard from "./components/MovieCard";
import { useEffect } from "react";

function App() {
  const logedIn = localStorage.getItem("loggedInUserName")
  

  return (
    <>
      <Header logedIn={logedIn}/>
      <MovieCard />
      <Routes>
        <Route
          path="/"
          element={<Home logedIn={logedIn} />}
        />
        <Route path="/postpage" element={<Postpage />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

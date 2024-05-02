import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";
import { useState } from "react";
import Genres from "./components/Genres";
import MovieCard from "./components/MovieCard";

function App() {
  const [logedIn, setLogedIn] = useState(false);
  const userId = localStorage.getItem("loggedInUser");
  const userName = localStorage.getItem("loggedInUserName");

  

  return (
    <>
      <Header logedIn={logedIn} setLogedIn={setLogedIn} userName={userName} />
      <Routes>
        <Route
          path="/"
          element={<Home logedIn={logedIn} setLogedIn={setLogedIn} />}
        />
        <Route path="/moviecard" element={<MovieCard />} />
        <Route path="/genres" element={<Genres userId={userId}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

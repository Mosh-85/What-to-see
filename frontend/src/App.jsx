import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";
import { useState } from "react";
import Genres from "./components/Genres";
import MovieCard from "./components/MovieCard";
import Dashboard from "./components/Dashboard";

function App() {
  const [logedIn, setLogedIn] = useState(false);
  const userId = localStorage.getItem("loggedInUser");
  const userName = localStorage.getItem("loggedInUserName");
  const user2Id = localStorage.getItem("loggedInUser2");
  const user2Name = localStorage.getItem("loggedInUserName2");
  localStorage.setItem("loggedInUser2", "Pelle");/*  Sett inn user._id */
  localStorage.setItem("loggedInUserName2", "Pelle"); /* sett inn user.name */


  return (
    <>
      <Header logedIn={logedIn} setLogedIn={setLogedIn} userName={userName} />
      <Routes>
        <Route
          path="/"
          element={<Home logedIn={logedIn} setLogedIn={setLogedIn} />}
        />
        <Route path="/moviecard" element={<MovieCard userId={userId}/>} />
        <Route path="/genres" element={<Genres userId={userId}/>} />
        <Route path="/dashboard" element={<Dashboard userName={userName} user2Name={user2Name} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

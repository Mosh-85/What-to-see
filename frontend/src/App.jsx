import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";
import { useState } from "react";
import Genres from "./components/Genres";
import Dashboard from "./components/Dashboard";
import GenresPage from "./components/GenresPage";

function App() {
  const [logedIn, setLogedIn] = useState(false);
  const userId = localStorage.getItem("loggedInUser");
  const userName = localStorage.getItem("loggedInUserName");
  const user2Id = localStorage.getItem("loggedInUser2");
  const user2Name = localStorage.getItem("loggedInUserName2");

  return (
    <>
      <Header
        setLogedIn={setLogedIn}
        userName={userName}
        user2Name={user2Name}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home userName={userName} setLogedIn={setLogedIn} userId={userId} />
          }
        />
        <Route
          path="/genres"
          element={<Genres userId={userId} userName={userName} />}
        />
        <Route path="/genres/:slug" element={<GenresPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              userName={userName}
              user2Name={user2Name}
              userId={userId}
              user2Id={user2Id}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

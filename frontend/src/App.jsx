import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss";
import { useState } from "react";
import Genres from "./components/Genres";

function App() {
  const [logedIn, setLogedIn] = useState(false);
  

  return (
    <>
      <Header logedIn={logedIn} setLogedIn={setLogedIn} />
      <Routes>
        <Route
          path="/"
          element={<Home logedIn={logedIn} setLogedIn={setLogedIn} />}
        />
        <Route path="/genres" element={<Genres />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/main.scss"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>hey....</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

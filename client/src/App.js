import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Category from "./Components/Category/Category";
import National from "./Components/Category/Category_Types/National";
import International from "./Components/Category/Category_Types/International";
import Regional from "./Components/Category/Category_Types/Regional";
import Private from "./Components/Category/Category_Types/Private";
import Research from "./Components/Category/Category_Types/Research";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Category />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/national" element={<National />} />
          <Route exact path="/international" element={<International />} />
          <Route exact path="/regional" element={<Regional />} />
          <Route exact path="/private" element={<Private />} />
          <Route exact path="/research" element={<Research />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Category from "./Components/Category/Category";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import National_Data from "./Components/Pages/National_Data";

function Homepage() {
  return (
    <>

      <Navbar />
      <Home />

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/national" element={<National_Data />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

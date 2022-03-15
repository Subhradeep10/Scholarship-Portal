import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import National_Data from "./Components/Pages/National_Data";
import International_Data from "./Components/Pages/International_Data";
import Regional_Data from "./Components/Pages/Regional_Data";
import Research_Data from "./Components/Pages/Research_Data";
import Private_Data from "./Components/Pages/Private_Data";
import About from "./Components/About/About";
import Category from "./Components/Category/Category";

function Homepage() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/national" element={<National_Data />} />
        <Route path="/international" element={<International_Data />} />
        <Route path="/regional" element={<Regional_Data />} />
        <Route path="/research" element={<Research_Data />} />
        <Route path="/private" element={<Private_Data />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

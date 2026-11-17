import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Articles from "./Pages/Articles/Articles";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Connexion from "./Pages/Connexion/Connexion";

import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="app">
      <MenuBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
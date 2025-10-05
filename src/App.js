import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import Home from "./components/Home";
import Classes from "./components/Classes";
import GetStarted from "./components/GetStarted";
import Schedule from "./components/Schedule";
import Membership from "./components/Membership";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import FindUs from "./components/FindUs";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className={menuOpen ? "open" : ""}>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul onClick={() => setMenuOpen(false)}>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/classes">Klasser</Link></li>
            <li><Link to="/get-started">Börja träna</Link></li>
            <li><Link to="/schedule">Schema</Link></li>
            <li><Link to="/membership">Medlemskap</Link></li>
            <li><Link to="/about">Om oss</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/findus">Hitta hit</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/findus" element={<FindUs />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100062853135030"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/orebro_fightgym/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-icon"
            >
              <FaInstagram />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Örebro Fight Gym</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;

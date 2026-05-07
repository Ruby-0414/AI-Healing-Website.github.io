import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import AnswerBook from "./pages/AnswerBook";
import MoodDiary from "./pages/MoodDiary";
import StressGame from "./components/StressGame";
import ColoringGame from "./components/ColoringGame";
import RhythmGame from "./components/RhythmGame";
import PsychTest from "./pages/PsychTest";
import Consultation from "./pages/Consultation";
import ChatTest from "./pages/ChatTest";

import "./App.css";

/* =========================
   Navbar（新版療癒風）
========================= */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        {/* 左 */}
        <nav className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/mood">Diary</Link>
        </nav>

        {/* 中 Logo */}
        <div className="nav-center">
          <Link to="/">
            <img src="/nav-logo.png" alt="logo" />
          </Link>
        </div>

        {/* 右 */}
        <nav className="nav-right">
          <Link to="/answer">Answer</Link>
          <Link to="/stress">Relax</Link>
          <Link to="/psych" className="nav-cta">
            AI分析
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* =========================
   App Shell
========================= */
function AppShell() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/answer" element={<AnswerBook />} />
        <Route path="/mood" element={<MoodDiary />} />
        <Route path="/stress" element={<StressGame />} />
        <Route path="/coloring" element={<ColoringGame />} />
        <Route path="/rhythm" element={<RhythmGame />} />
        <Route path="/psych" element={<PsychTest />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/chat" element={<ChatTest />} />
      </Routes>
    </>
  );
}

/* =========================
   主 App
========================= */
function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
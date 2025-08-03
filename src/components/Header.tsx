import { useContext, useState, useEffect } from "react";
import { ThemeContext, type ThemeType } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showHamburger = theme === "theme2" || isSmallScreen;
  const navOpen = menuOpen && showHamburger;

  const handleNavClick = () => {
    setMenuOpen((menu) => !menu);
  };
  return (
    <header
      className={`header ${theme === "theme2" ? "theme2-always-mobile" : ""}`}
    >
      <div className="left-section">
        <img src="./logo.png" alt="logo" className="logo" />
      </div>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeType)}
        className="theme-select"
      >
        <option value="theme1">Theme 1 (Minimal)</option>
        <option value="theme2">Theme 2 (Dark)</option>
        <option value="theme3">Theme 3 (Colorful)</option>
      </select>

      <div className="right-section">
        {showHamburger && (
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}

        <nav className={`nav ${navOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

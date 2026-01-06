
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Initialize theme
        const pref = localStorage.getItem('theme');
        if (pref === 'dark') {
            document.body.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileNavOpen]);

    const toggleTheme = () => {
        if (isDark) {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={`site-header ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <div className="container header-inner">
                {/* Brand */}
                <Link className="brand" to="/" onClick={closeMobileNav}>
                    <img src={`${import.meta.env.BASE_URL}Picsart_25-09-03_21-48-52-942.png`} alt="Vishal Logo" className="logo" />
                </Link>

                {/* Desktop Nav */}
                <nav className="nav">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
                    <Link to="/skills" className={`nav-link ${isActive('/skills')}`}>Skills</Link>
                    <Link to="/experience" className={`nav-link ${isActive('/experience')}`}>Experience</Link>
                    <Link to="/education" className={`nav-link ${isActive('/education')}`}>Education</Link>
                    <Link to="/contact" className="nav-link nav-cta">Contact</Link>

                    <button
                        className="theme-toggle-btn"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="nav-toggle"
                    aria-label="Toggle menu"
                    onClick={toggleMobileNav}
                >
                    {isMobileNavOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Nav Sidebar */}
            <div className={`mobile-nav-overlay ${isMobileNavOpen ? 'open' : ''}`} onClick={closeMobileNav}></div>
            <div className={`mobile-nav-menu ${isMobileNavOpen ? 'open' : ''}`}>
                <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMobileNav}>Home</Link>
                <Link to="/projects" className={`mobile-nav-link ${isActive('/projects')}`} onClick={closeMobileNav}>Projects</Link>
                <Link to="/skills" className={`mobile-nav-link ${isActive('/skills')}`} onClick={closeMobileNav}>Skills</Link>
                <Link to="/experience" className={`mobile-nav-link ${isActive('/experience')}`} onClick={closeMobileNav}>Experience</Link>
                <Link to="/education" className={`mobile-nav-link ${isActive('/education')}`} onClick={closeMobileNav}>Education</Link>
                <Link to="/contact" className={`mobile-nav-link ${isActive('/contact')}`} onClick={closeMobileNav}>Contact</Link>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted)' }}>Switch Theme</span>
                    <button
                        className="theme-toggle-btn"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;


import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-inner">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <h3>Vishal Vishwakarma</h3>
                        <p className="muted">
                            Building digital experiences with focus on performance and usability.
                            Let's turn your idea into reality.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <div className="footer-links-col">
                            <Link to="/" className="footer-link"><FaChevronRight size={12} /> Home</Link>
                            <Link to="/projects" className="footer-link"><FaChevronRight size={12} /> Projects</Link>
                            <Link to="/skills" className="footer-link"><FaChevronRight size={12} /> Skills</Link>
                            <Link to="/experience" className="footer-link"><FaChevronRight size={12} /> Experience</Link>
                            <Link to="/education" className="footer-link"><FaChevronRight size={12} /> Education</Link>
                            <Link to="/contact" className="footer-link"><FaChevronRight size={12} /> Contact</Link>
                        </div>
                    </div>

                    {/* Socials Column */}
                    <div className="footer-col">
                        <h3>Connect</h3>
                        <div className="social-links">
                            <a href="https://github.com/iwvishal" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/vishal-vishwakarma-98485024a/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://x.com/iwvishal" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Vishal Vishwakarma. Made with <FaHeart color="#ef4444" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} /> in Globle.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

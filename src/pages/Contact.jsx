
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram, FaTelegramPlane, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    // Setup Formspree hook
    const [state, handleSubmit] = useForm("mdklprre");

    if (state.succeeded) {
        return (
            <section className="section container">
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    background: '#0f172a',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    marginTop: '40px'
                }}>
                    <FaCheckCircle size={50} color="#16b71c" style={{ marginBottom: '20px' }} />
                    <h1>Message Sent!</h1>
                    <p className="muted" style={{ fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto' }}>
                        Thanks for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <a href="/" className="btn" style={{ marginTop: '30px', display: 'inline-block' }}>Back to Home</a>
                </div>
            </section>
        );
    }

    return (
        <section className="section container">
            <h1 style={{ marginBottom: '10px' }}>Contact Me</h1>
            <p className="muted">Let's build something amazing together.</p>

            <div className="contact-container">
                {/* Left Column: Contact Info */}
                <div className="contact-info-card animate-slide-up">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Get in Touch</h3>

                    <div className="info-item">
                        <div className="info-icon"><FaMapMarkerAlt /></div>
                        <div className="info-content">
                            <h4>Location</h4>
                            <p>Mumbai , India - 421102</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon"><FaEnvelope /></div>
                        <div className="info-content">
                            <h4>Email</h4>
                            <a href="mailto:vishalradheshyamvishwakarma@gmail.com">vishalradheshyamvishwakarma@gmail.com</a>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon"><FaPhone /></div>
                        <div className="info-content">
                            <h4>Phone</h4>
                            <p>+91-8104631108</p>
                        </div>
                    </div>

                    <div className="social-links-contact">
                        <a href="https://github.com/iwvishal" target="_blank" className="social-btn"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/vishal-vishwakarma-98485024a/" target="_blank" className="social-btn"><FaLinkedin /></a>
                        <a href="https://wa.me/918104631108?text=Hello" target="_blank" className="social-btn"><FaWhatsapp /></a>
                        <a href="https://x.com/iwvishal" target="_blank" className="social-btn"><FaTwitter /></a>
                        <a href="https://www.instagram.com/iwvishal/" target="_blank" className="social-btn"><FaInstagram /></a>
                        <a href="https://t.me/iwvishal" target="_blank" className="social-btn"><FaTelegramPlane /></a>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-modern animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-modern">
                            <input
                                type="text"
                                id="name"
                                name="name" // Although Formspree focuses on email/message, keeping name is good practice
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>

                        <div className="form-group-modern">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="form-group-modern">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="form-input"
                                placeholder=" "
                                required
                            ></textarea>
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={state.submitting}
                            style={{ opacity: state.submitting ? 0.7 : 1 }}
                        >
                            <FaPaperPlane /> {state.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
    const projects = [
        {
            img: "/shop.jpg",
            title: "Featured Project: ShopSwift",
            desc: "Full-stack MERN app with product search, cart, Stripe payments & admin dashboard.",
            live: "#",
            code: "#"
        },
        {
            img: "/portfolio.jpg.avif",
            title: "Featured Project: Portfolio Website",
            desc: "Responsive personal portfolio with dark/light mode and modern UI.",
            live: "#",
            code: "#"
        },
        {
            img: "/management.jpg",
            title: "Featured Project: Task Manager",
            desc: "MERN app for task tracking, authentication, and real-time updates.",
            live: "#",
            code: "#"
        },
        {
            img: "/expenseproject.jpg",
            title: "Featured Project: Expense Tracker",
            desc: "Flutter-based expense tracker to manage income, expenses, categories, and monthly reports.",
            live: "#",
            code: "#"
        },
        {
            img: "/chatapp.png",
            title: "MERN Real-Time Chat App",
            desc: "A full-stack real-time chat application with user authentication, group chats, and instant messaging using Socket.io.",
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
            live: "#",
            code: "#"
        },
        {
            img: "/office-management.png",
            title: "Office Employees Management System",
            desc: "A comprehensive MERN stack application for managing employee records with CRUD operations, RESTful APIs, and secure MongoDB storage.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            live: "#",
            code: "#"
        },
    ];

    // FAQ State
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the MERN + Next.js stack?",
            answer: "MERN stands for MongoDB, Express.js, React, and Node.js. Next.js sits on top of React to add routing, server rendering, API routes, and great DX. Together, you get a full-stack framework to build UI, APIs, and data in one codebase."
        },
        {
            question: "How does data flow from client to database?",
            answer: "The client (React) sends HTTP requests to the server (Node/Express). The server validates the request and queries the database (MongoDB) using Mongoose models. Data is then returned as JSON to the client."
        },
        {
            question: "How do you structure a full-stack project?",
            answer: "I typically use a monorepo or a clean split: /client for the Vite/React frontend and /server for the Node.js API, sharing types and constants where possible for consistency."
        },
        {
            question: "How do you handle auth and state?",
            answer: "For auth, I use HTTP-only cookies with JWTs for security. For state management, I rely on React Context for global UI state and TanStack Query for efficient server state caching."
        },
        {
            question: "How do you deploy MERN + Next.js apps?",
            answer: "I deploy frontend apps to Vercel or Netlify for edge performance, and backend APIs to Render or Railway. Database hosting is handled via MongoDB Atlas."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Project card interval
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 2000);

        // Scroll reveal observer
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            clearInterval(interval);
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, [projects.length]);

    const currentProject = projects[currentIndex];

    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-text">
                    <div className="profile-img-container animate-slide-up">
                        <img src="/profile.jpg" alt="Vishal Vishwakarma" className="profile-img" />
                    </div>
                    <p className="badge animate-slide-up" style={{ animationDelay: '0.1s' }}>Open to opportunities</p>
                    <h1 className="animate-slide-up" style={{ animationDelay: '0.2s' }}>Hi, I'm <span className="accent">Vishal 👋🏼</span></h1>
                    <h2 className="muted animate-slide-up" style={{ animationDelay: '0.3s' }}>Full-Stack Software Developer</h2>
                    <p className="lead animate-slide-up" style={{ animationDelay: '0.4s' }}>I build fast, accessible web apps with a product mindset. React, Node.js, and pragmatic engineering are my jam.</p>
                    <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <Link to="/projects" className="btn">View Projects</Link>
                        <Link to="/contact" className="btn outline">Contact Me</Link>
                        <a href="/Resume.pdf" className="btn ghost" download>Download Resume</a>
                    </div>
                    <div className="meta animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <span>📍Kalyan,Mumbai,India</span>
                        <span>- <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalradheshyamvishwakarma@gmail.com" className="gmaill" style={{ color: "#069867ff" }}><i className="fa-solid fa-envelope"></i>vishalradheshyamvishwakarma@gmail.com</a></span> <br />

                        <span>📞 +91-8104631108</span> <br />
                        <a href="https://wa.me/918104631108?text=Hello%20Vishal%2C%20I%20am%20interested%20in%20your%20portfolio"
                            target="_blank" className="whatsapp-btn" rel="noreferrer">
                            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
                <div className="hero-card animate-slide-up" id="projectCard" style={{ animationDelay: '0.4s' }}>
                    <img src={currentProject.img} alt={currentProject.title} className="cover" />
                    <div className="card-body">
                        <h3>{currentProject.title}</h3>
                        <p className="muted">{currentProject.desc}</p>
                        <div className="card-actions">
                            <a href={currentProject.live} className="btn small">Live</a>
                            <a href={currentProject.code} className="btn small outline">Code</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="container video-section reveal reveal-up">
                <h2 className="video-section-title">Recent Project <span>Overview</span></h2>
                <div className="video-container">
                    <video
                        src="/coding-video.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="coding-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="footer-faq-section container">
                <h2 className="faq-title reveal reveal-left">Frequently Asked <span>Questions</span></h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''} reveal reveal-up`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <button className="faq-question">
                                {faq.question}
                                <FaChevronDown className="faq-icon" />
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <section className="section container about">
                <div className="grid-2">
                    <div className="reveal reveal-left">
                        <h3 style={{ color: 'rgb(112, 173, 195)' }}>About</h3>
                        <p>I'm a Software developer focused on building polished, user-centric web apps. I care about DX and UX equally — clean APIs, clean UI, and measurable impact.</p>
                        <p>Recent focus: React performance, accessible design systems, and full-stack delivery with Node/Next.</p>
                        <div className="badges">
                            <span className="pill">Remote-friendly</span>
                            <span className="pill">Open to freelance</span>
                            <span className="pill">Immediate joiner</span>
                        </div>
                    </div>
                    <aside className="card small reveal reveal-right">
                        <h4>At a glance</h4>
                        <ul>
                            <li>⚡ 3-4 production-grade projects shipped</li>
                            <li>🧪 Comfortable with testing & CI</li>
                            <li>🚀 Loves performance tuning & DX</li>
                        </ul>
                    </aside>
                </div>
            </section>
            {/* CTA Section */}

            <section className="cta-section reveal reveal-scale">
                <div className="container cta-content">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let's transform your ideas into beautifully crafted digital experiences. Get in touch and let's discuss your next project.</p>
                    <a
                        href="https://wa.me/918104631108?text=Hello%20Vishal%2C%20I%20am%20interested%20in%20discussing%20a%20new%20project."
                        target="_blank"
                        rel="noreferrer"
                        className="cta-whatsapp-btn"
                    >
                        <i className="fab fa-whatsapp"></i> Let's Talk on WhatsApp
                    </a>
                </div>
            </section>
        </section>
    );
};

export default Home;

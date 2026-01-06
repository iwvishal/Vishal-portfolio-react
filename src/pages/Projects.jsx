
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            img: "chatapp.png",
            title: "MERN Real-Time Chat App",
            desc: "A full-stack real-time chat application with user authentication, group chats, and instant messaging using Socket.io.",
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
            live: "https://iwvishalchat.vercel.app",
            code: "https://github.com/iwvishal/ChatifyApp"
        },
        {
            img: "office-management.png",
            title: "Office Employees Management System",
            desc: "A comprehensive MERN stack application for managing employee records with CRUD operations, RESTful APIs, and secure MongoDB storage.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            live: "#",
            code: "#"
        },
        {
            img: "portfolio-preview.png",
            title: "MyPortfolio — Professional Portfolio",
            desc: "A modern, responsive portfolio website built with React.js, featuring glassmorphism, smooth animations, and interactive components.",
            tags: ["React.js", "Vanilla CSS", "Framer Motion"],
            live: "https://iwvishal.netlify.app/",
            code: "https://github.com/iwvishal/myFinalPortfolio"
        },
        {
            img: "gossip.png",
            title: "Gossip — Social Media Platform",
            desc: "Developed a cross-platform social media application for a freelance client while collaborating with a professional development team. Focused on real-time features and seamless UI/UX.",
            tags: ["Flutter", "Dart", "Firebase", "Team Collaboration"],
            live: "#",
            code: "#"
        },
        {
            img: "expenseproject.jpg",
            title: "Expense Tracker — Flutter App",
            desc: "A cross-platform mobile app to manage daily expenses, visualize spending with charts, and set budget goals.",
            tags: ["Flutter", "Dart", "Firebase"],
            live: "https://github.com/iwvishal/expenseManager#",
            code: "https://github.com/iwvishal/expenseManager"
        },

        {
            img: "shop.jpg",
            title: "ShopSwift — E-commerce Store",
            desc: "Full-stack MERN app with product search, cart, payments (Stripe), and admin dashboard.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            live: "#",
            code: "#"
        },




    ];

    return (
        <section className="section container">
            <h1 style={{ marginBottom: '10px' }}>Projects</h1>
            <p className="muted">A selection of things I've built and shipped.</p>

            <div className="projects-grid-modern">
                {projects.map((project, index) => (
                    <article
                        key={index}
                        className="project-card-modern animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-image-box">
                            <img src={`${import.meta.env.BASE_URL}${project.img}`} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-actions">
                                <a href={project.live} className="btn-project live" target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt size={14} /> Live Demo
                                </a>
                                <a href={project.code} className="btn-project code" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={16} /> Source
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;

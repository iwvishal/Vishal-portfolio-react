
import { useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiFlutter, SiDart, SiFirebase, SiTypescript, SiDjango } from 'react-icons/si';
import { FaTimes } from 'react-icons/fa';

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = [
        {
            name: "React",
            category: "Frontend",
            icon: <FaReact />,
            color: "#61DAFB",
            bg: "rgba(97, 218, 251, 0.1)",
            description: "A JavaScript library for building user interfaces with reusable components. React makes it painless to create interactive UIs with a virtual DOM for optimal performance."
        },
        {
            name: "Next.js",
            category: "Frontend",
            icon: <SiNextdotjs />,
            color: "#FFFFFF",
            bg: "rgba(255, 255, 255, 0.1)",
            description: "A React framework for production with server-side rendering, static site generation, API routes, and built-in optimizations for performance and SEO."
        },
        {
            name: "JavaScript",
            category: "Frontend",
            icon: <FaJs />,
            color: "#F7DF1E",
            bg: "rgba(247, 223, 30, 0.1)",
            description: "A versatile programming language that enables interactive web pages. It's the core technology of the web alongside HTML and CSS, running on both client and server."
        },
        {
            name: "HTML5",
            category: "Frontend",
            icon: <FaHtml5 />,
            color: "#E34F26",
            bg: "rgba(227, 79, 38, 0.1)",
            description: "The latest evolution of HTML, providing semantic elements, multimedia support, and improved APIs for building modern, accessible web applications."
        },
        {
            name: "CSS3",
            category: "Frontend",
            icon: <FaCss3Alt />,
            color: "#1572B6",
            bg: "rgba(21, 114, 182, 0.1)",
            description: "The styling language for the web with advanced features like flexbox, grid, animations, and responsive design capabilities for beautiful user interfaces."
        },
        {
            name: "Tailwind CSS",
            category: "Frontend",
            icon: <SiTailwindcss />,
            color: "#38B2AC",
            bg: "rgba(56, 178, 172, 0.1)",
            description: "A utility-first CSS framework that provides low-level utility classes to build custom designs quickly without leaving your HTML."
        },
        {
            name: "Bootstrap",
            category: "Frontend",
            icon: <FaBootstrap />,
            color: "#7952B3",
            bg: "rgba(121, 82, 179, 0.1)",
            description: "A popular CSS framework with pre-built components and responsive grid system for rapid UI development with consistent design patterns."
        },
        {
            name: "TypeScript",
            category: "Frontend",
            icon: <SiTypescript />,
            color: "#3178C6",
            bg: "rgba(49, 120, 198, 0.1)",
            description: "A typed superset of JavaScript that adds static type definitions, enabling better tooling, error detection, and code maintainability in large applications."
        },
        {
            name: "Flutter",
            category: "Mobile",
            icon: <SiFlutter />,
            color: "#02569B",
            bg: "rgba(2, 86, 155, 0.1)",
            description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart language."
        },
        {
            name: "Dart",
            category: "Mobile",
            icon: <SiDart />,
            color: "#0175C2",
            bg: "rgba(1, 117, 194, 0.1)",
            description: "A client-optimized programming language for fast apps on any platform. It's the language behind Flutter with strong typing and modern features."
        },
        {
            name: "Node.js",
            category: "Backend",
            icon: <FaNodeJs />,
            color: "#339933",
            bg: "rgba(51, 153, 51, 0.1)",
            description: "A JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server, enabling full-stack JavaScript development."
        },
        {
            name: "Express.js",
            category: "Backend",
            icon: <SiExpress />,
            color: "#000000",
            bg: "rgba(255, 255, 255, 0.1)",
            description: "A minimal and flexible Node.js web application framework providing a robust set of features for building web and mobile applications and APIs."
        },
        {
            name: "MongoDB",
            category: "Backend",
            icon: <SiMongodb />,
            color: "#47A248",
            bg: "rgba(71, 162, 72, 0.1)",
            description: "A NoSQL document database that stores data in flexible, JSON-like documents, making it easy to scale and adapt to changing requirements."
        },
        {
            name: "Django",
            category: "Backend",
            icon: <SiDjango />,
            color: "#092E20",
            bg: "rgba(9, 46, 32, 0.1)",
            description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design with built-in admin, ORM, and security features."
        },
        {
            name: "Firebase",
            category: "Backend",
            icon: <SiFirebase />,
            color: "#FFCA28",
            bg: "rgba(255, 202, 40, 0.1)",
            description: "Google's platform for building mobile and web applications with real-time database, authentication, hosting, and cloud functions out of the box."
        },
        {
            name: "Git",
            category: "Version Control",
            icon: <FaGitAlt />,
            color: "#F05032",
            bg: "rgba(240, 80, 50, 0.1)",
            description: "A distributed version control system for tracking changes in source code, enabling collaboration and maintaining project history efficiently."
        },
        {
            name: "GitHub",
            category: "Version Control",
            icon: <FaGithub />,
            color: "#181717",
            bg: "rgba(255, 255, 255, 0.1)",
            description: "A web-based platform for version control and collaboration using Git, offering code hosting, pull requests, issues, and CI/CD workflows."
        },
        {
            name: "Python",
            category: "Language",
            icon: <FaPython />,
            color: "#3776AB",
            bg: "rgba(55, 118, 171, 0.1)",
            description: "A high-level, interpreted programming language known for its simplicity and readability, widely used in web development, data science, and automation."
        },
    ];

    const openModal = (skill) => {
        setSelectedSkill(skill);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedSkill(null);
        // Restore body scroll
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="section container">
            <h1 className="animate-slide-up">Skills</h1>
            <p className="muted animate-slide-up" style={{ animationDelay: '0.1s' }}>
                My technical toolbelt. Click on any skill to learn more.
            </p>

            <div className="skills-grid-new">
                {skills.map((skill, index) => (
                    <div
                        className="skill-card skill-card-clickable animate-slide-up"
                        key={index}
                        onClick={() => openModal(skill)}
                        style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                        onTouchStart={() => { }}
                        role="button"
                        tabIndex={0}
                        aria-label={`View details about ${skill.name}`}
                    >
                        <div className="skill-icon-box" style={{ backgroundColor: skill.bg, color: skill.color }}>
                            {skill.icon}
                        </div>
                        <div className="skill-info">
                            <h3>{skill.name}</h3>
                            <p>{skill.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Skill Detail Modal */}
            {selectedSkill && (
                <div
                    className="skill-modal-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div
                        className="skill-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                            type="button"
                        >
                            <FaTimes />
                        </button>
                        <div className="modal-header">
                            <div className="modal-icon" style={{ backgroundColor: selectedSkill.bg, color: selectedSkill.color }}>
                                {selectedSkill.icon}
                            </div>
                            <h2>{selectedSkill.name}</h2>
                            <span className="modal-category">{selectedSkill.category}</span>
                        </div>
                        <div className="modal-body">
                            <p>{selectedSkill.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Skills;

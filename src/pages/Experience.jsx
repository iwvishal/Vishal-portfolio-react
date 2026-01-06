
import { useEffect, useRef } from 'react';

const Experience = () => {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "Freelance",
            date: "2024 — Present",
            details: [
                "Delivered responsive React apps with 95+ Lighthouse scores.",
                "Collaborated with designers; shipped pixel-perfect UIs using Tailwind.",
                "Integrated REST APIs, optimized bundle size by 30%."
            ]
        },
        {
            role: "Flutter Developer (Project) – Gossip App",
            company: "Personal Project",
            date: "Present",
            details: [
                "Currently working on a Flutter-based mobile application named “Gossip App.”",
                "Developing responsive UI components using Flutter.",
                "Integrating Firebase for authentication and backend services.",
                "Implementing real-time features and ensuring smooth user experience.",
                "Focusing on performance optimization and clean code practices."
            ]
        },
        {
            role: "BSCIT — Final year Project",
            company: "College Project", // Added for consistency or can be hidden
            date: "2025 — Present",
            details: [
                "Built a simple mobile application using Dart and Flutter framework.",
                "Integrated key components such as navigation, UI design, and widgets."
            ]
        }
    ];

    return (
        <section className="section container">
            <h1 style={{ marginBottom: '10px' }}>Experience</h1>
            <p className="muted">My professional journey and projects.</p>

            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <article
                        key={index}
                        className="experience-card animate-slide-up"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <span className="role">{exp.role}</span>
                        {exp.company && <h3 style={{ fontSize: '1rem', opacity: 0.9 }}>{exp.company}</h3>}
                        <span className="date">{exp.date}</span>
                        <ul>
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;

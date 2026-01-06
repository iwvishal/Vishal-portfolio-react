
const Education = () => {
    const educationData = [
        {
            degree: "Full-Stack Development with Python",
            institution: "Net Tech India, Thane",
            year: "Currently Pursuing (2025)",
            details: [
                "Specialization: Full-Stack Web Development using Python",
                "Key Technologies: Python, Django, HTML, CSS, JavaScript, MySQL",
                "Hands-on Projects: E-commerce Website, Blog Application, Portfolio Website",
                "Focus Areas: Backend Development, REST APIs, Frontend Integration",
                "Soft Skills: Problem Solving, Debugging, Team Collaboration"
            ]
        },
        {
            degree: "B.Sc. IT",
            institution: "Mumbai University",
            year: "2023 - 2025",
            details: [
                "Relevant coursework: Data Structures, OOP, DBMS, Operating Systems",
                "Overall final CGPI: 8.4 / 10",
                "Mini Projects: Library Management System, Portfolio Website",
                "Clubs & Hackathons: Coding Club, Winner of University Hackathon 2024",
                "Certifications: AWS Cloud Practitioner, Google Data Analytics",
                "Skills Gained: Problem Solving, Team Collaboration, Communication"
            ]
        },
        {
            degree: "12th (HSC)",
            institution: "Maharashtra State Board",
            year: "2022",
            details: [
                "Stream: Science",
                "Subjects: Physics, Chemistry, Mathematics, Computer Science",
                "Clubs/Activities: Science Club, Cultural Fest Volunteer"
            ]
        },
        {
            degree: "10th (SSC)",
            institution: "Maharashtra State Board",
            year: "2020",
            details: [
                "Board: SSC (Secondary School Certificate)",
                "Activities: Sports participation, Cultural Events, NCC/Scouts"
            ]
        }
    ];

    return (
        <section className="section container">
            <h1 style={{ marginBottom: '10px' }}>Education</h1>
            <p className="muted">My academic background and certifications.</p>

            <div className="education-grid">
                {educationData.map((edu, index) => (
                    <article
                        key={index}
                        className="education-card animate-slide-up"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <span className="institution">{edu.institution}</span>
                        <h3>{edu.degree}</h3>
                        <span className="range">{edu.year}</span>
                        <ul>
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Education;

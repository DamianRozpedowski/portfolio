import React from 'react';
import ExperienceContainer from './ExperienceContainer';

const Experience = () => {
    const experiences = [
        {
            jobTitle: "Software Engineering Intern",
            company: "Unadat",
            location: "New York, NY",
            dates: "Jul 2023 - Sep 2023",
            responsibilities: [
                "Worked with MySQL databases to structure, query, and optimize financial data for user score assignments.",
                "Applied SQL queries for data retrieval and analysis, ensuring data accuracy and consistency.",
                "Enhanced user interfaces and automated processes for improved efficiency in applications, leveraging technologies like\n" +
                "MySQL, PHP, JavaScript, HTML, CSS, and Google Cloud.",
                "Utilized agile methodologies (Scrum) to improve project efficiency and collaborated with various teams to enhance\n" +
                "applications.",

            ],
            techStack: ["JavaScript", "HTML", "CSS", "PHP", "SQL", "MySQL" , "Git", "Google Cloud Shell" ]
        },
        {
            jobTitle: "Pathway: iOS Development",
            company: "CodePath",
            location: "New York, NY",
            dates: "Sep 2022 - Dec 2022",
            responsibilities: [
                "Developed mobile applications using RESTful APIs, Apple SDKs, and Swift to deliver user-friendly functionality.",
                "Built projects, including Instagram and Twitter clones, by integrating relevant APIs to replicate core features."
            ],
            techStack: ["Swift" , "XCode"]
        },
        {
            jobTitle: "Pathway: Software Engineering/Python",
            company: "CodePath",
            location: "New York, NY",
            dates: "Jun 2022 - Aug 2022",
            responsibilities: [
                "Developed Python skills through engineer-led lectures, interactive sessions, algorithm problem-solving, CS fundamentals,\n" +
                "classic algorithms, Big O, coding patterns, and data structures",
                "Completed Technical Interview Prep pathway, focusing on technical interviewing, real-world challenges, and algorithmic problem-solving."
            ],
            techStack: ["Python"]
        },
        {
            jobTitle: "Software Engineering Micro-Credential",
            company: "New York Jobs CEO Council & CUNY",
            location: "New York, NY",
            dates: "Jun 2022 - Aug 2022",
            responsibilities: [
                "Cultivated and applied sought-after front-end and back-end development skills, bolstering proficiency in programming\n" +
                "languages such as HTML, CSS, JavaScript, Python, and SQL.",
                "Collaborated effectively with team members to lead project development, combining creative synergy and technical strengths.\n" +
                "This approach resulted in the successful completion of impactful full-stack projects.",
            ],
            techStack: ["HTML", "CSS", "JavaScript" , "Python", "SQL"]
        }
    ];

    return (
        <section className="experience">
            {experiences.map((exp, index) => (
                <ExperienceContainer
                    key={index}
                    jobTitle={exp.jobTitle}
                    company={exp.company}
                    location={exp.location}
                    dates={exp.dates}
                    responsibilities={exp.responsibilities}
                    techStack={exp.techStack}
                />
            ))}
        </section>
    );
};

export default Experience;


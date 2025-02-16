import React from 'react';

const ExperienceContainer = ({ jobTitle, company, location, dates, responsibilities, techStack }) => {
    return (
        <div className="experience-container">
            <div className="experience-header">
                <div className="job-title-date">
                    <h3 className="job-title">{jobTitle}</h3>
                    <p className="dates">{dates}</p>
                </div>
                <div className="company-location">
                    <p className="company-name">{company}</p>
                    <p className="location">{location}</p>
                </div>
            </div>

            <p className="responsibilities-title">Responsibilities</p>
            <ul className="responsibilities">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div className="tech-stack">
                <h4>Tech Stack</h4>
                <ul>
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceContainer;

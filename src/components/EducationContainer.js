import React from 'react';

const EducationContainer = ({ degree, school, dates, location, details, coursework }) => {
    return (
        <div className="education-container">
            <div className="education-header">
                <div className="degree-dates">
                    <h3 className="degree">{degree}</h3>
                    <p className="dates">{dates}</p>
                </div>
                <div className="school-location">
                    <p className="school-name">{school}</p>
                    <p className="location">{location}</p>
                </div>
            </div>

            <ul className="details">
                {details && details.length > 0 ? (
                    details.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <li>No additional details available</li>
                )}
            </ul>

            {coursework && coursework.length > 0 && (
                <div className="coursework">
                    <h4>Coursework</h4>
                    <ul>
                        {coursework.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EducationContainer;

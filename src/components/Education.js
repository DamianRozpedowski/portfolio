import React from 'react';
import EducationContainer from './EducationContainer';

const Education = () => {
    const educationData = [
        {
            degree: 'B.S. Computer Science',
            school: 'Queens College',
            dates: 'Aug 2020 - Sep 2024',
            location: 'Queens, NY', // Added location here
            details: ['GPA: 3.7', 'Cum Laude', 'Dean’s List 2020-2024'],
            coursework: [
                'Artificial Intelligence',
                'Software Engineering',
                'Data Structures',
                'Database Systems',
                'Algorithms',
                'Distributed Systems',
                'Operating Systems',
                'Computer Architecture',
                'Internet and Web Technologies',
                'Object Oriented Programming',
                'SQL Programming and Modern EDR',
                'Advanced Python Programming',
                'Computer Organization and Assembly',
                'Principles of Programming Languages'
            ],
        },
    ];

    return (
        <div className="education">
            {educationData && educationData.length > 0 ? (
                educationData.map((edu, index) => (
                    <EducationContainer key={index} {...edu} />
                ))
            ) : (
                <p>No education data available</p>
            )}
        </div>
    );
};

export default Education;

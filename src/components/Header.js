import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [selectedSection, setSelectedSection] = useState('home');

    return (
        <header>
            <nav>
                <Link
                    to="/"
                    onClick={() => setSelectedSection('home')}
                    className={selectedSection === 'home' ? 'active' : ''}
                >
                    Home
                </Link>
                <Link
                    to="/education"
                    onClick={() => setSelectedSection('education')}
                    className={selectedSection === 'education' ? 'active' : ''}
                >
                    Education
                </Link>
                <Link
                    to="/experience"
                    onClick={() => setSelectedSection('experience')}
                    className={selectedSection === 'experience' ? 'active' : ''}
                >
                    Experience
                </Link>
                <Link
                    to="/projects"
                    onClick={() => setSelectedSection('projects')}
                    className={selectedSection === 'projects' ? 'active' : ''}
                >
                    Projects
                </Link>
            </nav>
        </header>
    );
};

export default Header;

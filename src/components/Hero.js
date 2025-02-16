import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Background from './Background'; // Import the new Background component

const Hero = () => {
    return (
        <div className="hero">
            <Background /> {/* Include the Background component */}

            <div className="hero-content">
                <h1>Damian Rozpedowski</h1>
                <p>Computer Science Graduate</p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/damianroz/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/DamianRozpedowski" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="mailto:rozpedowski.damian@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={24} />
                    </a>
                </div>

                <p>
                    Focused on creating efficient, intuitive, and scalable digital solutions. My experience has reinforced how technology shapes our everyday lives and its immense potential to bring about meaningful change.
                </p>


            </div>
        </div>
    );
};

export default Hero;

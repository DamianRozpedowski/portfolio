import React from "react";
import "../index.css"; // Ensure global styles are applied

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <img
                    src="your-profile-image-url"
                    alt="Profile"
                    className="profile-image"
                />
                <h1 className="name">Damian Rozpedowski</h1>
                <h2 className="title">Fullstack Developer</h2>
                <p className="description">
                    Specialized in crafting efficient, intuitive, and scalable web interfaces. Throughout my journey, I've come to realize the pivotal role technology plays in our daily lives and its extraordinary potential to drive transformation.
                </p>
                <div className="social-links">
                    <a href="your-linkedin-url">LinkedIn</a>
                    <a href="your-github-url">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Home;

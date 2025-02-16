import React from 'react';
import profileImage from '../img/pic.jpg';

const Background = () => {
    return (
        <div className="profile-image-container">
            <div
                className="profile-image-bg"
                style={{ backgroundImage: "url('/')" }}
            ></div> {/* Background placeholder */}
            <div
                className="profile-image"
                style={{ backgroundImage: `url(${profileImage})` }}
            ></div> {/* Profile image */}
        </div>
    );
};

export default Background;

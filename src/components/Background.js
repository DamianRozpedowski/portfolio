import React from 'react';

const Background = () => {
    return (
        <div className="profile-image-container">
            <div
                className="profile-image-bg"
                style={{ backgroundImage: "url('/')" }}
            ></div> {/* Background placeholder */}
            <div
                className="profile-image"
                style={{ backgroundImage: "url('/pic.jpg')" }}
            ></div> {/* Profile image */}
        </div>
    );
};

export default Background;

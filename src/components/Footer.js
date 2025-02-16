// components/Footer.js
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Correct import

const Footer = () => {
    return (
        <footer>
            <h2>Damian Rozpedowski</h2>
            <p className="location">
                <FaMapMarkerAlt size={18} style={{ marginRight: '8px' }} /> {/* Location pin icon */}
                New York, New York, United States of America
            </p>
            <p>Computer Science Graduate</p>
            <p>© 2025 Damian Rozpedowski. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

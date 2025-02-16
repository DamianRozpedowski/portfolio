import React from 'react';
import { FaRegHeart, FaRegCommentDots } from 'react-icons/fa';
import { TbShare } from "react-icons/tb";
import profileImage from '../img/pic.jpg';

const HomeContainer = ({ title, content }) => {
    return (
        <div className="home-container">
            <div className="home-profile-section">
                <div className="home-profile-image">
                    <img
                        src={profileImage}
                        alt="Damian Rozpedowski"
                        className="profile-img"
                    />
                </div>
                <div className="profile-details">
                    <h3>Damian Rozpedowski</h3>
                    <a href="https://github.com/damianrozpedowski" target="_blank" rel="noopener noreferrer">DamianRozpedowski</a>
                </div>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>

            {/* Bottom Section */}
            <div className="home-bottom-section">
                <div className="home-buttons">
                    <button className="heart-btn"><FaRegHeart size={20} /> Like</button>
                    <button className="comment-btn"><FaRegCommentDots size={20} /> Comment</button>
                    <button className="share-btn"><TbShare size={20} /> Share</button>
                </div>
                <a href="https://www.linkedin.com/in/damianroz" target="_blank" rel="noopener noreferrer" className="follow-link">
                    Follow
                </a>
            </div>
        </div>
    );
};

export default HomeContainer;

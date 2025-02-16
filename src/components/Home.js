import React from 'react';
import HomeContainer from './HomeContainer'; // Import the renamed component

const Home = () => {
    return (
        <>
            <HomeContainer
                title="About Me"
                content="I'm Damian Rozpedowski, a Computer Science graduate passionate about leveraging technology to solve real-world problems. Throughout my academic and professional journey, I have gained experience in both front-end and back-end development, with a strong foundation in algorithms, data structures, and database management. I enjoy tackling challenges, continuously learning, and applying my skills to create innovative solutions that make a tangible impact in various industries."
            />
            <HomeContainer
                title="Technologies"
                content="I have experience working with Java, SQL, and Python, and have a deep understanding of software development principles. In addition to my expertise in web technologies like JavaScript, HTML/CSS, and PHP, I’ve worked with cloud technologies like Google Cloud and have built full-stack applications."
            />
        </>
    );
};

export default Home;

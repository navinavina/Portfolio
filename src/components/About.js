// About.js
import React from 'react';
import './About.css'; // Importing CSS for styling

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                Hi! I'm Navina, a full-stack web developer with a growing passion for creating dynamic and responsive web applications. My journey in web development started with a desire to bring ideas to life through code. I enjoy tackling challenges and am always eager to learn new technologies to improve my skills.
                </p>
                <hr />
                <h3>Skills</h3>
        <ul className="skills-list">
                <li>
        <strong>Full Stack Development</strong>
        <ol>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Node.js</li>
        </ol>
    </li>
    <li>
        <strong>Frontend Technologies</strong>
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
        </ol>
    </li>
    <li>
        <strong>Database Management</strong>
        <ol>
            <li>MongoDB</li>
            <li>SQL</li>
        </ol>
    </li>
    <li>
        <strong>Version Control</strong>
        <ol>
            <li>Git/GitHub</li>
        </ol>
    </li>
    <li>
        <strong>Other Skills</strong>
        <ol>
            <li>RESTful APIs</li>
            <li>Teaching and Communication Skills</li>
            <li>Adaptable</li>
            <li>Learnable</li>
        </ol>
    </li>
</ul>
                <hr />
                <h3>My Passion</h3>
                <p>
                    I am passionate about technology and innovation. My goal is to leverage my skills
                    to create impactful solutions that improve people's lives and contribute to the
                    tech community.
                </p>
            </div>
        </section>
    );
};

export default About;

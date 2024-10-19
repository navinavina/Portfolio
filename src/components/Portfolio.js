import React from 'react';
import './Portfolio.css'; // Importing CSS for styling
import Contact from './Contact';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-content">
                <h1 className="portfolio-title">My Projects</h1>
              
                <div className="cards">
                    <div className="card">
                        <h2>My Resume</h2>
                        <p>Click here to view my resume and professional experience.</p>
                        <a href="https://drive.google.com/file/d/1VH33wGKvogMoAD-3jDCPyIB2xuilJ5Yw/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </div>
                    <div className="card">
                        <h2>Game of rock-paper-sissor</h2>
                        <p>The Rock-Paper-Scissors game is an interactive web application where users can play the classic hand game against the computer. Built with HTML, CSS, and JavaScript, this project focuses on user-friendly design and engaging gameplay.</p>
                        <a href="https://navinavina.github.io/Game-rock-paper-scissor./" target="_blank" rel="noopener noreferrer">Visit Game</a>
                    </div>
                    <div className="card">
                        <h2>Pizza store Application</h2>
                        <p>The Pizza Store Application is a MERN stack web app that provides an intuitive interface for managing pizza orders. Users can create, read, update, and delete pizza items, with user authentication for secure access. This project showcases my skills in CRUD operations, JSON integration, and responsive design.</p>
                        <a href="https://youtu.be/_IXEJB7e34k?si=4FDH3yAjX02AboXn" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                    <div className="card">
                        <h2>Task Management System</h2>
                        <p>A web application for managing tasks and to-do lists.</p>
                        <a href="https://navinavina.github.io/Task-Tracker-application/" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                        <div className="card">
                        <h2>Certifications</h2>
                        <p>I am proud to have completed several certifications that enhance my skills and knowledge in web development and related technologies.</p>
                        <a href="https://drive.google.com/drive/folders/1WgZCaShN4MEyixbcdWHsUfR42J8_KTab?usp=sharing" target="_blank" rel="noopener noreferrer">View Certification</a>
                    </div>
                </div>
            </div>
      
        </section>
        
        
    );
};

export default Portfolio;

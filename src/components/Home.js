// Home.js
import React from 'react';
import './Home.css'; // Import your styles
import About from './About'; // Import About component
import Portfolio from './Portfolio'; // Import Portfolio component
import Contact from './Contact'; // Import Contact component
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero">
                <h1 className="name">Navina Satyajit Irabatti</h1>
                <p className="position">Full Stack Web Developer | MERN Stack | Frontend & Backend</p>
            </div>
            
            {/* Scrollable Sections */}
            <section id="about" className="section">
                <About />
            </section>
            
            <section id="portfolio" className="section">
                <Portfolio />
            </section>
         <Footer/>
            
           
        </div>
    );
};

export default Home;

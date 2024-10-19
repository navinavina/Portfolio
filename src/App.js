// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import './App.css'; // Import your CSS styles

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                    <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />

                    </Routes>
                </main>
               
            </div>
        </Router>
    );
};

export default App;

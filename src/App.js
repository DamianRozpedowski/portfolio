import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Hero /> {/* This is visible at the top */}
                <Header /> {/* This should also be visible */}
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/education" element={<Education />} />
                    </Routes>
                </div>
                <Footer /> {/* This is at the bottom */}
            </div>
        </Router>
    );
}

export default App;

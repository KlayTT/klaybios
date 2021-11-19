import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Projects from '../views/Projects';

export default function RoutePaths() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/projects" element={<Projects />} />
            </Routes>  
        </>
    )
}

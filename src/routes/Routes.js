import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Messages from '../views/Messages';
import ProjectFormView from '../views/ProjectFormView';
import ProjectsView from '../views/Projects';

export default function RoutePaths() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/projects" element={<ProjectsView />} />
                <Route exact path="/messages" element={<Messages />} />
                <Route exact path="/projectform" element={<ProjectFormView />} />
            </Routes>  
        </>
    )
}

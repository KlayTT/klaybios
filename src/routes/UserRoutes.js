import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from '../views/Contact';
import Home from '../views/Home';
import ProjectsView from '../views/Projects';

export default function UserRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/projects" element={<ProjectsView />} />
            </Routes>  
        </>
    )
}

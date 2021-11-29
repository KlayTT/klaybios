import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Messages from '../views/Messages';
import ProjectFormView from '../views/ProjectFormView';

export default function AdminRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/messages" element={<Messages />} />
                <Route exact path="/projectform" element={<ProjectFormView />} />
            </Routes>  
        </>
    )
}

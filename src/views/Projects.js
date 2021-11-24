import React, { useEffect, useState }  from 'react'
import Projects from '../components/Projects'
import { getProject } from '../api/data/bioProjectsProm'

export default function ProjectsView() {
    const [projects, setProject] = useState([]);

    useEffect(() => {
        getProject().then(setProject);
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {projects.map((project) => (
        <Projects
          key={project.firebaseKey}
          project={project}
          setProject={setProject}
        />
      ))}
    </div>
    )
}

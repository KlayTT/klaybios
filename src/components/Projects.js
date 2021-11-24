import React from 'react'
import PropTypes from 'prop-types';
import { deleteProject, getProject } from '../api/data/bioProjectsProm'

export default function Projects({ project, setProject }) {
    const handleDelete = (method) => {
        if (method === 'delete') {
            deleteProject(project.firebaseKey).then(() => {
                getProject().then(setProject)
            })
        }
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{project.projectName}</h5>
                <h1 className="card-text">{project.contributers}</h1>
                <p className="card-text">{project.projectDescription}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                    >
                    GitHub
                    </a>
                <a
                  href={project.depolyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                    >
                    Depoloyed App
                    </a>
                    <button
                    onClick={() => handleDelete('Delete')}
                    className="btn btn-danger"
                    type="button"
                    >
                    Delete
                    </button>
            </div>
            </div>
        </div>
    )
}

Projects.propTypes = {
    project: PropTypes.shape(PropTypes.obj).isRequired,
    setProject: PropTypes.func.isRequired,
  };
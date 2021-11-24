import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { createProject } from '../api/data/bioProjectsProm';

const initialState = {
    projectName: '',
    projectDescription: '',
    contributers: '',
    githubLink: '',
    depolyLink: '',
    FirebaseKey: '',
};

export default function ProjectsForm({ obj }) {
    const [formInput, setFormInput] = useState(initialState);


        useEffect(() => {
            if (obj.firebaseKey) {
                setFormInput(obj);
            } else {
                setFormInput(initialState);
            }
        }, [obj]);

        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormInput((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        };

        const handleSubmit = () => {


            if (obj) { createProject({ ...formInput }).then(() => {
                console.warn(obj);
                });
            }
        };

        return (
            <>
              <div
                className="card text-center"
              >
                <h2 className="card-header">
                  Welcome Back
                </h2>
                <div
                  className="card-body"
                >
                  <h5 className="card-title">Add a new project</h5>
                  <form onSubmit={handleSubmit}>
                    <input
                      id="projectName"
                      name="projectName"
                      value={formInput.projectName}
                      onChange={handleChange}
                      required
                      placeholder="Project Name"
                    />
                    <p />
                    <input
                      id="projectDescription"
                      name="projectDescription"
                      value={formInput.projectDescription}
                      onChange={handleChange}
                      required
                      placeholder="Project Description"
                    />
                    <p />
                    <input 
                      id="depolyLink"
                      name="depolyLink"
                      value={formInput.depolyLink}
                      onChange={handleChange}
                      required
                      placeholder="Depoly Link"
                    />
                    <p />
                    <input 
                      id="githubLink"
                      name="githubLink"
                      value={formInput.githubLink}
                      onChange={handleChange}
                      required
                      placeholder="Github Link"
                    />
                    <p />
                    <input 
                      id="contributers"
                      name="contributers"
                      value={formInput.contributers}
                      onChange={handleChange}
                      required
                      placeholder="Contributers"
                    />
                    <p />
                    <button
                      type="submit"
                      className="btn btn-info"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div
                  className="card-footer text-muted"
                >
                  :D
                </div>
              </div>
            </>
          );
        }

    ProjectsForm.propTypes = {
        obj: PropTypes.shape(PropTypes.obj),
    };

    ProjectsForm.defaultProps = {
        obj: {},
    };

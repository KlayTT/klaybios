import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { createMessage } from '../api/data/bioPromises';

const initialState = {
    firebaseKey: '',
    email: '',
    uid: '',
    name: '',
    message: '',
};

export default function ContactMeForm({ obj }) {
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

        // const resetForm = () => {
        //     setFormInput(initialState);
        // };

        const handleSubmit = () => {
            // e.preventDefualt();

            if (obj) { createMessage({ ...formInput }).then(() => {
                // resetForm();
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
                  Hello
                </h2>
                <div
                  className="card-body"
                >
                  <h5 className="card-title">Leave a Message</h5>
                  <form onSubmit={handleSubmit}>
                    <input
                      id="email"
                      name="email"
                      value={formInput.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                    <p />
                    <input
                      id="name"
                      name="name"
                      value={formInput.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                    <p />
                    <input 
                      id="message"
                      name="message"
                      value={formInput.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message"
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
                  Have a good day!
                </div>
              </div>
            </>
          );
        }

    ContactMeForm.propTypes = {
        obj: PropTypes.shape(PropTypes.obj),
    };

    ContactMeForm.defaultProps = {
        obj: {},
    };

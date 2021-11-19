import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { createMessage } from '../api/data/bioPromises';

const initialState = {
    firebaseKey: '',
    email: '',
    uid: '',
    name: '',
    message: '',
    urgent: false,
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

        const handleChecked = (e) => {
            const { name, checked } = e.target;
            setFormInput((prevState) => ({
                ...prevState,
                [name]: checked,
            }))
        }

        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormInput((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        };

        const resetForm = () => {
            setFormInput(initialState);
        };

        const handleSubmit = (e) => {
            e.preventDefualt();
            if (obj) { createMessage({ ...formInput }).then(() => {
                resetForm();
                });
            }
        };

        console.warn(obj);

        return (
            <>
              <div
                className="card text-center"
                style={{
                  background: 'white',
                  width: '40rem',
                  justifyContent: 'center',
                  border: '2px solid black',
                }}
              >
                <h2 className="card-header" style={{ border: '2px solid black' }}>
                  Hello
                </h2>
                <div
                  className="card-body"
                  style={{ justifyContent: 'space-between', border: '2px solid black' }}
                >
                  <h5 className="card-title">Leave a Message</h5>
                  <form onSubmit={handleSubmit}>
                    <input
                      style={{
                        border: '2px solid black',
                        height: '2.5rem',
                        width: '30rem',
                      }}
                      id="email"
                      name="email"
                      value={formInput.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                    <p />
                    <input
                      style={{
                        border: '2px solid black',
                        height: '2.5rem',
                        width: '30rem',
                      }}
                      id="name"
                      name="name"
                      value={formInput.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                    <p />
                    <input
                      style={{
                        border: '2px solid black',
                        height: '2.5rem',
                        width: '30rem',
                      }}
                      id="message"
                      name="message"
                      value={formInput.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message"
                    />
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="urgent">
                        <input
                          name="urgentMessage"
                          type="checkbox"
                          className="form-check-input"
                          id="urgent"
                          checked={formInput.favoriteItem}
                          onChange={handleChecked}
                        />
                        Is this a Urgent Message?
                      </label>
                    </div>
                    <p />
                    <button
                      type="submit"
                      className="btn btn-info"
                      style={{
                        border: '2px solid black',
                        height: '2.5rem',
                        marginTop: '3px',
                      }}
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div
                  className="card-footer text-muted"
                  style={{ border: '2px solid black' }}
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

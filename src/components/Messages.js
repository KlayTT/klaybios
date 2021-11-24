import React from 'react'
import PropTypes from 'prop-types';
import { deleteMessage, getMessage } from '../api/data/bioPromises'

export default function Messages({ message, setMessage }) {
    const handleDelete = (method) => {
        if (method === 'delete') {
            deleteMessage(message.firebaseKey).then(() => {
                getMessage().then(setMessage)
            })
        }
    }
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{message.name}</h5>
                <h1 className="card-text">{message.email}</h1>
                <p className="card-text">{message.message}</p>
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

Messages.propTypes = {
    message: PropTypes.shape(PropTypes.obj).isRequired,
    setMessage: PropTypes.func.isRequired,
  };

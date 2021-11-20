import React from 'react'
import button1logo from '../assets/button1logo.jpg';
import button2logo from '../assets/button2logo.jpg';

export default function Home() {
    return (
        <div>
            <h1>
                hello
            </h1>
                <div class="btn-group" role="group" aria-label="Basic example">
                <button>
                    <img src={button1logo} alt="logo" style={{ width: "5rem"}}/>
                </button>
                <button>
                    <img src={button2logo} alt="logo" style={{ width: "5rem"}}/>
                </button>
                </div>
        </div>
    )
}

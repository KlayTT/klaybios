import React from 'react';
import button1logo from '../assets/button1logo.jpg';
import button2logo from '../assets/button2logo.jpg';
import button3logo from '../assets/button3logo.png';
import button4logo from '../assets/button4logo.png';
import slide1Photo from '../assets/slide1Photo.jpg';
import button5logo from '../assets/button5logo.jpg';

export default function Home() {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={slide1Photo} alt="logo" style={{ width: "18rem"}}/>
                    <div className="card-body">
                <p className="card-text">
                Prior to starting my journey in software development, I was learning welding technology and even got certified to do three different types of welding. I enjoyed the opportunity to bend and put together metal, create art projects from scrap, and learning how to think outside of the box to complete projects. After I left the welding field, a friend of mine introduced me to software development when I was working as a software analyst. I fell in love with coding instantly when I started trying to learn it. I'm looking to create a better foundation for my family and to do something I love for a long time. 
                </p>
            </div>
        </div>
                
        <div className="btn-group" role="group" aria-label="logo group">
            <button>
                <img src={button1logo} alt="logo" style={{ width: "5rem"}}/>
            </button>
            <button>
                <img src={button2logo} alt="logo" style={{ width: "5rem"}}/>
            </button>
            <button>
                <img src={button3logo} alt="logo" style={{ width: "5rem"}}/>
            </button>
            <button>
                <img src={button4logo} alt="logo" style={{ width: "5rem"}}/>
            </button>
            <button>
                <img src={button5logo} alt="logo" style={{ width: "5rem"}}/>
            </button>
        </div>
        </>
    )
}

// Contact.js
import React from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
    return (
        <div className="contact">
            <h1>Connect me through:</h1>
            <div className="social-icons">

                <a href="https://www.linkedin.com/in/navina-irabatti-72495b2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.svgrepo.com/show/521725/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://youtu.be/_IXEJB7e34k?si=4FDH3yAjX02AboXn" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.svgrepo.com/show/521936/youtube.svg" alt="YouTube" />
                </a>
                <a href="mailto:navinairabatti@gmail.com">
                    <img src="https://www.svgrepo.com/show/502648/email.svg" alt="Email" />
                </a>
                <a href="tel:+917506757229">
                    <img src="https://www.svgrepo.com/show/304555/phone-number.svg" alt="Phone" />
                </a>
                <a href="https://github.com/navinavina" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" />
                </a>
            </div>
         
        </div>
    );
};

export default Contact;

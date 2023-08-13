import React from 'react';
import './HowItWorksSection.css'

const HowItWorksSection = () => {
    return (
        <section className="how-it-works-section">
            <h2>How it works</h2>
            <p>Our process for online dermatologist consultation.</p>
            <ol>
                <li>Enter a few details about you and your skin problem</li>
                <li>Upload pictures and Pay</li>
                <li>Get your dermatologist's answer within 24hrs</li>
            </ol>
            <button className="get-registered-btn">Get Registered</button>
        </section>
    );
};

export default HowItWorksSection;

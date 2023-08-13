import React from 'react';
import './TestimonialSection.css'

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <h2>What our users have to say about us!</h2>
            <div className="testimonial">
                <h3>Identify skin diseases with symptoms</h3>
                <p>Rosacea</p>
                <p>Melasma</p>
                <p>Tinea</p>
            </div>
            {/* Add more testimonials here */}
            <button className="get-registered-btn">Get Registered</button>
        </section>
    );
};

export default TestimonialsSection;

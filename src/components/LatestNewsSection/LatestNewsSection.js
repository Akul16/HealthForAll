import React from 'react';
import './LatestNewsSection.css'

const LatestNewsSection = () => {
    return (
        <section className="latest-news-section">
            <h2>Our latest news & updates</h2>
            <div className="news-item">
                <h3>April 03 2022</h3>
                <p>Why you can trust online dermatology</p>
                <p>
                    Pellentesque tellus erat, facilisis eget nulla non, consectetur rhoncus massa.
                    Mauris tellus sapien, ornare sed lacus finibus, eleifend efficitur mauris.
                </p>
            </div>
            {/* Add more news items here */}
        </section>
    );
};

export default LatestNewsSection;

import React from 'react';
import "./Headline.css";

const Headline = () => {
    const services = [
        "Web Design",
        "Responsive Design",
        "UI/UX Design",
        "App Design"
    ];

    // We duplicate the list for a seamless infinite scroll effect
    // हम एक सहज इन्फिनिटी स्क्रॉल प्रभाव के लिए लिस्ट को डुप्लिकेट करते हैं
    const renderList = (items) => (
        <div className='container'>
            {items.map((service, index) => (
                <h5 key={index}>{service}</h5>
            ))}
        </div>
    );

    return (
        <div id='headline-wrapper'>
            <section className='headline'>
                <div className='moving-text'>
                    {renderList(services)}
                    {renderList(services)}
                </div>
            </section>
        </div>
    );
};

export default Headline;
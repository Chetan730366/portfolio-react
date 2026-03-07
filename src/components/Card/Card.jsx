import React from 'react'
import "./Card.css"

function Card() {
    return (
        <div id='about'>
            <div className="leftabout">
                <div className="about">
                    <div className="aboutline1">hello !</div>
                    <div className="aboutline2">I'm chetan</div>
                    <div className="aboutline3">
                        <Typewriter
                            words={["Web Developer", "Front-End Developer"]}
                            typeSpeed={100}
                            delaySpeed={1500}
                            loop={true}
                        />
                    </div>
                    <img src="" alt="" />
                </div>details
            </div>

        </div>
    )
}

export default Card

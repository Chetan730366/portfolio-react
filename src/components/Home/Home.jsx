
import "./Home.css"
import personal from "../../assets/personal.png"
import { Typewriter } from 'react-simple-typewriter';
import resumePDF from "../../assets/chetan1.pdf";



function Home() {
    return (
        <div id="Home">
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">Available for hire</div>
                    <div className="line4">I'M</div>
                    <div className="line2">Chetan</div>
                    < div className="line3">
                        <Typewriter
                            words={["Web Developer", "Front-End Developer", "ui/ux designer"]}
                            typeSpeed={100}
                            delaySpeed={1500}
                            loop={true}

                        />
                    </div>
                    <p className="para"> I am actively looking for internships, freelance opportunities, or entry-level roles where I can grow as a developer. Let’s connect!</p>

                    <a href={resumePDF} download={"chetan1.pdf"} className="btn border-btn">download cv</a>

                    <a href="" className="border-btn1"> view work </a>
                    <div className="style">
                    </div>
                    <div className="dispaly-num">
                        <div className="stat-num">3+</div>
                        <div className="stat-num">2+</div>
                        <div className="stat-num">5+</div>
                    </div>
                    <div className="dispaly-label">
                        <div className="stat-label">Projects Built</div>
                        <div className="stat-label">Years Learning</div>
                        <div className="stat-label">Certifications</div>
                    </div>
                </div>
            </div>


            <div className="righthome">
                <div className="skill-float sf1">React.js</div>
                <div className="skill-float sf2">GSAP</div>
                <div className="skill-float sf3">Tailwind</div>
                {personal && <img src={personal} alt="Chetan" />}
            </div>

        </div >
    )
}

export default Home;

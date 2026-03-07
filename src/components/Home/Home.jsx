
import "./Home.css"
import personal from "../../assets/personal.png"
import { Typewriter } from 'react-simple-typewriter';
import resumePDF from "../../assets/chetan1.pdf";



function Home() {
    return (
        <div id="home">
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">I'M</div>
                    <div className="line2">Chetan</div>
                    < div className="line3">
                        <Typewriter
                            words={["Web Developer", "Front-End Developer"]}
                            typeSpeed={100}
                            delaySpeed={1500}
                            loop={true}
                            cursor
                        />
                    </div>
                    <p className="para"> I am actively looking for internships, freelance opportunities, or entry-level roles where I can grow as a developer. Let’s connect!</p>

                    <a href={resumePDF} download={"chetan1.pdf"} className="btn border-btn">download cv</a>
                </div>

            </div>
            <div className="righthome">
                <img src={personal} alt="" />
            </div>
        </div >
    )
}

export default Home;

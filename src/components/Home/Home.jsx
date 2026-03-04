
import "./Home.css"
import personal from "../../assets/personal.png"
import { Typewriter } from 'react-simple-typewriter';
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
                            typeSpeed={100}     // ✅ correct
                            delaySpeed={1500}   // ✅ correct
                            loop={true}
                            cursor
                        />
                    </div>

                    <button>hire me</button>
                </div>

            </div>
            <div className="righthome">
                <img src={personal} alt="" />
            </div>
        </div >
    )
}

export default Home;

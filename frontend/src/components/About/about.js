import NavBar from "../NavBar/NavBar";
import OHHeadshot from "../../Assets/headshot - omh.jpg"
import VSHeadshot from "../../Assets/headshot - vs.jpg"
import BVHeadshot from "../../Assets/headshot - bv.png"
import LinkedIn from "../../Assets/linkedinicon.png"
import GitHub from "../../Assets/github-logo.png"
import "./about.css"



const AboutPage = () => {
    return(
        <>
            <NavBar />
            <h1>Meet The Team</h1>
            <div className="teamContainer">
                <div className="teamMemberContainer">
                    <div className="name">
                        <h4>Omar Hammad</h4>
                        <h5>Backend Lead/Flex</h5>
                    </div>
                    <div className="headshotContainer">
                        <img src={OHHeadshot} className="headshot" alt="headshot"></img>
                    </div>
                    <div className="links">
                        <a href="https://github.com/o-hammad" target="_blank"><img src={GitHub} classname="link" alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/omar-hammad-93810413b/" target="_blank"><img src={LinkedIn} alt="linkedin"></img></a>
                    </div>
                </div>
                <div className="teamMemberContainer">
                    <div className="name">
                        <h4>Vincent Shan</h4>
                        <h5>Frontend Lead</h5>
                    </div>
                    <div className="headshotContainer">
                        <img src={VSHeadshot} className="headshot" alt="headshot"></img>
                    </div>
                    <div className="links">
                        <a href="https://github.com/vshan0816" target="_blank"><img src={GitHub} classname="link" alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/vincent-shan-9121366b/" target="_blank"><img src={LinkedIn} alt="linkedin"></img></a>
                    </div>
                </div>
                <div className="teamMemberContainer">
                    <div className="name">
                        <h4>Balaji V</h4>
                        <h5>Team Lead</h5>
                    </div>
                    <div className="headshotContainer">
                        <img src={BVHeadshot} className="headshot" alt="headshot"></img>
                    </div>
                    <div className="links">
                        <a href="https://github.com/imnobalaji" target="_blank"><img src={GitHub} classname="link" alt="github"></img></a>
                        <a href="https://www.linkedin.com/in/omar-hammad-93810413b/" target="_blank"><img src={LinkedIn} alt="linkedin"></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;
import AniLetters from "../AnimatedLetters/AniLetters";
import "./about.scss";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3, faGitAlt, faHtml5, faJs, faReact, faUnity} from "@fortawesome/free-brands-svg-icons";
import {Loader} from "react-loaders";

function About() {

    const titleText = "About me";
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
            return () => {clearTimeout(timeoutId)}
    }, []) 

    return (
    <>
        <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AniLetters
                    letterClass={letterClass} 
                    strArray={titleText.split("")}
                    idx={15}   //means 1.5s delay
                />
            </h1>
            <p>im a new fullstack developer looking for a role in one IT company with the oportunity to work in diverse proyect and learn more about new technologies</p>
            <p>I'm love working in team as my other profession as nurse i have to be part of a healthcare team, i found this way help a lot in improving our jobs and problem solving skills</p>
            <p>I'm a  very naturally curious and loyal i love learn more about PC and sofware and apply the things that i learn, also i love teach peopple about what i know and i feel confident</p>
            <p>If i have to define myself with one sentence that should be that im a family person that take care of his friends and a art enthusiast and obsessed with new technologies</p>
        </div>
        <dir className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faJs} />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faGitAlt} />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faUnity} />
                </div>
            </div>
        </dir> 
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default About;
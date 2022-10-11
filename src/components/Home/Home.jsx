import "./Home.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AniLetters from "../AnimatedLetters/AniLetters.jsx";
import Logo from "../Logo/logo.jsx";
import Loader from "react-loaders";

function Home(){

    const [letterClass, setLetterClass] = useState("text-animate");
    const nameText = "uis Miño Bustos"
    const jobText = "web developer"
    const nameArray = nameText.split("");
    const jobArray = jobText.split("");


    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
            return () => {clearTimeout(timeoutId)}
    }, [])            
                
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br /> 
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m,</span>
                        <img src={LogoTitle} alt="developer" />
                        <AniLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                        <br />
                        <AniLetters letterClass={letterClass} strArray={jobArray} idx={30}/>
                    </h1>
                    <h2>
                        Fullstack Developer with basic knowledge of Js and C#
                    </h2>
                    <Link to="/contact"  className="flat-button"> CONTACT ME </Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
};

export default Home;
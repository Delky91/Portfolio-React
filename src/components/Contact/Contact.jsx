import "./Contact.scss";
import {Loader} from "react-loaders";
import AniLetters from "../AnimatedLetters/AniLetters.jsx";
import {useState, useEffect, useRef} from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const contactText = "Contact me";
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
            return () => {clearTimeout(timeoutId)}
    }, []);

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("Luis Gmail","template_otlvmn1",refForm.current,"C0xauLm4UWOlR7MIq")
        .then(() =>{
            alert("Message successfully sent!")
            window.location.reload(false);
        },
        () => {
            alert("Failed to send the message, try again plz")
        }
        );
    };


    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AniLetters strArray={contactText.split("")} idx={15} letterClass={letterClass}/>
                    </h1>
                    <p>
                        I am looking for a oportunity in any type of projects, if you have any question or request feel free to contact me using below form either
                    </p>
                    <div className="contact-form">
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                                        <input type="text" name="from_name" id="from_name" placeholder="Name" required />
                                    </li>
                                    <li className="half">
                                        <input type="email" name="reply_to" id="reply_to" placeholder="Email" required />
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Subject" name="subject" />
                                    </li>
                                    <li>
                                        <textarea placeholder="Message" name="message" id="message" required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND" />
                                    </li>
                                </ul>
                            </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    );
}

export default Contact;
import './contact.css'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import img1 from '../assets/group1.jpg';
import img2 from '../assets/pro-ucxOK2xS.jpeg';
import img3 from '../assets/grappling4.jpg'

function Contact() {
    return (
        <div>
            <h1>Kontakta oss</h1>
            <p className="center">
                Har du några frågor eller vill komma i kontakt med oss? Använd då helst vår epost:
            </p>
            <p className="center large-mb">
                <a href="mailto:orebrofightgym@outlook.com" className="contact-link">
                    orebrofightgym@outlook.com
                </a>
            </p>

            <h2 className="center">Du kan också passa på att följa oss på våra sociala medier</h2>

            <div className="social-container">
                <div className="social-card">
                    <a
                        href="https://www.facebook.com/profile.php?id=100062853135030"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="social-icon" />
                    </a>
                </div>
                <div className="social-card">
                    <a
                        href="https://www.instagram.com/orebro_fightgym/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
            </div>
            <div className="images-wrapper mb-20">
                    <img className="image-item" src={img1}></img>
                    <img className="image-item" src={img2}></img>
                    <img className="image-item" src={img3}></img>
            </div>
        </div>
    );
}

export default Contact;

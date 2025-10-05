import './contact.css'
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
                    <img className="image-item" src='./group1.jpg'></img>
                    <img className="image-item" src='./w-striking5.jpg'></img>
                    <img className="image-item" src='./grappling4.jpg'></img>
            </div>
        </div>
    );
}

export default Contact;

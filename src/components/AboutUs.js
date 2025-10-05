    import "./aboutUs.css";
    import img1 from '../assets/patrik.jpg';
    import img2 from '../assets/shirt.jpg';
    import img3 from '../assets/w-striking3.jpg';

    function AboutUs() {
        return (
            <div className="about-content">
                <h1 className="center">Om oss</h1>
                <p className="center long-text mb-20">Intresset för MMA har vuxit kraftigt de senaste åren, både som träningsform och tävlingssport. Det är därför vi finns, för att erbjuda Örebro en plats där alla kan utvecklas inom kampsport! Hos oss tränar motionärer i alla åldrar, ungdomar, aktiva amatörer och professionella fighters under samma tak. Vi är en klubb där gemenskap och utveckling står i centrum. Samtidigt som satsande idrottare får rätt förutsättningar att växa och nå sin fulla potential. För dig som vill fokusera på en specifik del av sporten erbjuder vi både ett renodlat grapplingprogram och ett strikingprogram, utöver våra kompletta MMA-pass.</p>
                <h2 className="center">Vad andra säger om oss</h2>
                <div className="news-bubble">
                    <span>Flydde från Afghanistan – nu är han svensk mästare <a href="https://www.na.se/2021-12-10/flydde-fran-afghanistan-nu-ar-han-svensk-mastare/" target="blank">Länk till NA</a></span>
                </div>
                <div className="news-bubble">
                <span>Kampsporten blev hennes andra hem: ”Kom hit tjejer” <a href="https://www.na.se/2024-08-22/kampsporten-blev-hennes-andra-hem-kom-hit-tjejer/" target="blank">Länk till NA</a></span>
                </div>
                <div className="news-bubble">
                <span>Dubbla guld till Örebro på MMA-SM <a href="https://www.na.se/2023-05-01/dubbla-guld-till-orebro-pa-mma-sm-inte-langt-fran-att-bli-proffs/" target="blank">Länk till NA</a></span>
                </div>
                <div className="news-bubble">
                <span>En av de största talangerna i Sverige <a href="https://www.na.se/2023-12-07/en-av-de-storsta-talangerna-i-sverige/" target="blank">Länk till NA</a></span>
                </div>
                <div className="news-bubble">
                <span>Örebroaren slog Sveriges starkaste man <a href="https://www.na.se/2024-06-05/orebroaren-slog-sveriges-starkaste-man/" target="blank">Länk till NA</a></span>
                </div>
                <div className="news-bubble">
                <span>Ny som förbundskapten – tar ut två örebroare till VM <a href="https://www.na.se/2025-04-16/ny-som-forbundskapten-tar-ut-tva-orebroare-till-vm/" target="blank">Länk till NA</a></span>
                </div>
                <div className="images-wrapper mb-20">
                    <img className="image-item" src={img1}></img>
                    <img className="image-item" src={img2}></img>
                    <img className="image-item" src={img3}></img>
                </div>
            </div>
        )
    }

    export default AboutUs;
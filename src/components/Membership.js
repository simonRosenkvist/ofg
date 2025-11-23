import "./membership.css";
import img from '../assets/cage.jpeg';
import conduct from '../assets/conduct.pdf';
function Membership() {
    return (
        <div className="membership">
            <h1>Medlemskap</h1>
            <p className="subheader highlight">Bli en av oss!</p>
            <p className="center">Som medlem hos Örebro Fight Gym får du ta del av ambitiösa tränare och god stämning. Vi erbjuder flera pass i veckan och för den som vill bli bäst har vi några av landets bästa fighters som tränar hos oss.</p>
            <p className="subheader">Länk till vårt medlemsavtal: <a href={conduct} download="Medlemsavtal.pdf" className="sibheader center">Ladda ner (PDF)</a></p>
            <img className="memberImage" src={img}></img>
            <h2 className="center">Priser:</h2>
            <h3 className="center highlight smallHeader">Vuxen (gäller från året man fyller 20)</h3>
            <ul className="center">
                <li>1 månad 509:-</li>
                <li>3 månader 1259:-</li>
                <li>6 månader 2299:-</li>
                <li>12 månader 3999:-</li>
            </ul>
            <p className="center mb-20">Vill du betala med Autogiro? Fråga oss i receptionen!</p>
            <h3 className="center highlight smallHeader">Ungdom</h3>
            <ul className="center mb-20">
                <li>1 månad 409:-</li>
                <li>3 månader 899:-</li>
                <li>6 månader 1499:-</li>
                <li>12 månader 2499:-</li>
            </ul>

            <p className="center mb-20">Medlemsavgift på 200:- tillkommer vid träningsavgift från 3 månader, i denna ingår medlemskap i budo och kampsportsförbundet samt försäkring.
            Denna betalas 1 gång per år.</p>
            <p className="center small-text mb-20"><i>Vi är medlemmar i Svenska Budo & Kampsportsförbundet, Brottningsförbundet, Svenska MMA förbundet, Submission Wrestling förbundet,
            BJJ förbundet och Allstyle Förbundet.</i></p>
        </div>
    )
}

export default Membership;
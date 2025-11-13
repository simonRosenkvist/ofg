import './getStarted.css';
import img1 from '../assets/group4.jpg';

function GetStarted() {
    return (
        <div className='getStarted'>
            <h1>Börja träna med Örebro Fight Gym!</h1>
            <p className="subheader">Välkommen till Örebro Fight Gym! Här hittar du all information du behöver för att komma igång med träningen.</p>
            
            <h2 className='center startingHeader'>Föranmälan & registrering</h2>
            <p className='center'>För att börja träna behöver du först föranmäla dig via e-post:</p>
            <ul className='center'>
                <li><span>Skicka namn, efternamn och födelseår till: orebrofightgym@outlook.com</span></li>
                <li><span>Vänta på bekräftelse via mail.</span></li>
                <li><span>När du kommer på ditt första pass registrerar du dig i receptionen.</span></li>
            </ul>
            <p className="highlight center startingHeader">Viktigt:</p>
            <ul className='center'>
                <li><span>Föranmälan gäller endast för den terminen du anmäler dig till.</span></li>
                <li><span>Vi håller inga platser till nästa termin utan ny föranmälan.</span></li>
                <li><span>Drop-in pass erbjuds inte; endast föranmällda deltagare får träna.</span></li>
                <li><span>Föranmälan sker enbart via mail.</span></li>
            </ul>

            <h2 className='center startingHeader'>Prova-på vecka</h2>
            <p className='subheader'>Vi erbjuder en gratis prova-på vecka i samband med terminsstart:</p>
            <ul className='center mb-20'>
                <li><span>Pass: måndag–torsdag (startar vid första passet).</span></li>
                <li><span>Endast för nya medlemmar, kan nyttjas en gång per person.</span></li>
                <li><span>Pass fredag–söndag kräver medlemskap.</span></li>
                <li><span>Prova-på garanterar inte plats i gruppen.</span></li>
                <li><span>Vid full grupp stänger prova-på platserna. (Förtur för betalande medlemmar)</span></li>
                <li><span>Ingen utrustning behövs; boxningshandskar finns att låna.</span></li>
                <li><span>Endast föranmällda utövare/medlemmar får vistas i lokalen — inga åskådare under passen.</span></li>
            </ul>
            <p className='highlight center'>Prova-på pass under terminen</p>
            <ul className='center'>
                <li><span>Nya deltagare kan komma i mån av plats.</span></li>
                <li><span>Max två prova-på pass per person.</span></li>
            </ul>

            <img className='startingImage' src={img1}></img>

            <h2 className='center startingHeader'>Övrig information</h2>

            <p className='center highlight'>Riktlinjer & värderingar</p>
            <p className='center mb-20'>Vi har en nolltolerans mot droger, hot och våld. Vi tolererar ingen diskriminering. Alla är välkomna oavsett kön, sexualitet, etnicitet, religion, politisk åsikt etc. Vi strävar efter en trevlig och säker miljö för alla.</p>

            <p className='center highlight'>Friskvårdsbidrag</p>
            <p className='center mb-20'>Vi tar emot friskvårdsbidrag via Epassi. Receptionen hjälper till under bemannade tider.</p>

            <p className='center highlight'>Betalning</p>
            <p className='center mb-20'>Swish, kort eller autogiro accepteras. Kontanter tas ej emot.</p>

            <p className='center highlight'>Ånger & medlemskap</p>
            <p className='center mb-20'>Betalning är bindande. Pengar återbetalas inte vid ånger, flytt eller skador. <br/> Mer information finns i medlemsavtalet, tillgängligt i receptionen eller under fliken Om oss.</p>
        
            <p className='center highlight'>Omklädningsrum</p>
            <p className='center mb-20'>Omklädningsrum finns. Vi rekommenderar att duscha hemma för att minska trängsel.</p>

            <p className='center highlight'>Hygien & sjukdom</p>
            <p className='center mb-20'>Rena träningskläder varje pass. <br/> Klippta naglar, inga öppna sår eller utslag. <br/> Inga smycken under träning. <br/> Vid förkylnings- eller sjukdomssymtom stanna hemma.</p>
        </div>
    )
}

export default GetStarted;
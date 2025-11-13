import { useState } from "react";
import "./classes.css";
import kids from '../assets/group-kids.jpg';
import striking from '../assets/striking2.jpg';
import grappling from '../assets/grappling1.jpg';
import striking2 from '../assets/striking1.jpg';
import groundPound from '../assets/win5.jpg';
import mood from '../assets/w-striking1.jpg';
import logo from '../assets/logo.jpg';

function Classes() {
  const [openIndex, setOpenIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(logo);

  const toggleDisplay = (index, imgSrc) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setBackgroundImage(logo);
    } else {
      setOpenIndex(index);
      setBackgroundImage(imgSrc || logo);
    }
  };

  const courses = [
    {   
      title: "MMA nybörjare", 
      desc: "Passar för dig som vill testa MMA från grunden. Ingen tidigare erfarenhet krävs. Dessa pass passar också dig som tränat någon termin och vill träna mer på grunderna. Träningen består av striking, och grappling. För att träna MMA förutsätter vi att du tränar både striking-passen såväl som grappling-passen då dessa tillsammans utgör grunden för MMA. Inga åskådare är tillåtna under passen. Detta gäller även familjemedlemmar/vänner.",
      imgSrc: kids
    },
    { title: "MMA fortsättare",
        desc: "För dig som tränat ett tag och vill fortsätta utvecklas. Du som tränar här förväntas ha åtminstone grundläggande förståelse för både striking och grappling. Normalt krävs det att du har varit med en eller två terminer i nybörjargruppen, men i slutändan är det din tränare som avgör ifall du är redo att gå med i fortsättargruppen.",
        imgSrc: striking },
    { title: "MMA team", 
        desc: "I denna gruppen tränar de fighters som tävlar i amatör- eller proffsmatch eller de som snart ska gå match, samt inbjudna fighters. Det är vår huvudcoach i MMA som avgör vilka som får träna i denna grupp.", 
        imgSrc: groundPound 
    },
    { title: "Grappling", 
        desc: "Grappling är ett samlingsnamn för alla olika stilar där man brottas både stående och på golvet i så kallad markkamp. Utövarna gör olika former av grepp, strypningar och lås. Brasiliansk jiu-jitsu och submission wrestling är två av de vanligaste sporterna inom grapplinggenren. I vår nybörjargrupp tränar vi på grundläggande tekniker och ingen förkunskap krävs.", 
        imgSrc: grappling 
    },
    { title: "Striking", 
        desc: "Striking är ett samlingsnamn för stående kamp och sammanfattar sporter såsom boxning, kickboxning och thaiboxning. I MMA tillåts man slåss med slag, sparkar, knän och i proffsmatcher även armbågar. För nybörjare tränar vi mycket på grundtekniker, kombinationer och försvar mot sparkar, slag, knän och svep.", 
        imgSrc: striking2 
    },
    { title: "Företag, event, privatpass", 
        desc: "Vi erbjuder allt från privatpass, företagsklasser, privata gruppass, skolklasser och träning vid svensexa/möhippa. Vi skräddarsyr pass efter individer eller grupper beroende på nivån och ambitionen på de närvarande. Vill du testa på MMA med fokus på kondition och styrka? Roliga, intensiva och positivt utmanande träningspass alltid ledda utav utbildade tränare. Då får du gärna höra av dig till oss så ordnar vi ett event som passar er!", 
        imgSrc: mood 
    }
  ];

  return (
    <div 
      className="classes-container"
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out"
      }}
    >
      <h1>Våra klasser</h1>
      <ul className="courses-ul highlight shadow">
        {courses.map((course, index) => (
          <li key={index} onClick={() => toggleDisplay(index, course.imgSrc)}>
            {course.title}
            {openIndex === index && (
              <p className="course-description">{course.desc}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Classes;

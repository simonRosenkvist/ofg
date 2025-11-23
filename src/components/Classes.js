import { useState } from "react";
import "./classes.css";
import kids from '../assets/group-kids.jpg';
import striking from '../assets/striking2.jpg';
import grappling from '../assets/grappling1.jpg';
import striking2 from '../assets/striking1.jpg';
import team from '../assets/team.jpeg';
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
      title: `MMA nybörjare`, 
      desc: [
        'Från året man fyller 15 år, ingen förkunskap krävs. En kurs där man får lära sig grunderna i MMA. Variationsrik och allsidig träning för dig som inte har någon tidigare erfarenhet av MMA och/eller för dig som tränat 1 termin och vill ha mer grunder. Striking, brottning och grappling. Vårt upplägg för MMA kräver att du tränar både striking-passen och grappling-passen utöver MMA passen, då dessa lägger en grund tillsammans.',
        'MMA Striking=kickboxning Grappling = Lås, grepp, brottning Prova på passen gäller måndag-torsdag. Öppen matta och söndagens pass kräver medlemskap. De första 2 veckorna av terminen innehåller mycket introduktion. Inga åskådare under passen, detta pga vi har begränsat antal platser som måste prioteras till tränande som väntar in sina pass. Gäller även familjemedlemmar/vänner.',
        'DETTA BEHÖVER DU FÖR ATT TRÄNA MMA; Klädsel: Träningskläder utan dragkedjor eller för stora fickor. Vi tränar barfota. Utrustning: MMA handskar, benskydd och tandskydd. Suspensoar för killar rekommenderas. Amatör handskar används, ej pro handskar. Vi säljer utrustning från Nordic Fighter & Earniitsports. Kan köpas & provas på plats. Använd utrustning går ej att returnera. Vid prova på behöver man ej utrustning. När man bestämt sig för att fortsätta behöver man investera i utrustning.'
      ],
      imgSrc: kids
    },
    { title: "MMA fortsättare",
        desc: ["Denna grupp är till för dig som har tidigare erfarenhet av MMA, eller har tidigare erfarenhet av striking och grappling. Behärska alla distanser är krav. Tränare avgör vid vilken termin man flyttas från nybörjare upp till denna grupp. Full utrustning krävs i denna grupp."],
        imgSrc: striking },
    { title: "MMA team", 
        desc: ["I denna grupp tränar de som tävlar i MMA eller som ska tävla inom snar framtid, samt inbjudna. C, B & A-KLASS, samt Professionella fighters. Vår huvudcoach i MMA avgör vilka som tränar i denna grupp. Pro and Amatuer team. For questions contact us via mail orebrofightgym@outlook.com"], 
        imgSrc: team 
    },
    { title: "Grappling", 
        desc: ['NYBÖRJARE Lås, grepp ,strypningar och brottning. Ett pass även för de som tränar MMA, då grappling är en del i MMA. Ingen förkunskap krävs i denna grupp.',
           'FORTSÄTTNINGSGRUPP-AVANCERADGRUPP Denna grupp är till för dig som har tidigare erfarenhet av grappling. Minst 1 termin nybörarkurs eller tidigare erfarenhet från nogi eller bjj.', 
           'Vad är grappling? Grappling är ett samlingsnamn för alla olika stilar där man brottas både stående och markkamp och gör olika former av grepp, strypningar och lås. Genom olika grepptekniker kan kast, strypningar och olika ledlås utföras. Brasiliansk jiu-jitsu och submission wrestling tillhör grapplinggenren. Rörlighet, teknik och smidighet!', 
           'Klädsel/utrustning: Träningskläder utan dragkedjor eller för stora fickor, tandskydd. Vi tränar barfota. Suspensoar rekommenderas till killar. Vattenflaska krävs till alla pass.'], 
        imgSrc: grappling 
    },
    { title: "Striking", 
        desc: ["Striking är ett samlingsnamn för stående kamp och sammanfattar sporter såsom boxning, kickboxning och thaiboxning. I MMA tillåts man använda slag, sparkar, knän. För nybörjare tränar vi mycket på grundtekniker, kombinationer och försvar mot sparkar, slag, knän och svep."],
        imgSrc: striking2 
    },
    { title: "Företag, event, privatpass", 
        desc: ['PRIVATPASS FÖRETAGSKLASSER SVENSEXA/MÖHIPPA Vi erbjuder allt från privatpass, företagsklasser, privata gruppass, skolklasser och träning vid svensexa/möhippa.', 
          'PRIVATPASS Privatpass /individuell träning. Träna enskilt med någon av våra rutinerade tränare. Enbart fokus på utövaren och den individuella utvecklingen. Passar samtliga ambitionsnivåer, oavsett om det är motionsnivå/nybörjare eller satsande utövande och du vill träna ett pass enskilt med tränare. Skräddarsydda program efter önskemål.',
          'FÖRETAGSKLASS/KICKOFFER/PRIVATA GRUPPASS Testa våra populära motionsanpassade MMA pass med arbetslaget, kompisgänget eller kollegorna. Fokus på kondition och styrka. Roliga, intensiva och positivt utmanande träningspass. Skräddarsytt pass efter önskemål. Lett av erfarna instruktörer med personlig tränarutbildning.', 
          'SVENSEXA/MÖHIPPA/FÖDELSEDAG Någon som fyller jämnt eller gifter sig? Låt den utvalde testa sig genom att träna/sparra MMA tillsammans med något av våra proffs och träna ett MMA pass. Vi står för utrustning som krävs vid träningen. För mer info om passen eller vid frågor kontakta oss via orebrofightgym@outlook.com'],
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
            <span className={(openIndex === index ? 'subheader' : '')}>{course.title}</span>
            {openIndex === index && (
              course.desc.map((desc, descIndex) => {
                return(
                  <p key={descIndex + 'd'} className="course-description">{desc}</p>
                );
              })
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Classes;

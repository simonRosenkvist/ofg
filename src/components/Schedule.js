import { useState } from "react";
import './schedule.css'

const scheduleData = {
  Måndag: [
    { time: "17:00-18:10", class: "MMA Nybörjare" },
    { time: "18:10", class: "Brottning Fortsättare-Avancerad" }
  ],
  Tisdag: [
    { time: "17:00-18:00", class: "MMA Striking nybörjare", notes: "Kickboxning" },
    { time: "18:00-19:15", class: "MMA Fortsättare-Avancerad" },
    { time: "18:50", class: "MMA Team" }
  ],
  Onsdag: [
    { time: "17:30-18:10", class: "Grappling MMA Nybörjare"},
    { time: "17:30-18:10", class: "Grappling Fortsättare-Avancerad", notes: "Sal A"},
    { time: "17:30", class: "MMA Team", notes: "Sal B"}
  ],
  Torsdag: [
    { time: "17:00-18:00", class: "MMA Nybörjare" },
    { time: "18:00-19:15", class: "MMA Fortsättare-Avancerad" },
    { time: "18:50", class: "MMA Team" }
  ],
  Fredag: [
    { time: "17:00", class: "MMA Team" }
  ],
  Lördag: [
    { time: "11.00-12.30", class: "Öppen matta", notes: "Endast medlemmar, Sal A & B" },
  ],
  Söndag: [
    { time: "13.50-15.00", class: "Grappling MMA Alla nivåer" },
    { time: "15.00-16.10", class: "MMA Striking Alla nivåer" },
    { time: "16:10", class: "MMA Team" }
  ]
};

function Schedule() {
  const [openDays, setOpenDays] = useState(new Set());

  const toggleDay = (day) => {
    const updated = new Set(openDays);
    if (updated.has(day)) {
      updated.delete(day);
    } else {
      updated.add(day);
    }
    setOpenDays(updated);
  };

  return (
    <div className="schedule">
        <h1>Schema</h1>
        <p className="center">Ordinarie schema – ändringar kan förekomma. Följ oss på sociala medier för uppdateringar.</p>
        {Object.entries(scheduleData).map(([day, classes]) => (
            <div key={day} className={`day ${openDays.has(day) ? "open" : ""}`}>
                <h2 onClick={() => toggleDay(day)}>{day}</h2>
                {openDays.has(day) && (
                    <ul> {classes.map((c, i) => (
                        <li key={i}>
                            <span className="time">{c.time}</span> -{" "}
                            <span className="class-name">{c.class}</span>
                            {c.notes && <span><br />{c.notes}</span>}
                        </li>
                    ))}</ul>
                )}
            </div>      
        ))}
    </div>
  );
}

export default Schedule;

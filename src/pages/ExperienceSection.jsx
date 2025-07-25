import { useEffect, useState } from "react";
import ExperienceList from "@/components/ExperienceListCard/ExperienceList.jsx";

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("/data/experiences.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExperiences(data);
      })
      .catch((err) => console.error("Error cargando experiencias:", err));
  }, []);
  
  return (
    <section id="experiencia" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experiencia
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional y los proyectos que han marcado mi carrera.
          </p>
        </div>

        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
}


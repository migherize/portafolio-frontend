export default function ExperienceList({ experiences = [] }) {
  const getColorClass = (index) => {
    const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500"];
    return colors[index % colors.length];
  };

  const getTextColorClass = (index) => {
    const colors = ["text-blue-400", "text-purple-400", "text-green-400"];
    return colors[index % colors.length];
  };

  if (experiences.length === 0) {
    return (
      <div className="text-center text-slate-400">
        Aún no he agregado experiencias.
      </div>
    );
  }

  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const educationExperiences = experiences.filter((exp) => exp.type === "education");

  const renderExperienceCard = (exp, index, align = "left") => (
    <div key={exp.id || index} className="relative mb-8 flex items-start gap-4">
      {align === "left" && (
        <>
          {/* Línea + Punto + Año */}
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-4 border-slate-900 ${getColorClass(
                index
              )} animate-pulse`}
            />
            <span className="text-xs text-slate-400 mt-2">{exp.startDate}</span>
            <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          </div>
  
          {/* Contenido */}
          <div className="bg-slate-700 rounded-lg p-3 hover:bg-slate-600 transition-colors duration-300 w-full text-left">
            <h3 className={`text-base font-bold ${getTextColorClass(index)}`}>
              {exp.title}
            </h3>
            <h4 className="text-sm font-semibold text-slate-300">{exp.company}</h4>
            <p className="text-slate-400 text-xs">{exp.description}</p>
  
            {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </>
      )}
  
      {align === "right" && (
        <>
          {/* Contenido */}
          <div className="bg-slate-700 rounded-lg p-3 hover:bg-slate-600 transition-colors duration-300 w-full text-right">
            <h3 className={`text-base font-bold ${getTextColorClass(index)}`}>
              {exp.title}
            </h3>
            <h4 className="text-sm font-semibold text-slate-300">{exp.company}</h4>
            <p className="text-slate-400 text-xs">{exp.description}</p>
  
            {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 justify-end">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-600/50 text-slate-300 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
  
          {/* Línea + Punto + Año */}
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-4 border-slate-900 ${getColorClass(
                index
              )} animate-pulse`}
            />
            <span className="text-xs text-slate-400 mt-2">{exp.startDate}</span>
            <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          </div>
        </>
      )}
    </div>
  );
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      {/* Línea central */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

      {/* Educación a la derecha */}
      <div className="md:col-span-1 text-right">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Educación</h2>
        {educationExperiences.length > 0 ? (
          educationExperiences.map((exp, index) =>
            renderExperienceCard(exp, index, "right")
          )
        ) : (
          <div className="text-slate-400">Sin formación académica.</div>
        )}
      </div>

      {/* Experiencia a la izquierda */}
      <div className="md:col-span-1 text-left">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Experiencia</h2>
        {workExperiences.length > 0 ? (
          workExperiences.map((exp, index) =>
            renderExperienceCard(exp, index, "left")
          )
        ) : (
          <div className="text-slate-400">Sin experiencia laboral.</div>
        )}
      </div>
    </div>
  );
}

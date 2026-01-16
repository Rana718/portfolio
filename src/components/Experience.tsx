import { experiences } from "@/lib/data";

export const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32 lg:py-46" id="experience">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
          EXPERIENCE
        </h2>
        <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8" />
        <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2">
          My professional journey building impactful solutions
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-foreground/30 p-6 md:p-8 rounded-3xl hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-foreground/70">{exp.company}</p>
              </div>
              <span className="text-xs md:text-sm text-green-500 font-semibold mt-2 md:mt-0">
                {exp.duration}
              </span>
            </div>
            <p className="text-xs md:text-sm text-foreground/60 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

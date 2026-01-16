import { Code2, Server, Smartphone, Database } from "lucide-react";
import { skills } from "@/lib/data";

const skillsArray = [
  { icon: Code2, ...skills.frontend },
  { icon: Server, ...skills.backend },
  { icon: Smartphone, ...skills.mobile },
  { icon: Database, ...skills.database },
];

export const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32 lg:py-50 pb-8" id="about">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider mb-4">
          ABOUT
        </h1>
        <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8" />
        <p className="text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-foreground/70 px-2">
          I'm a Full Stack Developer with expertise in building modern web and mobile applications. 
          From frontend interfaces to backend systems and DevOps, I create scalable solutions using cutting-edge technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {skillsArray.map(({ icon: Icon, title, description, tech }) => (
          <div
            className="border border-foreground/30 p-4 md:p-6 text-center rounded-3xl"
            key={title}
          >
            <div className="text-2xl md:text-3xl mb-3 text-foreground/80 flex justify-center">
              <Icon />
            </div>
            <h3 className="font-bold text-xs md:text-sm mb-2 tracking-wider">
              {title}
            </h3>
            <p className="text-xs text-foreground/60 mb-3">{tech}</p>
            <p className="text-xs text-foreground/60 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

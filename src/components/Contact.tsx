import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "Github", url: "https://github.com/Rana718" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/rana-dolui" },
  { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

export const Contact = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-32 sm:px-8 sm:py-46" id="contact">
      <div className="mb-12 text-center sm:mb-16">
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl">CONTACT</h1>
        <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8" />
        <p className="mx-auto max-w-2xl text-xs text-foreground/60 sm:text-sm">
          Got an idea in mind? Let's collaborate and build something remarkable.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            GET IN TOUCH
          </h2>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl border border-foreground/30">
              <div className="flex gap-3 sm:gap-4 items-center">
                <Mail className="h-5 w-5 shrink-0 text-foreground/90 sm:h-6 sm:w-6" />
                <div className="min-w-0">
                  <p className="text-xs text-foreground/60 uppercase">EMAIL</p>
                  <p className="truncate text-xs sm:text-sm">ranadolui.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            SOCIAL LINKS
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                href={url}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/30 p-3 hover:bg-foreground/5 transition sm:h-16 sm:w-16 sm:p-4"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-foreground/90 sm:h-7 sm:w-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

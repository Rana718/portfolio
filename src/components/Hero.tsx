import React from "react";
import { styles } from "../styles";

const Hero: React.FC = () => {

  const handleDownloadClick = () => {
    const filePath = '/Rana_Dolui.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', 'Rana_cv.pdf'); 
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="relative w-full h-2/3 mx-auto pb-128">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in web development and app development. <br className="sm:block hidden" />
            I create intuitive web experiences, build robust applications, <br className="sm:block hidden" />
            and ensure top-notch cybersecurity while developing innovative software solutions.
          </p>
          <button
            className="mt-5 px-6 py-3 bg-[#915EFF] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#7e4c9b]"
            onClick={handleDownloadClick}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

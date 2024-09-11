import React from "react";
import { styles } from "../styles";


const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-2/3 mx-auto pb-96">
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
            I craft web experiences, dive into web3, <br className="sm:block hidden" />
            develop apps, ensure cybersecurity, and build software solutions.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;

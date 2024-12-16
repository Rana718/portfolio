import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

interface NavLink {
  id: string;
  title: string;
}

const Navbar = React.memo(() => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary shadow-md" : "bg-transparent"
        } transition-colors duration-300 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-lg"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              filter: "brightness(1.2)"
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          />
          <motion.p
            className="text-white text-[18px] font-bold cursor-pointer flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px rgb(255,255,255)"
            }}
          >
            RANA &nbsp;
            <span className="sm:block hidden"> DOLUI</span>
          </motion.p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: NavLink) => (
            <motion.li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer relative`}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <motion.div
                className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: toggle ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav: NavLink) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
});

export default Navbar;
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, staggerContainer } from "../utils/motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_USERNAME,
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Your message has been successfully sent. I appreciate you reaching out and will get back to you as soon as possible. Have a great day!"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(
            "We couldn't send your message at this time. Please try again later or reach out to me directly at ranadolui718@gmail.com. Thank you for your patience!"
          );
        }
      );
  };

  return (
    <motion.div
      // @ts-ignore
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 rounded-2xl shadow-lg"
      >
        <p className={`${styles.sectionSubText} text-teal-400`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-12 flex flex-col gap-8 p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
        >
          <label className="flex flex-col">
            <span className="text-teal-400 font-medium mb-4 transform hover:scale-105 transition-transform">
              Your Name
            </span>
            <motion.input
              whileHover={{ scale: 1.01 }}
              whileFocus={{ scale: 1.02, borderColor: "#2dd4bf" }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-800/50 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-2 border-gray-700 font-medium hover:border-teal-500/50 transition-colors duration-300 shadow-inner"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-teal-400 font-medium mb-4 transform hover:scale-105 transition-transform">
              Your Email
            </span>
            <motion.input
              whileHover={{ scale: 1.01 }}
              whileFocus={{ scale: 1.02, borderColor: "#2dd4bf" }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-gray-800/50 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-2 border-gray-700 font-medium hover:border-teal-500/50 transition-colors duration-300 shadow-inner"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-teal-400 font-medium mb-4 transform hover:scale-105 transition-transform">
              Your Message
            </span>
            <motion.textarea
              whileHover={{ scale: 1.01 }}
              whileFocus={{ scale: 1.02, borderColor: "#2dd4bf" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800/50 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-2 border-gray-700 font-medium min-h-[150px] hover:border-teal-500/50 transition-colors duration-300 shadow-inner resize-none"
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
            />
          </label>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#14b8a6" }}
            type="submit"
            className="bg-teal-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-teal-500"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </motion.div>
  );
};

const ContactForm = () => {
  return (
    <section className="relative z-0 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-lg font-semibold tracking-wider">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Let's Connect</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <form className="space-y-6">
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  className="peer w-full bg-gray-800/50 rounded-lg border-2 border-gray-700 p-4 text-white placeholder-transparent focus:border-teal-500 transition-all"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-teal-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  className="peer w-full bg-gray-800/50 rounded-lg border-2 border-gray-700 p-4 text-white placeholder-transparent focus:border-teal-500 transition-all"
                  placeholder="Email Address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-teal-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  rows={4}
                  className="peer w-full bg-gray-800/50 rounded-lg border-2 border-gray-700 p-4 text-white placeholder-transparent focus:border-teal-500 transition-all resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-gray-900 px-2 text-sm text-teal-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-teal-400"
                >
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>

            <div className="flex justify-center space-x-6">
              {[
                { icon: FaGithub, link: "#" },
                { icon: FaLinkedin, link: "#" },
                { icon: FaTwitter, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-teal-400"></i>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-medium">Your Address</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-teal-400"></i>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-medium">your.email@example.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");

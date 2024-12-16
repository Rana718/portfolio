import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, staggerContainer } from "../utils/motion";

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
        className="flex-[0.75] bg-gradient-to-r from-gray-700 via-gray-900 to-black px-4 py-8 rounded-2xl shadow-lg"
      >
        <p className={`${styles.sectionSubText} text-teal-400`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-12 flex flex-col p-4 gap-8 max-w-[600px] mx-auto rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
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
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative w-full"
      >
        <div className="w-full h-full absolute">
          <EarthCanvas />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");

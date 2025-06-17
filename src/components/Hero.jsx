// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Theme } from "../context/Theme";
import Tilt from 'react-parallax-tilt'
import img from "../assets/mike4.jpg";

const typingStyle = `
  @keyframes typing {
    0% { width: 0 }
    100% { width: 100% }
  }

  @keyframes blinkCaret {
    0%, 100% { border-color: transparent }
    50% { border-color: #4f46e5 }
  }

  .typed-text {
    overflow: hidden;
    border-right: 2px solid #4f46e5;
    white-space: nowrap;
    animation: typing 3s steps(40, end), blinkCaret 0.75s step-end infinite;
  }
`;

export default function Hero() {
  return (
    <>
      <style>{typingStyle}</style>

      <section
        className={`${Theme.backgroundColors.extra} ${Theme.textColors.text} min-h-screen w-full flex items-center px-4 sm:px-6 lg:px-10`}
        id="hero"
      >
        <div className="max-w-screen-2xl w-full mx-auto py-16 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <motion.div
            className="group w-full relative mx-auto cursor-pointer order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
  <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 grayscale-100 hover:grayscale-0">
              <img
                className="w-full h-full max-h-[480px] object-cover rounded-2xl"
                src={img}
                alt="Michael Enoch"
              />
            </div>
</Tilt>
            
          </motion.div>

          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${Theme.styles.heading} text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4`}>
              Hey, I'm <span className={Theme.styles.spanAccent}>Michael Enoch</span>
            </h1>
            <h2 className="typed-text text-indigo-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              I build elegant, accessible user interfaces.
            </h2>
            <p className={`${Theme.styles.paragraph} max-w-xl`}>
              A passionate Frontend Developer crafting stunning digital experiences using React,
              Tailwind CSS, and modern web technologies.
            </p>
            <div className="mt-6 sm:mt-8">
              <motion.a
                href="#projects"
                className={Theme.styles.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

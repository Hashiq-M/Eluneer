import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-bg min-h-screen flex flex-col items-center justify-center relative"
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-14 bg-bar"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute left-20 top-0 bottom-0 w-14 bg-bar"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute right-20 top-0 bottom-0 w-14 bg-bar"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-14 bg-bar"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-text text-4xl font-semibold z-10"
        >
          <h1 className="tracking-[.3em] mb-2">ELUNEER</h1>
          <h3 className="tracking-[.1em]">The Flow of Stories</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-4 right-52"
        >
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Link to="/login">
              <RxDoubleArrowRight size={40} className="text-text" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;

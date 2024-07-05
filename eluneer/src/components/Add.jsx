import { motion } from "framer-motion";
import { RxPencil2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Add = () => {
  return (
    <div className="bg-bg min-h-screen relative">
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-14 bg-bar"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      ></motion.div>
      <motion.div
        className="absolute right-20 top-0 bottom-0 w-14 bg-bar"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      ></motion.div>

      <motion.h1
        className="text-text text-4xl font-semibold tracking-[.3em] absolute top-8 right-44"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ELUNEER
      </motion.h1>
      <motion.h1
        className="text-text text-xl absolute top-20 right-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The Flow of Stories
      </motion.h1>

      <motion.button
        className="text-text text-xl absolute top-20 left-24"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <CgProfile size={40} />
      </motion.button>

      <motion.div
        className="absolute inset-0 text-center flex flex-col justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className="text-text font-jimnightshade mb-16 uppercase tracking-widest text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Grow your book collection now
        </motion.h1>
        <Link
          to="/bookform"
          className="text-black text-5xl bg-bar border mb-20 border-gray-300 pl-7 pr-8 py-4 rounded-2xl shadow-custom"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <RxPencil2 size={100} />
          </motion.div>
        </Link>

        <motion.h1
          className="text-text font-serif tracking-wider text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Nothing to see here :&#10088;
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Add;

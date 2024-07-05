import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SlCloudUpload } from "react-icons/sl";

const Bookform = () => {
  return (
    <div className="bg-bg min-h-screen relative">
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
        className="text-text text-xl absolute top-32 right-48"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <CgProfile size={40} />
      </motion.button>

      <div className="flex justify-start w-full pl-40 pt-10">
        <div className="relative">
          <motion.div
            className="bg-opacity-20 bg-cyan-500 p-20 min-h-full min-w-full rounded-xl shadow-2xl drop-shadow-2xl absolute top-8 left-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="bg-opacity-20 bg-cyan-500 pl-16 pt-12 pr-5 pb-3 rounded-xl shadow-2xl drop-shadow-2xl relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="content z-10">
              <form>
                <motion.div
                  className="mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label
                    className="text-text text-lg mr-2 w-28"
                    htmlFor="bookId"
                  >
                    BOOK ID :
                  </label>
                  <input
                    type="text"
                    id="bookId"
                    className="w-full px-3 py-2 bg-transparent rounded border-b border-dashed border-gray-300 focus:border-gray-400 focus:outline-none text-text text-lg"
                  />
                </motion.div>
                <motion.div
                  className="mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label
                    className="text-text text-lg mr-2 w-28"
                    htmlFor="title"
                  >
                    TITLE :
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 bg-transparent rounded border-b border-dashed border-gray-300 focus:border-gray-400 focus:outline-none text-text text-lg"
                  />
                </motion.div>
                <motion.div
                  className="mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label
                    className="text-text text-lg mr-2 w-28"
                    htmlFor="author"
                  >
                    AUTHOR :
                  </label>
                  <input
                    type="text"
                    id="author"
                    className="w-full px-3 py-2 bg-transparent rounded border-b border-dashed border-gray-300 focus:border-gray-400 focus:outline-none text-text text-lg"
                  />
                </motion.div>
                <motion.div
                  className="mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label
                    className="text-text text-lg mr-2 w-28"
                    htmlFor="publicationDate"
                  >
                    PUBLICATION DATE :
                  </label>
                  <input
                    type="text"
                    id="publicationDate"
                    className="w-full px-3 py-2 bg-transparent rounded border-b border-dashed border-gray-300 focus:border-gray-400 focus:outline-none text-text text-lg"
                  />
                </motion.div>
                <motion.div
                  className="mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label
                    className="text-text text-lg mr-2 w-28"
                    htmlFor="language"
                  >
                    LANGUAGE:
                  </label>
                  <input
                    type="text"
                    id="language"
                    className="w-full px-10 py-2 bg-transparent rounded border-b border-dashed border-gray-300 focus:border-gray-400 focus:outline-none text-text text-lg"
                  />
                </motion.div>
                <motion.div
                  className="mb-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="text-text text-lg mr-2 w-28" htmlFor="logo">
                    LOGO:
                  </label>
                  <input type="file" id="logo" className="hidden" />
                  <label
                    htmlFor="upload-pdf"
                    className="bg-transparent text-black  bg-white text-lg p-2 rounded-2xl cursor-pointer flex items-center"
                  >
                    <SlCloudUpload size={20} className="mr-2" /> UPLOAD
                  </label>
                </motion.div>
              </form>
            </div>
          </motion.div>
          {/* content and form div */}
        </div>
      </div>
      <motion.div
        className="ml-[10%] mt-16 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Link to="#">
          <RxDoubleArrowLeft size={50} className="text-text" />
        </Link>
        <motion.button
          type="button"
          className="bg-transparent ml-16 text-black bg-white text-lg py-2 px-4 rounded-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          SAVE
        </motion.button>
        <input type="file" accept=".pdf" className="hidden" id="upload-pdf" />
        <motion.label
          htmlFor="upload-pdf"
          className="bg-transparent text-black ml-36 bg-white text-lg p-2 rounded-2xl cursor-pointer flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <SlCloudUpload size={20} className="mr-2" /> UPLOAD
        </motion.label>
      </motion.div>
      <motion.h1
        className="text-text pl-[36%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        BOOK PDF
      </motion.h1>
    </div>
  );
};

export default Bookform;

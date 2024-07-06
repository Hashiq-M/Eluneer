//to get book input from user
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SlCloudUpload } from "react-icons/sl";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const animations = {
  slideIn: (delay = 0) => ({
    initial: { x: 100 },
    animate: { x: 0 },
    transition: { duration: 0.5, delay },
  }),
  fadeIn: (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay },
  }),
  scaleIn: (delay = 0) => ({
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    transition: { duration: 0.5, delay },
  }),
};

const Bookform = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [uploadedPdfName, setUploadedPdfName] = useState("");

  const handleProfileClick = () => setIsDropdownOpen(!isDropdownOpen);

  const handleImgUpload = (event) => {
    const file = event.target.files[0];
    if (file) setUploadedImageName(file.name);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) setUploadedPdfName(file.name);
  };

  const handleSubmit = () => console.log("Form submitted!");

  return (
    <div className="bg-bg min-h-screen relative">
      <motion.div
        className="absolute right-20 top-0 bottom-0 w-14 bg-bar"
        {...animations.slideIn(0.1)}
      ></motion.div>
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-14 bg-bar"
        {...animations.slideIn()}
      ></motion.div>
      <motion.h1
        className="text-text text-4xl font-semibold tracking-[.3em] absolute top-8 right-44"
        {...animations.fadeIn()}
      >
        ELUNEER
      </motion.h1>
      <motion.h1
        className="text-text text-xl absolute top-20 right-48"
        {...animations.fadeIn()}
      >
        The Flow of Stories
      </motion.h1>
      <motion.button
        className="text-text text-xl absolute top-32 right-48"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleProfileClick}
      >
        <CgProfile size={40} />
      </motion.button>
      {isDropdownOpen && (
        <motion.div
          className="absolute right-[18%] top-36 bg-white border rounded-lg shadow-lg z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="block px-4 py-2 hover:bg-gray-200">Username</div>
          <div className="block px-4 py-2 hover:bg-gray-200">Library</div>
          <div className="block px-4 py-2 hover:bg-gray-200">
            <IoIosLogOut className="inline-block mr-2" /> Logout
          </div>
          <div className="block px-4 py-2 hover:bg-gray-200">
            <RiDeleteBin5Line className="inline-block mr-2" /> Delete Account
          </div>
        </motion.div>
      )}
      <div className="flex justify-start w-full pl-40 pt-10">
        <div className="relative">
          <motion.div
            className="bg-opacity-20 bg-cyan-500 p-20 min-h-full min-w-full rounded-xl shadow-2xl drop-shadow-2xl absolute top-8 left-8"
            {...animations.fadeIn(0.2)}
          ></motion.div>
          <motion.div
            className="bg-opacity-20 bg-cyan-500 pl-16 pt-12 pr-5 pb-3 rounded-xl shadow-2xl drop-shadow-2xl relative"
            {...animations.scaleIn()}
          >
            <div className="content z-10">
              <form>
                {[
                  { label: "BOOK ID :", id: "bookId", delay: 0.3 },
                  { label: "TITLE :", id: "title", delay: 0.4 },
                  { label: "AUTHOR :", id: "author", delay: 0.5 },
                  {
                    label: "PUBLICATION DATE :",
                    id: "publicationDate",
                    delay: 0.6,
                  },
                  { label: "LANGUAGE:", id: "language", delay: 0.7 },
                ].map((field) => (
                  <motion.div
                    className="mb-4 flex items-center"
                    {...animations.fadeIn(field.delay)}
                    key={field.id}
                  >
                    <label
                      className="text-text text-lg mr-2 w-28"
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <input
                      type="text"
                      id={field.id}
                      className="w-full px-3 py-2 bg-transparent rounded border-b border-dashed border-gray-300 focus:border-gray-400 focus:outline-none text-text text-lg"
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="mb-4 flex items-center"
                  {...animations.fadeIn(0.8)}
                >
                  <label
                    className="text-text text-lg mr-2 w-32"
                    htmlFor="upload-logo"
                  >
                    LOGO :
                  </label>
                  <input
                    type="file"
                    id="upload-logo"
                    className="hidden"
                    onChange={handleImgUpload}
                  />
                  <motion.label
                    htmlFor="upload-logo"
                    className="bg-transparent text-black ml-36 bg-white text-lg p-2 rounded-2xl cursor-pointer flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    {...animations.fadeIn(0.9)}
                  >
                    <SlCloudUpload size={20} className="mr-2" /> UPLOAD
                  </motion.label>
                  {uploadedImageName && (
                    <div className="ml-4 text-text text-lg">
                      {uploadedImageName}
                    </div>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="ml-[10%] mt-16 flex items-center"
        {...animations.fadeIn(0.9)}
      >
        <Link to="/books">
          <RxDoubleArrowLeft size={50} className="text-text" />
        </Link>
        <motion.button
          type="button"
          className="bg-transparent ml-16 text-black bg-white text-lg py-2 px-4 rounded-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSubmit}
          {...animations.fadeIn(0.9)}
        >
          SAVE
        </motion.button>
        <input
          type="file"
          accept=".pdf"
          id="upload-pdf"
          className="hidden"
          onChange={handleFileUpload}
        />
        <motion.label
          htmlFor="upload-pdf"
          className="bg-transparent text-black ml-36 bg-white text-lg p-2 rounded-2xl cursor-pointer flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          {...animations.fadeIn(0.9)}
        >
          <SlCloudUpload size={20} className="mr-2" /> UPLOAD
        </motion.label>
        {uploadedPdfName && (
          <div className="ml-4 text-text text-lg">{uploadedPdfName}</div>
        )}
      </motion.div>
      <motion.h1 className="text-text pl-[35.5%]" {...animations.fadeIn()}>
        BOOK PDF
      </motion.h1>
    </div>
  );
};

export default Bookform;

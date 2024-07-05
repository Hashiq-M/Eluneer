import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Books = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const books = [
    {
      logo: "https://preview.redd.it/understanding-fire-and-blood-the-book-vs-hotd-the-show-i-v0-3ub585fawgsa1.jpg?width=640&crop=smart&auto=webp&s=84bfdef1b88a676a191f0a5fb79e8cd9068dc4bb",
      title: "HOUSE OF THE DRAGONS",
      author: "GEORGE R.R MARTIN",
      id: 1,
    },
    // Add more book objects as needed
  ];

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        onClick={handleProfileClick}
      >
        <CgProfile size={40} />
      </motion.button>
      {isDropdownOpen && (
        <div className="absolute right-[18%] top-36 bg-white border rounded-lg shadow-lg z-10">
          <div className="block px-4 py-2 hover:bg-gray-200">Username</div>
          <div className="block px-4 py-2 hover:bg-gray-200">Library</div>
          <div className="block px-4 py-2 hover:bg-gray-200">
            <IoIosLogOut className="inline-block mr-2" /> Logout
          </div>
          <div className="block px-4 py-2 hover:bg-gray-200">
            <RiDeleteBin5Line className="inline-block mr-2" /> Delete Account
          </div>
        </div>
      )}
      <div className="ml-4 w-2/3 ">
        <div className="grid grid-cols-2 gap-4 p-5 pt-[8%]">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-bg p-4 flex items-center justify-center border rounded-lg"
            >
              <img
                src={book.logo}
                alt="LOGO"
                className="w-20 h-20 rounded-full mb-4 object-cover bg-gray-300 mr-4"
              />
              <div className="flex flex-col">
                <div className="text-xl font-bold mb-2">{book.title}</div>
                <div className="text-lg">{book.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/bookform"
        className="text-black text-sm bg-bar border border-gray-300 p-1 rounded-2xl absolute bottom-5 right-[12%] box"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <BsPlusLg size={30} />
        </motion.div>
      </Link>
    </div>
  );
};

export default Books;

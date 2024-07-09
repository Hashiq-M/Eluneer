//to list every book side by side
import { useState, useEffect } from "react";
import { IoIosLogOut } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

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
        <motion.div
          className="absolute right-[17%] top-36 bg-white border rounded-lg shadow-lg z-10"
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
      <div className="ml-4 w-[70%]">
        <div className="grid grid-cols-2 gap-10 p-5 pt-[8%]">
          {books.map((book) => (
            <motion.div
              key={book.id}
              className="bg-gradient-to-b from-bg via-cyan-800 to-bg p-7 flex items-center justify-center rounded-lg shadow-[rgba(0,0,15,0.5)_10px_10px_4px_0px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/book/${book._id}`)}
            >
              <img
                src={book.logo}
                alt="LOGO"
                className="w-24 h-24 rounded-full object-cover bg-gray-300 mr-4"
              />
              <div className="flex flex-col">
                <div className="text-lg font-serif font-bold mb-2">
                  {book.title}
                </div>
                <div className="text-lg font-serif font-bold">
                  {book.author}
                </div>
              </div>
            </motion.div>
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

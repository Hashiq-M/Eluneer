//single book's component
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RiDeleteBin5Line } from "react-icons/ri";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" });
      navigate("/books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="bg-bg min-h-screen flex flex-col items-center justify-center">
      <motion.div
        className="bg-gradient-to-b from-bg via-cyan-800 to-bg p-7 flex items-center justify-center rounded-lg shadow-[rgba(0,0,15,0.5)_10px_10px_4px_0px] mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={book.logo}
          alt="LOGO"
          className="w-24 h-24 rounded-full object-cover bg-gray-300 mr-4"
        />
        <div className="flex flex-col">
          <div className="text-lg font-serif font-bold mb-2">{book.title}</div>
          <div className="text-lg font-serif font-bold">{book.author}</div>
          <div className="text-lg font-serif">Language: {book.language}</div>
          <div className="text-lg font-serif">Date: {book.date}</div>
        </div>
      </motion.div>

      <div className="bg-white p-5 rounded-lg shadow-lg w-[60%] flex justify-between">
        <div className="text-lg font-serif mb-2">Book URL: {book.url}</div>
        <button
          onClick={handleDelete}
          className="text-red-600 flex items-center"
        >
          <RiDeleteBin5Line className="mr-2" /> Delete Book
        </button>
      </div>
    </div>
  );
};

export default BookDetails;

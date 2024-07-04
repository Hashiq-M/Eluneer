import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="bg-bg min-h-screen flex items-center">
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
      <motion.h1
        className="text-text text-4xl font-semibold tracking-[.3em] ml-44 mt-8 absolute top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ELUNEER
      </motion.h1>
      <div className="flex justify-end w-full pr-20">
        <div className="relative">
          <motion.div
            className="bg-opacity-20 bg-cyan-500 p-10 min-h-full min-w-full rounded-xl shadow-2xl drop-shadow-2xl absolute top-8 left-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="bg-opacity-20 bg-cyan-500 pl-10 pt-10 pr-5 pb-5 rounded-xl shadow-2xl drop-shadow-2xl relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="content z-10">
              <motion.h2
                className="text-4xl font-semibold text-center tracking-[.1em] text-text mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                WELCOME BACK
              </motion.h2>
              <motion.p
                className="mb-5 text-text text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Welcome back! Please enter your details.
              </motion.p>
              <form>
                <div className="mb-4 text-text">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 rounded-lg bg-transparent border border-gray-300 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4 text-text">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 bg-transparent rounded-lg border border-gray-300 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-white text-black py-2 rounded-md transition-transform duration-300 hover:bg-slate-100 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#"> Sign Up</a>
                </motion.button>
              </form>
              <div className="mt-4">
                <a href="#">
                  <motion.button
                    className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg transition-transform duration-300 hover:border-white font-semibold text-text"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FcGoogle size={20} className="mr-2" />
                    Sign in with Google
                  </motion.button>
                </a>
              </div>
              <motion.p
                className="mt-4 text-center text-text text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Already have an account?
                <Link
                  to="/login"
                  className="text-cyan-500 ml-4 hover:underline"
                >
                  Login
                </Link>
              </motion.p>
            </div>
          </motion.div>
          {/* content and form div */}
        </div>
      </div>
      {/* total form */}
    </div>
  );
};

export default Signup;

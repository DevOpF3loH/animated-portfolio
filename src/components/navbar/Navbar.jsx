import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          DevF3lOh
        </motion.span>
        <div className="social">
          <a href="https://github.com/DevOpF3loH">
            <i className="topIcon fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nthiwa-felix-04bb5724b/">
            <i className="topIcon fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.upwork.com/freelancers/~018995a846d341435a">
            <i className="topIcon fa-solid fa-laptop-code"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

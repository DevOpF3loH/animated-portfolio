import "./Services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>
          A software developer and graphics designer
          <br />
          with a passion for learning and creating.
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img className="peopleimg" src="/people.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
        </div>
      </div>
      <div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            We help in creating and identity and story for your company that
            makes it stand out from competitors that sell similar products or
            services. The goal of branding is to earn space in the minds of the
            target audience and become their preferred option for doing
            business.
          </p>
          <img className="adlogo" src="/branding.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UX/UI Design</h2>
          <p>
            In UX, we design products focused on creating a seamless and
            meaningful user experience by understanding user needs, conducting
            research, and designing intuitive interfaces. In UI, we design
            products focused on the visual, interactive elements to create
            aesthetically-pleasing interfaces.
          </p>
          <img className="adlogo" src="/uxui.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Development</h2>
          <p>
            We build, test and deploy softwares while writing clear and concise
            code based on the specifications we receive from the client. We also
            offer maintenance and troubleshooting if required.
          </p>
          <img className="adlogo" src="/software.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Graphics Designer</h2>
          <p>
            We create visually appealing designs that communicate a specific
            message or concept to the intended audience. We have an
            understanding of the latest design trends to make your product
            popular and blend in with the other trends.
          </p>
          <img className="adlogo" src="/graphics.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

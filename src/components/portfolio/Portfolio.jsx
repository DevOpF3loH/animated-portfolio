import { useRef } from "react";
import "./Portfolio.scss";
import felcon from "/felconXL.png";
import codehub from "/codehubXL.png";
import mesmerizing from "/mesmerizingXL.png";
import moviebay from "/moviebayXL.png";
import musicbay from "/musicbayXL.png";
import niambieChat from "/niambieChatXL.png";
import niambie from "/niambieXL.png";
import deliveroo from "/deliveroo.jpg";
import bonga from "/bonga.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Online Clothing Site",
    img: felcon,
    desc: "An online clothing e-commence website capable of signing and has the add to cart feature.",
    gitlink: "https://github.com/DevOpF3loH/felcon-clothing",
    link: "https://felcon-clothing.web.app/",
  },
  {
    id: 2,
    title: "Online Coding Chat Site",
    img: codehub,
    desc: "An online chat website where coders can meet and interact with each other while helping out on coding issues or problems they encounter.",
    gitlink: "https://github.com/DevOpF3loH/codehub",
    link: "https://codehub-4191e.web.app/",
  },
  {
    id: 3,
    title: "Tik Tok clone",
    img: mesmerizing,
    desc: "A Tik Tok clone website called mesmerizing",
    gitlink: "https://github.com/DevOpF3loH/mesmerizing",
    link: "https://mesmerizing-20739.web.app/",
  },
  {
    id: 4,
    title: "Netflix clone",
    img: moviebay,
    desc: "A Netflix clone website called moviebay.",
    gitlink: "https://github.com/DevOpF3loH/moviebay",
    link: "https://moviebay-1d34b.web.app/",
  },
  {
    id: 5,
    title: "Spotify clone",
    img: musicbay,
    desc: "A spotify clone website called musicbay.",
    gitlink: "https://github.com/DevOpF3loH/musicbay",
    link: "https://musicbay-4a601.web.app/",
  },
  {
    id: 6,
    title: "Niambie Chat",
    img: niambieChat,
    desc: "A social media application like Whatsapp where people can reach and interact with each other.",
    gitlink: "https://github.com/DevOpF3loH/niambie",
    link: "https://niambie-5e021.web.app/",
  },
  {
    id: 7,
    title: "Niambie Social",
    img: niambie,
    desc: "A social media application like instagram where people can post, like and share.",
    gitlink: "https://github.com/DevOpF3loH/social-media",
    link: "https://social-media-201a8.web.app/",
  },
  {
    id: 8,
    title: "Deliveroo App",
    img: deliveroo,
    desc: "A food delivery mobile application where people can order food.",
    gitlink: "https://github.com/DevOpF3loH/deliveroo",
    link: "https://github.com/DevOpF3loH/deliveroo",
  },
  {
    id: 9,
    title: "Bonga App",
    img: bonga,
    desc: "A chat mobile application where people can communicate with each other.",
    gitlink: "https://github.com/DevOpF3loH/bonga",
    link: "https://github.com/DevOpF3loH/bonga",
  },
  {
    id: 10,
    title: "Meooow!!",
    img: "http://thecatapi.com/api/images/get?format=src&type=gif&size=small",
    desc: "Just a random cat. Start the mewsic, it's caturday!!",
    gitlink: "https://github.com/DevOpF3loH",
    link: "http://thecatapi.com",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonsContainer">
              <a href={`${item.link}`}>
                <button>Demo</button>
              </a>
              <a href={`${item.gitlink}`}>
                <button>Code</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

import { motion } from "framer-motion";
import useSound from "use-sound";
import sound from "/lastpianist.mp3";
import { useState } from "react";

const ToggleButton = ({ setOpen }) => {
  const [play, { stop }] = useSound(sound, { interrupt: true });

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleMusicIconClick = () => {
    play();
    setIsMusicPlaying(true);
  };

  const handleMusicOffClick = () => {
    stop();
    setIsMusicPlaying(false);
  };
  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className="buttons1">
        <motion.i
          className="toggleIcon fa-solid fa-bars"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        ></motion.i>
        <motion.i
          className="toggleIcon fa-solid fa-x"
          variants={{
            closed: { opacity: 0 },
            open: { opacity: 1 },
          }}
        ></motion.i>
      </button>
      <button className="buttons2">
        <i
          className={`musicIcon fa-solid fa-music ${
            isMusicPlaying ? "musicIconPlaying" : ""
          }`}
          onClick={handleMusicIconClick}
        ></i>
        <i
          className={`musicOff fa-solid fa-volume-xmark ${
            !isMusicPlaying ? "musicOffOn" : ""
          }`}
          onClick={handleMusicOffClick}
        ></i>
      </button>
    </>
  );
};

export default ToggleButton;

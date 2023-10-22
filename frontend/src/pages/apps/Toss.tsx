import { useState, useRef } from "react";
import music from "../../assets/music/soothing_music.mp3"; // Replace with the actual path
import {
  Button,
} from "@nextui-org/react";
import {FaPauseCircle, FaPlay,FaSyncAlt } from "react-icons/fa"; // Import icons from react-icons
import songimg from "../../assets/images/m1.png";

const Toss: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  return (
      <main className="dashboard-app-container">
        <h1 className="font-bold text-center text-4xl">Listen to Music</h1>
        <section>
          <div className="audio-controls h-[100vh] translate-y-[15%]">
            <audio ref={audioRef} src={music} loop={isLooping} />
            <div className="text-center mt-4 flex flex-col items-center"> 
              <img
                className="w-[35%] mt-4 rounded-3xl"
                src={songimg}
                alt="song"
               />
            <div className="text-center mt-4">
          </div>
              <h2 className="font-bold">Soothing Music</h2> {/* Replace with the actual song name */}
            </div>
            <div className="flex items-center justify-center mt-4">
              <Button
                onClick={toggleLoop}
                className={`mr-4 ${
                  isLooping ? "bg-blue-500" : "bg-gray-300"
                } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-110`}
              >
                <FaSyncAlt /> {/* Loop icon */}
              </Button>
              <Button
                onClick={toggleAudio}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-110"
              >
                {isPlaying ? <FaPauseCircle /> : <FaPlay />} {/* Play and Pause icons */}
              </Button>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Toss;

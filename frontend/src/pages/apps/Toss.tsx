import { useState, useRef } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import music from "../../assets/music/soothing_music.mp3"; // Replace with the actual path
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
import {HeartIcon} from "./HeartIcon";
import {PauseCircleIcon} from "./PauseCircleIcon";
import {NextIcon} from "./NextIcon";
import {PreviousIcon} from "./PreviousIcon";
import {RepeatOneIcon} from "./RepeatOneIcon";
import {ShuffleIcon} from "./ShuffleIcon";


const Toss: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
    } else if (audioRef.current) {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Listen to Music</h1>
        <section>

          <div className="audio-controls">
            <audio ref={audioRef} src={music} />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-110"
              onClick={toggleAudio}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Toss;

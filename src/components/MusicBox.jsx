import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Music from '../music/awm.mp3';

const MusicBox = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6">
            <div className="bg-zinc-800 p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition-all duration-300 border border-zinc-700">
                <button 
                    onClick={handlePlay} 
                    className="text-zinc-300 text-2xl hover:text-white transition-colors duration-300"
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
            <audio ref={audioRef} src={Music} loop></audio>
        </div>
    );
};

export default MusicBox;
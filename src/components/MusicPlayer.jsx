import { useState, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react'; // Dùng lại bộ icon xịn xò này

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Thẻ audio ẩn chứa link nhạc của TX */}
      <audio ref={audioRef} loop src="/audio/nhac-nen.mp3" />
      
      {/* Nút bấm nổi ở góc dưới bên trái */}
      <button
        onClick={toggleMusic}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 border-2 ${
          isPlaying 
            ? 'bg-[#F075AE] border-white text-white animate-bounce' // Khi đang phát nhạc
            : 'bg-white border-[#F075AE] text-[#F075AE] hover:bg-gray-50' // Khi tắt nhạc
        }`}
        title="Bật/Tắt Nhạc Nền"
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}
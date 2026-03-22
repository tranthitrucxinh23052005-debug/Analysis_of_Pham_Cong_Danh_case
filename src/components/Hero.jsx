import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center relative">
      
      {/* Cục tròn tròn trang trí cho có vibe Cyber Pastel */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#AEDEFC] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#FFD8DF] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-[#F075AE] drop-shadow-[0_0_10px_#FFAAB8] mb-6 z-10"
      >
        Hệ Lụy Ngàn Tỷ: Nhìn Lại Đại Án VNCB
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl text-[#555] max-w-2xl mb-10 z-10"
      >
        Khám phá bức tranh toàn cảnh về sai phạm quản trị, thao túng tài chính và những bài học pháp lý đắt giá từ vụ án Phạm Công Danh & đồng phạm.
      </motion.p>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-[#F075AE] text-white font-bold rounded-full shadow-[0_0_15px_#FFAAB8] hover:bg-[#FFAAB8] transition z-10"
      >
        Lướt xuống để tìm hiểu 🔻
      </motion.button>
      
    </section>
  )
}
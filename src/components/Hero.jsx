import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen p-8 text-center relative bg-[#FAF4EB]">
      
      {/* Cục tròn tròn trang trí cho có vibe Cyber Pastel */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#8D6E63] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-[#3E2723] drop-shadow-[0_0_10px_#D4A373] mb-6 z-10"
      >
        Hệ Lụy Nghìn Tỷ: Nhìn Lại Đại Án VNCB
      </motion.h1>

    <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-justify text-2xl md:text-4xl text-[#555] max-w-5xl mx-auto mb-10 z-10 leading-relaxed px-4" 
      >
        Khám phá bức tranh toàn cảnh về sai phạm quản trị, thao túng tài chính và những bài học pháp lý đắt giá từ vụ án Phạm Công Danh & <span className="whitespace-nowrap">đồng phạm.</span>
      </motion.p>
      
    </section>
  )
}
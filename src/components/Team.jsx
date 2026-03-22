import { motion } from 'framer-motion';

const members = [
  { 
    name: "Trần Thị Trúc Xinh", 
    role: "Thành viên 1", 
    color: "border-[#F075AE]", 
    image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/615882818_1420820776179043_6236808049804699768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ucVV3TujXk4Q7kNvwEA3pUV&_nc_oc=AdqzMfBkoWwvyPDxA98yi3Lt68ajedcdDH6yQDtaTxB_SnhqOJEkpMA0_F_9xFGYCCVvtPOjZr0Fubt638tBh7cd&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=C9drOtz-B5_ib3DNzSKg5A&_nc_ss=7a32e&oh=00_AfxmNdK9F_AmacOY2RZzwORO3Oagsh68xX1HzVCbWg8ntQ&oe=69C60646" 
  },
  { 
    name: "Đào Việt Anh", 
    role: "Thành viên 2", 
    color: "border-[#4FA8FB]", 
    image: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/625852651_1465658361843116_8947290341065957748_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=XvK2-mtriqsQ7kNvwGVIAAZ&_nc_oc=Adq6aV-OhEovkj8srrtkqPk9ixIWoJ8AhIPVdm_ESH9jNFK2HzrzsULLfPOnjxBG1d6lgtrkLE3w9dHoKpxYOFUw&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=Btur_JsXRfIPpZ10xhqLHw&_nc_ss=7a32e&oh=00_Afwr9nPCzqVdPiIYVBJ2nrk6vIxIWUOQ0KgaBaeMW7FIpw&oe=69C5F860" 
  },
  { 
    name: "Nguyễn Phan Quỳnh Thy", 
    role: "Thành viên 3", 
    color: "border-[#A8DF8E]", 
    image: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/597814169_1343969300535986_3280261946746595971_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_keBhYk1a5sQ7kNvwGXoMbL&_nc_oc=AdriyyMaxd4vbY1PCYyit5-qjc03UBUtO8k-QDjr14Tiz1Qc_4YofNmcg9GiqRfHhbqpxMi8WeVbHgdJ67MrJpDi&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=BrSP_E9eufqi2pR6FaQLwQ&_nc_ss=7a32e&oh=00_AfyELZYe0tk2wltrwlwTij9NldYjGZi1sX3qqXFT6fPacw&oe=69C5FE26" 
  },
  { 
    name: "Nguyễn Thị Nhã Phương", 
    role: "Thành viên 4", 
    color: "border-[#FFAAB8]", 
    image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/560804256_2282105845620850_3410037019477848942_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r1awfYk1t80Q7kNvwH7zfn0&_nc_oc=AdpusM5nm6_lAB4QcYXsQF34Fvu8_kjfESg_ircabC7niMvXZowLf2TCZpQPKhbxqQKuFfTp4Y4wuAOjfFvFgifx&_nc_zt=24&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=HJy-n9dk4YsyBBZPWQIimQ&_nc_ss=7a32e&oh=00_AfykamqE4dxoRH2D09-QcLpe7-W1naKe4qp7YA4oI-w_gQ&oe=69C5F438" 
  }
];

export default function Team() {
  return (
    <section className="py-20 px-8 bg-[#A8DF8E]/20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFD8DF] rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-black text-[#F075AE] mb-16 uppercase tracking-widest drop-shadow-sm"
        >
          Đội Ngũ Thực Hiện
        </motion.h2>

        {/* Danh sách thành viên với Avatar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-xl flex flex-col items-center group"
            >
              <div className={`w-28 h-28 rounded-full mb-6 p-1 border-4 ${m.color} overflow-hidden shadow-lg transition-transform group-hover:scale-105`}>
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-full h-full object-cover rounded-full bg-gray-100"
                />
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-base md:text-lg mb-1">{m.name}</h3>
              <p className="text-[#F075AE] text-[10px] uppercase font-black tracking-widest bg-[#FFD8DF]/30 px-3 py-1 rounded-full">{m.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-[#FFAAB8]/30 pt-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-[#AEDEFC] shadow-xl text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#AEDEFC]/20 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-xl font-black text-[#4FA8FB] mb-4">University of Banking HCMC</h3>
            <p className="text-[#555] text-sm italic leading-relaxed relative z-10">
              "Dự án này không chỉ là một bài tiểu luận, mà là lời nhắc cho tương lai: Luôn tỉnh táo trước mọi 'bất thường' và luôn liêm chính và tuân thủ pháp luật."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#F0FFDF] p-6 rounded-2xl border-l-8 border-[#A8DF8E] shadow-sm text-left">
              <h4 className="font-black text-[#1a1a1a] text-sm uppercase mb-1">🎯 Mục tiêu dự án</h4>
              <p className="text-xs text-[#555]">Phân tích hệ lụy pháp lý và kỹ thuật từ đại án VNCB.</p>
            </div>
            <div className="bg-[#FFD8DF]/50 p-6 rounded-2xl border-l-8 border-[#F075AE] shadow-sm text-left">
              <h4 className="font-black text-[#1a1a1a] text-sm uppercase mb-1">🛡️ Sứ mệnh</h4>
              <p className="text-xs text-[#555]">Cập nhật Luật Các TCTD 2024 để xây dựng tư duy quản trị vững chắc.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-[#888]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#888] font-bold uppercase tracking-widest">
            <p>© 2026 Nhìn Lại Đại Án VNCB</p>
            <p>Developed with 💖 by Team HUB</p>
            <p>Data Science in Business</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
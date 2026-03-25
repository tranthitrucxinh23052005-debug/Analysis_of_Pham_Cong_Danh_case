import { motion } from 'framer-motion';

const members = [
  { 
    name: "Trần Thị Trúc Xinh", 
    role: "Thành viên 1", 
    color: "border-[#8D6E63]", 
    image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/615882818_1420820776179043_6236808049804699768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ucVV3TujXk4Q7kNvwEA3pUV&_nc_oc=AdqzMfBkoWwvyPDxA98yi3Lt68ajedcdDH6yQDtaTxB_SnhqOJEkpMA0_F_9xFGYCCVvtPOjZr0Fubt638tBh7cd&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=C9drOtz-B5_ib3DNzSKg5A&_nc_ss=7a32e&oh=00_AfxmNdK9F_AmacOY2RZzwORO3Oagsh68xX1HzVCbWg8ntQ&oe=69C60646" 
  },
  { 
    name: "Đào Việt Anh", 
    role: "Thành viên 2", 
    color: "border-[#D4A373]", 
    image: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/625852651_1465658361843116_8947290341065957748_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=XvK2-mtriqsQ7kNvwGVIAAZ&_nc_oc=Adq6aV-OhEovkj8srrtkqPk9ixIWoJ8AhIPVdm_ESH9jNFK2HzrzsULLfPOnjxBG1d6lgtrkLE3w9dHoKpxYOFUw&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=Btur_JsXRfIPpZ10xhqLHw&_nc_ss=7a32e&oh=00_Afwr9nPCzqVdPiIYVBJ2nrk6vIxIWUOQ0KgaBaeMW7FIpw&oe=69C5F860" 
  },
  { 
    name: "Nguyễn Phan Quỳnh Thy", 
    role: "Thành viên 3", 
    color: "border-[#3E2723]", 
    image: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/597814169_1343969300535986_3280261946746595971_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=_keBhYk1a5sQ7kNvwGXoMbL&_nc_oc=AdriyyMaxd4vbY1PCYyit5-qjc03UBUtO8k-QDjr14Tiz1Qc_4YofNmcg9GiqRfHhbqpxMi8WeVbHgdJ67MrJpDi&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=BrSP_E9eufqi2pR6FaQLwQ&_nc_ss=7a32e&oh=00_AfyELZYe0tk2wltrwlwTij9NldYjGZi1sX3qqXFT6fPacw&oe=69C5FE26" 
  },
  { 
    name: "Nguyễn Thị Nhã Phương", 
    role: "Thành viên 4", 
    color: "border-[#8D6E63]", 
    image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/560804256_2282105845620850_3410037019477848942_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=r1awfYk1t80Q7kNvwH7zfn0&_nc_oc=AdpusM5nm6_lAB4QcYXsQF34Fvu8_kjfESg_ircabC7niMvXZowLf2TCZpQPKhbxqQKuFfTp4Y4wuAOjfFvFgifx&_nc_zt=24&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=HJy-n9dk4YsyBBZPWQIimQ&_nc_ss=7a32e&oh=00_AfykamqE4dxoRH2D09-QcLpe7-W1naKe4qp7YA4oI-w_gQ&oe=69C5F438" 
  }
];

export default function Team() {
  return (
    <section className="py-20 px-8 bg-[#FAF4EB] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EAE0D5] rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-black text-[#3E2723] mb-16 uppercase tracking-widest drop-shadow-sm"
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
              className="bg-[#EAE0D5]/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-[#D4A373]/30 shadow-xl flex flex-col items-center group"
            >
              <div className={`w-28 h-28 rounded-full mb-6 p-1 border-4 ${m.color} overflow-hidden shadow-lg transition-transform group-hover:scale-105 bg-[#FAF4EB]`}>
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-[#3E2723] text-base md:text-lg mb-1">{m.name}</h3>
              <p className="text-[#8D6E63] text-[10px] uppercase font-black tracking-widest bg-[#D4A373]/20 px-3 py-1 rounded-full">{m.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-[#D4A373]/30 pt-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#EAE0D5]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-[#D4A373]/40 shadow-xl text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A373]/10 rounded-full -mr-10 -mt-10"></div>
            <h3 className="text-xl font-black text-[#3E2723] mb-4">University of Banking HCMC</h3>
            <p className="text-[#555] text-sm italic leading-relaxed relative z-10">
              "Dự án này không chỉ là một bài tiểu luận, mà là lời nhắc cho tương lai: Luôn tỉnh táo trước mọi 'bất thường' và luôn liêm chính và tuân thủ pháp luật."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#FAF4EB] p-6 rounded-2xl border-l-8 border-[#8D6E63] shadow-sm text-left">
              <h4 className="font-black text-[#3E2723] text-sm uppercase mb-1">🎯 Mục tiêu dự án</h4>
              <p className="text-xs text-[#555]">Phân tích hệ lụy pháp lý và kỹ thuật từ đại án VNCB.</p>
            </div>
            <div className="bg-[#FAF4EB] p-6 rounded-2xl border-l-8 border-[#D4A373] shadow-sm text-left">
              <h4 className="font-black text-[#3E2723] text-sm uppercase mb-1">🛡️ Sứ mệnh</h4>
              <p className="text-xs text-[#555]">Cập nhật Luật Các TCTD 2024 để xây dựng tư duy quản trị vững chắc.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-[#D4A373]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#8D6E63] font-bold uppercase tracking-widest">
            <p>© 2026 Nhìn Lại Đại Án VNCB</p>
            <p>Developed with 💖 by Team HUB</p>
            <p>Data Science in Business</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
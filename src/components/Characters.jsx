import { motion } from 'framer-motion';

const characters = [
  {
    name: "Phạm Công Danh",
    role: "Nguyên Chủ tịch HĐQT VNCB",
    desc: "Chủ mưu trong vụ án gây thiệt hại hơn 9.000 tỷ đồng tại VNCB. Bị cáo đã chỉ đạo lập hồ sơ khống, dùng tiền ngân hàng bảo lãnh cho các công ty sân sau vay vốn trái phép, dẫn đến mất khả năng thu hồi tài sản.",
    img: "https://tse4.mm.bing.net/th/id/OIP.nKCknNP0T3_NIjupCxgGIAHaF6?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Phan Thành Mai",
    role: "Nguyên Tổng Giám đốc VNCB",
    desc: "Đóng vai trò giúp sức đắc lực cho Phạm Công Danh. Bị cáo trực tiếp tham gia xây dựng các phương án tái cơ cấu ảo, phê duyệt các hồ sơ vay vốn sai quy định và điều hành dòng tiền trái pháp luật.",
    img: "https://tse4.mm.bing.net/th/id/OIP.Sc5ZXgO4IekjWCAIN3wPvwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Mai Hữu Khương",
    role: "Nguyên Giám đốc VNCB CN Sài Gòn",
    desc: "Thành viên HĐQT, trực tiếp ký các hồ sơ tín dụng dù biết rõ tài sản thế chấp chưa đủ điều kiện pháp lý hoặc là hồ sơ khống, tạo điều kiện để Phạm Công Danh rút tiền trái phép.",
    img: "https://photo.znews.vn/Uploaded/bpivpbbp/2018_01_23/maihuukhuong_zing.jpg"
  },
  {
    name: "Trầm Bê",
    role: "Nguyên Phó Chủ tịch HĐQT Sacombank",
    desc: "Bị cáo can thiệp vào quy trình tín dụng tại Sacombank, phê duyệt cho nhóm Phạm Công Danh vay 1.800 tỷ đồng khi chưa thẩm định đầy đủ điều kiện, gây hậu quả nghiêm trọng khi VNCB mất tiền bảo lãnh.",
    img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2019/8/27/751361/Tram-Be--Gui-1.jpg?w=800&h=496&crop=auto&scale=both"
  },
  {
    name: "Hứa Thị Phấn",
    role: "Nguyên Cố vấn cấp cao TrustBank",
    desc: "Thao túng và chi phối toàn bộ hoạt động của TrustBank (tiền thân của VNCB). Bà đã chỉ đạo lập hồ sơ khống, sử dụng các công ty “sân sau” để vay vốn trái quy định, rút tiền ngân hàng phục vụ lợi ích cá nhân..",
    img: "https://tse1.mm.bing.net/th/id/OIP.DcFOYhOvC6ABni6piYcRPgHaEm?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export default function Characters() {
  return (
    <section className="py-20 px-8 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#F075AE] mb-4 drop-shadow-[0_0_6px_#FFAAB8]"
        >
          NHỮNG BÀN TAY VÀNG TRONG BÓNG TỐI
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#555] mb-12 text-lg md:text-xl font-medium"
        >
          Những mắt xích quyền lực trong các đại án tài chính ngân hàng
        </motion.p>

        {/* Chỉnh lại grid: tự động co giãn đẹp mắt với 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {characters.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-[#AEDEFC] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_#FFAAB8] transition flex flex-col items-center text-center"
            >
              <img 
                src={char.img} 
                alt={char.name} 
                className="w-32 h-32 rounded-full mb-4 border-4 border-[#FFAAB8] hover:scale-110 transition duration-300 bg-white"
              />
              <h3 className="text-2xl font-bold text-[#F075AE] mb-2">{char.name}</h3>
              <p className="font-bold text-[#1a1a1a] mb-3 px-3 py-1 bg-[#FFD8DF] rounded-full text-sm inline-block">{char.role}</p>
              <p className="text-[#555] text-sm leading-relaxed">{char.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
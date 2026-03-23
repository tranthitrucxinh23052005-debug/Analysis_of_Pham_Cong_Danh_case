import { motion } from 'framer-motion';

const laws = [
  {
    article: "Điều 179 Bộ luật Hình sự ",
    title: "Vi phạm quy định về cho vay trong hoạt động của các tổ chức tín dụng.",
    desc: "Phạt tù từ 10-20 năm nếu gây hậu quả đặc biệt nghiêm trọng. Đây chính là cái bẫy mà các sếp VNCB đã sa chân vào khi ký duyệt hồ sơ khống.",
    color: "bg-[#AEDEFC]/40"
  },
  {
    article: "Thông tư 39/2016/TT-NHNN",
    title: "Quy định về hoạt động cho vay, nhấn mạnh việc kiểm tra mục đích sử dụng vốn",
    desc: "Lợi dụng chức vụ, quyền hạn để chiếm đoạt tài sản mà mình có trách nhiệm quản lý. Hình phạt cao nhất là tử hình hoặc tù chung thân.",
    color: "bg-[#FFD8DF]/40"
  },
  {
    article: "QĐ 2345/QĐ-NHNN",
    title: "Xác thực sinh trắc học",
    desc: "Bắt buộc quét khuôn mặt cho giao dịch trên 10 triệu đồng. Khai tử hoàn toàn kỷ nguyên giả mạo chữ ký tay hay chiếm quyền điều khiển điện thoại.",
    color: "bg-[#A8DF8E]/40"
  },
  {
    article: "Luật GDĐT 2023",
    title: "Chữ ký số pháp lý",
    desc: "Đảm bảo tính chống chối bỏ tuyệt đối trong mọi giao dịch điện tử. Mọi dấu vết gian lận đều bị ghi lại và không thể chối cãi.",
    color: "bg-[#F6F0D7]/40"
  },
    {
    article: "Điều 157 - Luật 2024",
    title: "Cơ chế Can thiệp sớm",
    desc: "NHNN sẽ 'vào cuộc' ngay khi ngân hàng lỗ lũy kế vượt 15% vốn hoặc có dấu hiệu rút tiền hàng loạt (Bank run), không đợi đến khi đổ vỡ.",
    color: "bg-[#A8DF8E]/40"
  }
];

export default function Laws() {
  return (
    <section className="py-20 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-4xl font-bold text-[#F075AE] mb-12 text-center drop-shadow-[0_0_5px_#FFAAB8]"
        >
          Một Số Điều Luật Cần Biết
        </motion.h2>

        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
          {laws.map((law, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`min-w-[280px] md:min-w-[320px] ${law.color} backdrop-blur-md p-8 rounded-3xl border-2 border-white/50 shadow-lg snap-center`}
            >
              <div className="text-sm font-black text-[#F075AE] uppercase tracking-widest mb-2">{law.article}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{law.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed italic">
                "{law.desc}"
              </p>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-[#555] text-xs mt-4 animate-pulse">
          ← Vuốt ngang để xem thêm các "bí kíp" phòng thân →
        </p>
      </div>
    </section>
  )
}
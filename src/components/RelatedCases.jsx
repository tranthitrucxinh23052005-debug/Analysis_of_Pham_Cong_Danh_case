import { motion } from 'framer-motion';

const cases = [
  {
    title: "Đại án OceanBank (Hà Văn Thắm)",
    time: "2010 - 2014",
    tag: "Lãi suất ngoài",
    content: "Lợi dụng tầm ảnh hưởng tại Ocean Group để chi phối ngân hàng, huy động vốn bằng mọi giá phục vụ hệ sinh thái cá nhân.",
    method: "Chi lãi ngoài hợp đồng (chăm sóc khách hàng) cho nhóm PVN, lập hợp đồng khống để rút tiền.",
    loss: "~2.000 tỷ đồng - Ngân hàng bị mua lại 0 đồng.",
    color: "border-[#4FA8FB]"
  },
  {
    title: "Siêu đại án SCB - Vạn Thịnh Phát",
    time: "2012 - 2022",
    tag: "Ngân hàng túi",
    content: "Bà Trương Mỹ Lan nắm giữ >90% cổ phần qua mạng lưới bình phong, biến SCB thành công cụ tài trợ cho BĐS của Vạn Thịnh Phát.",
    method: "Lập hàng nghìn pháp nhân 'ma', nâng khống tài sản đảm bảo gấp hàng chục lần, tẩu tán dòng tiền ra nước ngoài.",
    loss: "Hàng trăm nghìn tỷ đồng - Quy mô lớn nhất lịch sử tài chính.",
    color: "border-[#F075AE]"
  }
];

export default function RelatedCases() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase">
            Hệ Hệ Sinh Thái <span className="text-[#F075AE]">Sai Phạm</span>
          </h2>
          <p className="text-[#888] mt-4 italic">So sánh các lỗ hổng hệ thống qua những đại án tiêu biểu</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-3xl border-l-8 ${c.color} bg-gray-50 shadow-xl relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 text-[10px] font-bold bg-white px-3 py-1 rounded-full shadow-sm text-gray-400">
                {c.time}
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-[#888]">{c.tag}</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-[#1a1a1a]">{c.title}</h3>
              <p className="text-sm text-[#555] mb-4 leading-relaxed">{c.content}</p>
              <div className="space-y-3">
                <div className="bg-white/80 p-3 rounded-xl text-xs">
                  <span className="font-bold text-red-500">Thủ đoạn:</span> {c.method}
                </div>
                <div className="bg-white/80 p-3 rounded-xl text-xs">
                  <span className="font-bold text-gray-700">Thiệt hại:</span> {c.loss}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Ba lỗ hổng chí mạng */}
        <div className="bg-[#AEDEFC]/20 p-8 md:p-12 rounded-[3rem] border border-[#AEDEFC]">
          <h3 className="text-2xl font-black text-center mb-12 text-[#4FA8FB]">3 "LỖ HỔNG" CHÍ MẠNG DẪN ĐẾN SAI PHẠM</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4FA8FB] text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">1</div>
              <h4 className="font-bold text-lg">Vô hiệu hóa kiểm soát</h4>
              <p className="text-sm text-[#555] leading-relaxed">Cổ đông lớn chi phối tuyệt đối, biến bộ phận quản trị rủi ro thành công cụ "hợp thức hóa" hồ sơ sai phạm.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#F075AE] text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">2</div>
              <h4 className="font-bold text-lg">Sở hữu chéo & Công ty Ma</h4>
              <p className="text-sm text-[#555] leading-relaxed">Thiết lập mạng lưới hàng trăm công ty sân sau để chia nhỏ dòng vốn, lách quy định về hạn mức tín dụng.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#A8DF8E] text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">3</div>
              <h4 className="font-bold text-lg">Tha hóa giám sát</h4>
              <p className="text-sm text-[#555] leading-relaxed">Sự thiếu độc lập của các cơ quan thanh tra, thậm chí bị mua chuộc khiến sai phạm tích tụ qua nhiều nhiệm kỳ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';

export default function Analysis() {
  // Đưa dữ liệu vào mảng để code sạch sẽ và dễ quản lý hơn
  const scenarios = [
    {
      id: "1",
      title: "System Takeover (DB Manipulation)",
      desc: "Can thiệp cơ sở dữ liệu để chỉnh sửa số dư/trạng thái tài sản thế chấp mà không qua giao diện UI. Giao dịch hợp lệ trên hệ thống nhưng thực tế không có dòng tiền.",
      icon: "💻",
      color: "border-[#4FA8FB]"
    },
    {
      id: "2",
      title: "Logic Flaw (Race Condition)",
      desc: "Lợi dụng lỗi thiết kế (Security by Design). Thực hiện hàng loạt giao dịch rút tiền nhỏ cùng lúc để hệ thống giải ngân xong trước khi kịp cập nhật số dư âm.",
      icon: "⚙️",
      color: "border-[#F075AE]"
    },
    {
      id: "3",
      title: "Social Engineering cấp cao",
      desc: "Dùng áp lực/uy tín để mượn tài khoản/token xác thực của cấp dưới. \"Superuser\" mượn danh tính để đổ lỗi cho chủ tài khoản trên nhật ký (Logs).",
      icon: "🎭",
      color: "border-[#A8DF8E]"
    },
    {
      id: "4",
      title: "Third-party Risk (Bên thứ 3)",
      desc: "Thông đồng để can thiệp hệ thống của đơn vị định giá tài sản hoặc công chứng, khiến ngân hàng giải ngân dựa trên dữ liệu đã bị làm sai lệch từ nguồn.",
      icon: "🤝",
      color: "border-[#FFB26B]"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#F0FFDF]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Tiêu đề Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F075AE] mb-4">Những Rủi Ro Tiềm Tàng</h2>
          <p className="text-[#555] italic text-lg">Phân tích chuyên sâu 4 phương thức tấn công giả định (Cyber Security Perspective)</p>
        </motion.div>

        {/* Layout 4 Cột ngang nhau */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }} // Hiệu ứng hiện ra lần lượt từng thẻ
              whileHover={{ y: -10 }}
              className={`bg-white p-6 rounded-3xl shadow-xl border-t-8 ${item.color} flex flex-col h-full`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              
              {/* Tiêu đề thẻ */}
              <h3 className={`text-lg font-black mb-3 leading-snug text-gray-800`}>
                <span className="text-gray-400 mr-1">{item.id}.</span> <br/>
                {item.title}
              </h3>
              
              {/* Nội dung chi tiết */}
              <p className="text-sm text-[#666] leading-relaxed flex-grow text-justify">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bảng thống kê thiệt hại (Vẫn giữ nguyên cho phần chốt hạ) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl overflow-hidden border border-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Thống kê thiệt hại tiêu biểu</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Thuê trụ sở khống", value: "~580 tỷ" },
              { label: "Đề án Core Banking", value: "~63 tỷ" },
              { label: "Hồ sơ vay khống", value: "> 5.000 tỷ" },
              { label: "Trái phiếu Thiên Thanh", value: "~900 tỷ" }
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-2xl bg-[#F075AE]/5 border border-[#F075AE]/20">
                <p className="text-xs text-[#888] mb-1">{item.label}</p>
                <p className="text-xl font-bold text-[#F075AE]">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
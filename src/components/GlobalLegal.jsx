import { motion } from 'framer-motion';

const aseanData = [
  { 
    country: "Việt Nam", 
    law: "Luật ANM 2025 (Hiệu lực 1/7/2026)", 
    highlight: "Phân cấp 5 mức bảo vệ; Mobile Banking tự động ngắt khi thấy mã độc (TT 77/2025).",
    icon: "🇻🇳" 
  },
  { 
    country: "Singapore", 
    law: "Cybersecurity Act sửa đổi (31/10/2025)", 
    highlight: "Quản lý cả hệ thống CII do bên thứ ba (Cloud/SaaS) sở hữu; cơ chế STCC cho sự kiện đặc biệt.",
    icon: "🇸🇬" 
  },
  { 
    country: "Thái Lan", 
    law: "Thông báo BOT 4/2568 (3/2025)", 
    highlight: "Quy tắc '1 người - 1 thiết bị'; giao dịch >50k THB bắt buộc xác thực khuôn mặt.",
    icon: "🇹🇭" 
  },
  { 
    country: "Malaysia", 
    law: "Cyber Security Act 2024 (Act 854)", 
    highlight: "Bắt buộc kiểm toán an ninh 2 năm/lần; cấp phép cho nhà cung cấp SOC/Pentest.",
    icon: "🇲🇾" 
  },
  { 
    country: "Indonesia", 
    law: "PADK OJK 1/2026", 
    highlight: "Thông báo sự cố IT trong 24 giờ; kiểm tra lý lịch tư pháp nhân sự quản trị hệ thống.",
    icon: "🇮🇩" 
  }
];

export default function GlobalLegal() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#F0FFDF]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#4FA8FB] uppercase italic">
            Chủ Động Phòng Thủ <span className="text-[#A8DF8E]">2025 - 2026</span>
          </h2>
          <p className="text-[#888] mt-4 max-w-2xl mx-auto">
            Sự chuyển dịch từ "Trừng phạt" sang "Phòng thủ chủ động" trong hành lang pháp lý tài chính khu vực Châu Á.
          </p>
        </motion.div>

        {/* Bảng so sánh ASEAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {aseanData.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-[2rem] shadow-xl border-b-4 border-[#A8DF8E]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">{item.country}</h4>
                  <p className="text-[10px] text-[#4FA8FB] font-bold uppercase">{item.law}</p>
                </div>
              </div>
              <p className="text-sm text-[#555] leading-relaxed italic">"{item.highlight}"</p>
            </motion.div>
          ))}
        </div>

        {/* Khuyến nghị & Giải pháp */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">🛡️</div>
          <h3 className="text-2xl font-black mb-10 text-[#F075AE]">LỜI GIẢI CHO BÀI TOÁN QUẢN TRỊ HIỆN ĐẠI</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F075AE] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h5 className="font-bold mb-2">Báo cáo sự cố & DPIA</h5>
                  <p className="text-sm text-[#666]">Áp dụng cơ chế báo cáo trong 24-72h. Thực hiện Đánh giá tác động bảo vệ dữ liệu (DPIA) cho mọi dòng chảy dữ liệu xuyên biên giới.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4FA8FB] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h5 className="font-bold mb-2">Nguyên tắc Phân tách (SoD)</h5>
                  <p className="text-sm text-[#666]">Tách biệt tuyệt đối quyền Duyệt dự án và Giải ngân. Hạn chế quyền "Superuser" để không cá nhân nào có thể xóa dấu vết hệ thống.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#A8DF8E] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h5 className="font-bold mb-2">Công nghệ An ninh mới</h5>
                  <p className="text-sm text-[#666]">Triển khai Blockchain cho Audit Logs và AI Monitoring để phát hiện giao dịch bất thường trong thời gian thực.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFAAB8] text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h5 className="font-bold mb-2">Quản trị Bên thứ ba (3PO)</h5>
                  <p className="text-sm text-[#666]">Bắt buộc ký ràng buộc cam kết bảo mật với các nhà cung cấp Cloud/SaaS theo chuẩn Singapore & EU.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border-dashed border-2 border-gray-200">
            <p className="text-xs text-[#888] text-center">
              📌 <strong>Tổng kết:</strong> Nếu các quy định này được áp dụng vào năm 2013, đại án VNCB đã bị chặn đứng ngay từ khâu "Lập hồ sơ khống" nhờ hệ thống MFA và Giám sát AI độc lập.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
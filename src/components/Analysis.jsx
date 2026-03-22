import { motion } from 'framer-motion';

export default function Analysis() {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#F0FFDF]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F075AE] mb-4">Góc Nhìn Chuyên Gia</h2>
          <p className="text-[#555] italic text-lg">Phân tích lỗ hổng quản trị và bảo mật hệ thống (Cyber Security Perspective)</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột 1: Mô hình CIA & Lỗ hổng kỹ thuật */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#F075AE]"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="mr-2">🛡️</span> Mô hình CIA & Quyền hạn
            </h3>
            <div className="space-y-6 text-sm text-[#444] leading-relaxed">
              <p><strong>Integrity (Tính toàn vẹn):</strong> Bị đánh trực diện khi các lệnh chi bị giả mạo, dữ liệu kế toán không phản ánh đúng thực tế dòng tiền.</p>
              <p><strong>Non-repudiation (Chống chối bỏ):</strong> Thất bại hoàn toàn do thiếu Digital Signature (Chữ ký số). Thủ phạm có thể ghi đè quy trình mà không để lại định danh số chuẩn xác.</p>
              <div className="bg-[#FFD8DF]/30 p-4 rounded-xl">
                <p className="font-bold text-[#F075AE]">Privilege Escalation:</p>
                <p className="text-xs italic">Lãnh đạo cấp cao tự cấp quyền "ngoại lệ" để bỏ qua xác thực đa nhân tố (MFA).</p>
              </div>
            </div>
          </motion.div>

          {/* Cột 2: Các kịch bản tấn công giả định */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#4FA8FB]"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="mr-2">🕵️‍♂️</span> Kịch bản rủi ro hệ thống
            </h3>
            <div className="space-y-4 text-sm text-[#444]">
              <div className="border-b pb-2">
                <span className="font-bold text-[#4FA8FB]">Database Manipulation:</span>
                <p>Can thiệp trực tiếp vào DB để sửa số dư mà không qua UI phần mềm.</p>
              </div>
              <div className="border-b pb-2">
                <span className="font-bold text-[#4FA8FB]">Logic Flaw (Race Condition):</span>
                <p>Tận dụng độ trễ cập nhật số dư để giải ngân khống hàng loạt.</p>
              </div>
              <div className="border-b pb-2">
                <span className="font-bold text-[#4FA8FB]">Social Engineering:</span>
                <p>Lạm dụng "uy tín" để mượn Token/Account của kiểm soát viên.</p>
              </div>
              <div>
                <span className="font-bold text-[#4FA8FB]">Third-party Risk:</span>
                <p>Thông đồng làm sai lệch dữ liệu từ đơn vị định giá bên ngoài.</p>
              </div>
            </div>
          </motion.div>

          {/* Cột 3: Giải pháp phòng ngừa hiện đại */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#A8DF8E]"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="mr-2">🚀</span> Khắc phục bằng Công nghệ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#A8DF8E] text-white p-1 rounded">✔</div>
                <p className="text-sm"><strong>Blockchain Audit Logs:</strong> Lưu trữ lịch sử giao dịch không thể tẩy xóa.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#A8DF8E] text-white p-1 rounded">✔</div>
                <p className="text-sm"><strong>AI Monitoring:</strong> Phát hiện bất thường (Anomaly Detection) trong dòng tiền nghìn tỷ.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#A8DF8E] text-white p-1 rounded">✔</div>
                <p className="text-sm"><strong>Biometric MFA:</strong> Áp dụng QĐ 2345 để xác thực khuôn mặt cho mọi giao dịch lớn.</p>
              </div>
              <div className="mt-6 p-4 bg-[#F0FFDF] rounded-2xl border border-[#A8DF8E]">
                <p className="text-[10px] font-bold text-center uppercase tracking-widest text-[#555]">Tiêu chuẩn áp dụng</p>
                <p className="text-center font-black text-[#1a1a1a]">BASEL II & PKI SYSTEM</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bảng thiệt hại kinh tế */}
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
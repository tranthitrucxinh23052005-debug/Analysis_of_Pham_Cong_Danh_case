import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const comparisons = [
  {
    feature: "Thẩm định hồ sơ",
    standard: "Kiểm tra thực tế, định giá sát thị trường, xét duyệt 3 cấp.",
    vncb: "Vẽ dự án khống trên giấy, thổi giá tài sản lên gấp nhiều lần.",
    icon: "🔍"
  },
  {
    feature: "Mục đích vay vốn",
    standard: "Sử dụng đúng mục đích kinh doanh, có phương án trả nợ rõ ràng.",
    vncb: "Lập công ty sân sau để rút tiền trả nợ cũ hoặc chi tiêu cá nhân.",
    icon: "🎯"
  },
  {
    feature: "Quản trị rủi ro",
    standard: "Hệ thống cảnh báo sớm, trích lập dự phòng đầy đủ.",
    vncb: "Lờ đi mọi cảnh báo, vô hiệu hóa bộ phận kiểm soát nội bộ.",
    icon: "🛡️"
  }
];

const evolutionLaws = [
  {
    criteria: "Sở hữu Tổ chức",
    v2010: "Tối đa 15%",
    v2024: "Giảm còn 10% (Điều 63)",
    impact: "Ngăn tập đoàn phi tài chính chi phối hệ thống.",
    risk: "Pha loãng quyền lực nhóm lợi ích.",
    icon: "🏢",
    link: "https://thuvienphapluat.vn/van-ban/Tien-te-Ngan-hang/Luat-Cac-to-chuc-tin-dung-32-2024-QH15-577203.aspx#dieu_63"
  },
  {
    criteria: "Sở hữu Nhóm liên quan",
    v2010: "Tối đa 20%",
    v2024: "Giảm còn 15% (Điều 63)",
    impact: "Phá vỡ cấu trúc 'gia đình trị' thao túng HĐQT.",
    risk: "Mở rộng định nghĩa người thân (cha dượng, mẹ kế...).",
    icon: "👨‍👩‍👧‍👦",
    link: "https://thuvienphapluat.vn/van-ban/Tien-te-Ngan-hang/Luat-Cac-to-chuc-tin-dung-32-2024-QH15-577203.aspx#dieu_63"
  },
  {
    criteria: "Minh bạch Cổ đông",
    v2010: "Chỉ báo cáo sở hữu > 5%",
    v2024: "Công khai từ 1% (Điều 49)",
    impact: "Xóa bỏ 'bức màn vô hình' của cổ đông đứng tên hộ.",
    risk: "Nâng cao kỷ luật thị trường (Trụ cột 3 Basel).",
    icon: "👁️",
    link: "https://thuvienphapluat.vn/van-ban/Tien-te-Ngan-hang/Luat-Cac-to-chuc-tin-dung-32-2024-QH15-577203.aspx#dieu_49"
  },
  {
    criteria: "Hạn mức Tín dụng",
    v2010: "15% vốn tự có (1 khách)",
    v2024: "Lộ trình giảm về 10% (2029)",
    impact: "Ngăn rủi ro tập trung (Concentration Risk).",
    risk: "Ép doanh nghiệp đa dạng hóa nguồn vốn.",
    icon: "📉",
    link: "https://thuvienphapluat.vn/van-ban/Tien-te-Ngan-hang/Luat-Cac-to-chuc-tin-dung-32-2024-QH15-577203.aspx#dieu_136"
  },
  {
    criteria: "Bancassurance",
    v2010: "Vùng xám (ép mua kèm)",
    v2024: "Cấm tuyệt đối (Điều 15)",
    impact: "Lành mạnh hóa hành vi kinh doanh (Conduct Risk).",
    risk: "Bảo vệ quyền lợi người tiêu dùng tài chính.",
    icon: "🛡️",
    link: "https://thuvienphapluat.vn/van-ban/Tien-te-Ngan-hang/Luat-Cac-to-chuc-tin-dung-32-2024-QH15-577203.aspx#dieu_15"
  },
  {
    criteria: "Can thiệp sớm",
    v2010: "Đợi đến khi âm vốn",
    v2024: "Kích hoạt khi lỗ > 15% vốn",
    impact: "Giám sát dự phòng trước khi mất thanh khoản.",
    risk: "Xử lý rút tiền hàng loạt (Bank run) kịp thời.",
    icon: "🚨",
    link: "https://thuvienphapluat.vn/van-ban/Tien-te-Ngan-hang/Luat-Cac-to-chuc-tin-dung-32-2024-QH15-577203.aspx#dieu_157"
  }
];

export default function Compare() {
  return (
    <section id="newlaws" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#FAF4EB] to-[#EAE0D5]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* Bảng 1: So sánh hành vi sai phạm quá khứ */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#3E2723] uppercase tracking-tighter">
              Đối Chiếu Hành Vi Sai Phạm
            </h2>
            <p className="text-[#8D6E63] mt-2">Phân tích lỗ hổng nghiệp vụ thực tế tại VNCB (2013-2014)</p>
          </div>
          <div className="overflow-x-auto shadow-2xl rounded-[2rem] border-4 border-[#FAF4EB]">
            <table className="w-full text-left border-collapse bg-[#FAF4EB]">
              <thead>
                <tr className="bg-[#8D6E63] text-white">
                  <th className="p-6">Đặc điểm</th>
                  <th className="p-6">Quy chuẩn Quốc tế</th>
                  <th className="p-6">Thực tế tại VNCB</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="border-b border-[#EAE0D5] hover:bg-[#EAE0D5]/50 transition">
                    <td className="p-6 font-bold text-[#3E2723]">
                      <span className="mr-3 text-2xl">{item.icon}</span> {item.feature}
                    </td>
                    <td className="p-6 text-[#3E2723] italic bg-[#EAE0D5]/30">{item.standard}</td>
                    <td className="p-6 text-[#8D6E63] font-bold bg-[#D4A373]/10">{item.vncb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bảng 2: Tiến hóa Luật Các TCTD (Giao diện chuẩn - Nội dung từ Team HUB) */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#3E2723] uppercase tracking-tighter">
              Tiến Hóa Hành Lang Pháp Lý
            </h2>
            <p className="text-[#8D6E63] mt-2 italic">Lộ trình chuyển đổi từ Luật 2010 sang "Cú đấm thép" 2024</p>
          </div>
          
          <div className="overflow-x-auto shadow-2xl rounded-[2rem] border-4 border-[#FAF4EB]">
            <table className="w-full text-left border-collapse bg-[#FAF4EB]">
              <thead>
                <tr className="bg-[#3E2723] text-white text-sm">
                  <th className="p-6">Tiêu chí Lập pháp</th>
                  <th className="p-6">Luật cũ (2010-2017)</th>
                  <th className="p-6">Luật mới (2024)</th>
                  <th className="p-6">Phân tích Tác động</th>
                  <th className="p-6 text-center">Trích dẫn</th>
                </tr>
              </thead>
              <tbody>
                {evolutionLaws.map((item, index) => (
                  <tr key={index} className="border-b border-[#EAE0D5] hover:bg-[#EAE0D5]/60 transition">
                    <td className="p-6 font-bold text-[#3E2723] flex items-center gap-3">
                      <span className="text-xl p-2 bg-[#EAE0D5]/50 rounded-xl shadow-sm">{item.icon}</span>
                      {item.criteria}
                    </td>
                    <td className="p-6 text-[#8D6E63] line-through text-xs md:text-sm">{item.v2010}</td>
                    <td className="p-6 text-[#D4A373] font-black text-sm md:text-base bg-[#EAE0D5]/30">
                      {item.v2024}
                    </td>
                    <td className="p-6">
                      <p className="text-[#3E2723] font-semibold text-xs mb-1">{item.impact}</p>
                      <p className="text-[#555] text-[10px] italic leading-tight">{item.risk}</p>
                    </td>
                    <td className="p-6 text-center">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 bg-[#8D6E63]/10 text-[#8D6E63] rounded-lg hover:bg-[#8D6E63] hover:text-white transition-all group"
                        title="Xem văn bản luật gốc trên Thư viện Pháp luật"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer ghi chú giữ nguyên */}
          <div className="mt-8 p-6 bg-[#EAE0D5] rounded-2xl border border-[#D4A373]/30">
            <p className="text-xs text-[#555] leading-relaxed">
              <span className="font-bold text-[#3E2723]">💡 Lưu ý về Quy định Chuyển tiếp (Grandfathering Clause):</span> Luật 2024 cho phép các cổ đông đang vi phạm tỷ lệ sở hữu tại ngày 01/07/2024 được duy trì số cổ phần hiện có nhưng tuyệt đối cấm tăng thêm (Điều 210), nhằm đảm bảo ổn định thị trường chứng khoán và tránh sốc thanh khoản vĩ mô.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
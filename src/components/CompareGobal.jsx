import { motion } from 'framer-motion';

const cyberLawsData = [
  {
    country: "Việt Nam",
    cii: "Hệ thống CNTT của cơ quan, dịch vụ trọng yếu (bao gồm tài chính-ngân hàng) được Chính phủ định danh.",
    localization: "Chưa quy định chung; lưu trữ VNeID và mật mã thuộc nhà nước.",
    reporting: "Việt Nam yêu cầu báo cáo sự cố theo hướng dẫn NHNN (thường 24-48h). Đặc biệt: Báo cáo vi phạm dữ liệu cá nhân cho Cục A05 (Bộ Công an) chậm nhất 72h theo NĐ 356/2025.",
    licensing: "Bắt buộc: Doanh nghiệp cung cấp dịch vụ ATTT (Pentest, SOC...) phải có Giấy phép kinh doanh sản phẩm, dịch vụ ATTT mạng do Bộ TT&TT cấp.",
    penalties: "Phạt hành chính, truy cứu hình sự theo BLHS về tội phạm CNTT; Luật TCTD 2024 buộc CBQL chịu trách nhiệm về ATTT.",
    scope: "Áp dụng cho tất cả TCTD. Luật TCTD 2024 quy định tăng cường bảo mật, ANM (dự thảo) phân tầng 5 mức.",
    news: "Luật ANM 2025 quy định DPIA và thời hạn xử lý sự cố; TT 77/2025 yêu cầu mobile banking tự ngắt phiên khi phát hiện mã độc/điều khiển từ xa; NĐ 356/2025 bắt buộc DPIA trước khi chuyển dữ liệu xuyên biên giới."
  },
  {
    country: "Singapore",
    cii: "CII là hệ thống cung cấp dịch vụ thiết yếu (năng lượng, tài chính, y tế, ...).",
    localization: "Không bắt buộc lưu trữ trong nước (Singapore khuyến khích trao đổi an toàn dữ liệu).",
    reporting: "Báo cáo ngay khi phát hiện (quy định cụ thể do CSA ban hành).",
    licensing: "Yêu cầu cấp phép với nhà cung cấp an ninh mạng (Pentest, SOC).",
    penalties: "Phạt hành chính cao (triệu SGD), hình sự đến 10 năm với tội phá hoại CII.",
    scope: "Áp dụng cho ngân hàng là ESP; báo cáo sự cố trực tiếp cho Cục An ninh mạng (CSA).",
    news: "CSA sửa đổi 2024: CII của bên thứ ba (cloud/SaaS) phải có cam kết hợp đồng; Hệ thống CII ở nước ngoài nhưng phục vụ Sing thuộc điều chỉnh; Thiết lập \"STCC\" quản lý khủng hoảng."
  },
  {
    country: "Malaysia",
    cii: "NCII là hệ thống ngành trọng yếu do NACSA chỉ định.",
    localization: "Yêu cầu lưu trữ tại địa phương (đã áp dụng với ngành tài chính theo NACSA).",
    reporting: "72 giờ sau phát hiện sự cố nghiêm trọng. NACSA có thể yêu cầu báo cáo đột xuất.",
    licensing: "SOC và Pentest bắt buộc đăng ký giấy phép với NACSA.",
    penalties: "Phạt tiền lớn (đến 500k RM), hình sự đến 3 năm tù với CII nghiêm trọng.",
    scope: "Ngân hàng là NCII tài chính; phải báo cáo sự cố cho NACSA và đánh giá an toàn 2 năm/lần.",
    news: "Lập mô hình giám sát AI trong SOC; kiểm toán an ninh 2 năm/lần; tăng cường đánh giá khung quản trị AI nội bộ."
  },
  {
    country: "Thái Lan",
    cii: "CII bao gồm tài chính, an ninh, y tế, giao thông… do NCSA xác định.",
    localization: "Yêu cầu khả năng truy xuất log và có thể yêu cầu lưu trữ (ISP lưu log 90-180 ngày).",
    reporting: "Chưa có thời hạn chung; BOT yêu cầu báo cáo tự đánh giá rủi ro 30 ngày.",
    licensing: "Chưa có khung cấp phép ngành riêng; dự thảo 2025 sẽ quy chuẩn hóa vendor.",
    penalties: "Tấn công CII bị hình sự đến 5 năm.",
    scope: "Ngân hàng thuộc CII tài chính; báo cáo sự cố cho NCSA, tuân thủ thanh tra thường xuyên.",
    news: "BOT yêu cầu chuẩn \"1 người - 1 thiết bị\" chống chiếm quyền và xác thực sinh trắc >50k THB (khởi xướng 2023-2024, siết chặt 2025); Hướng dẫn AI (9/2025) quy định AI giải thích được (Explainable AI) trong duyệt tín dụng."
  },
  {
    country: "Indonesia",
    cii: "CII chưa định danh cụ thể; thường là ngân hàng và chính phủ.",
    localization: "OJK yêu cầu sao lưu dữ liệu NH thanh toán trong nước.",
    reporting: "PADK 1/2026: Thông báo ban đầu cho OJK trong 24h; báo cáo chi tiết trong 5 ngày làm việc.",
    licensing: "Không có cấp phép chuyên biệt (chứng thư số, ISO).",
    penalties: "Hình sự hóa nhiều hành vi tấn công mạng trong BLHS; phạt tù, tiền tùy mức độ.",
    scope: "Tuân thủ POJK về an toàn công nghệ thanh toán.",
    news: "OJK PADK 1/2026: Bank phải thông báo OJK trong 24h khi có sự cố IT; bắt buộc background check toàn bộ nhân sự CNTT và vendor IT; mở rộng định nghĩa rủi ro ICT (tấn công AI)."
  },
  {
    country: "Philippines",
    cii: "Chưa định nghĩa CII rõ ràng; tập trung NHNN/DC lớp cao.",
    localization: "Không bắt buộc; DPA hạn chế xuất dữ liệu cá nhân ra ngoài nếu không an toàn.",
    reporting: "DPA: 72h cho NPC về vi phạm dữ liệu. Cybercrime Act: phối hợp điều tra ngay.",
    licensing: "Chưa cấp phép riêng; BSP khuyến khích tự xây FMS hoặc mua giải pháp có chứng chỉ.",
    penalties: "Hình sự đến 12 năm với tội phạm mạng nghiêm trọng; phạt tiền theo DPA (tối đa 5 triệu peso).",
    scope: "Tất cả NH/Ví điện tử tuân thủ DPA và Cybercrime Act; BSP yêu cầu giám sát gian lận tức thì.",
    news: "BSP Circular 1213 (2025) yêu cầu triển khai FMS theo thời gian thực (gồm check geolocation), bắt buộc xác thực nâng cao (2FA) kháng Phishing."
  },
  {
    country: "Brunei",
    cii: "CII do Ủy viên An ninh mạng chỉ định (tài chính, điện lực...).",
    localization: "Có yêu cầu lưu trữ nhật ký an ninh và dữ liệu định danh trong nước.",
    reporting: "Báo cáo khẩn trương (thường 72 giờ theo Ủy viên quy định).",
    licensing: "Không có quy định cấp phép quốc gia (chủ yếu ISO 27001).",
    penalties: "Phạt tiền, đình chỉ hoạt động; phạt tù đến 5 năm cho tấn công CII.",
    scope: "Chỉ định cán bộ an ninh mạng, đánh giá rủi ro hàng năm.",
    news: "Bộ Quy tắc CII 2025 nhấn mạnh trách nhiệm lãnh đạo, kiểm định định kỳ; đẩy mạnh văn hóa bảo mật."
  },
  {
    country: "Trung Quốc",
    cii: "CII bao gồm chính phủ, tài chính, viễn thông (Luật ANM 2017).",
    localization: "Bắt buộc: Lưu trữ dữ liệu trong nước và đăng ký với BCA/CAC.",
    reporting: "Thông báo ngay cho cơ quan quản lý (thường 24-72h do MIIT/BCA ban hành).",
    licensing: "Đang áp dụng tiêu chuẩn quốc gia cho sản phẩm, chưa cấp phép DV.",
    penalties: "Tấn công CII phạt tù đến 7 năm, phát tán thông tin xấu đến 5 năm.",
    scope: "Tuân thủ Luật ANM, luật NH và quy định NH Trung ương.",
    news: "Luật ANM sửa đổi (1/2026) khống chế chặt chuyển dữ liệu ra nước ngoài; bắt buộc mã hóa, kiểm toán định kỳ."
  },
  {
    country: "Nhật Bản",
    cii: "CII rộng (chính phủ tự xây mức độ ưu tiên cho từng ngành).",
    localization: "Không bắt buộc lưu trữ địa phương; tuân thủ Luật APPI khi xuất dữ liệu.",
    reporting: "NISC khuyến khích báo cáo nhanh, không ép thời hạn cứng như ASEAN.",
    licensing: "Nhà cung cấp DV an ninh (chứng thư số, PKI) phải đăng ký với JCA.",
    penalties: "Hình sự phạt tù đến 5 năm xâm nhập hệ thống; hành chính phạt tiền lớn.",
    scope: "Tuân thủ Fintech Act, PCI DSS, ISO 27001.",
    news: "Đẩy mạnh chữ ký số nội địa và khung OpenSSF cho fintech. Tăng chuẩn bảo mật app ngân hàng di động."
  },
  {
    country: "Hàn Quốc",
    cii: "Bảo vệ qua các đạo luật chuyên biệt.",
    localization: "Yêu cầu lưu trữ trong nước với ngân hàng điện tử, viễn thông.",
    reporting: "NIS: Báo cáo sự cố mạng trong 24h. Luật bảo mật: Thông báo vi phạm dữ liệu trong 72h.",
    licensing: "Nhà cung cấp SOC, Big4 kiểm toán CNTT cần chứng nhận KISA.",
    penalties: "Phạt tới 10% doanh thu vi phạm nghiêm trọng; hình sự đến 10 năm.",
    scope: "Tuân thủ Luật NH, CDSA và thông tư của NH Trung ương.",
    news: "Sắp có hướng dẫn đạo đức AI tài chính (KISA 2026); tăng phạt nặng vi phạm cyber, bắt buộc kiểm toán CNTT hàng năm."
  }
];

export default function CompareGlobal() {
  return (
    <section id="global" className="py-20 px-4 md:px-8 bg-[#FAF4EB]">
      <div className="max-w-[90rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#3E2723] uppercase tracking-tighter">
            Bản Đồ Pháp Lý An Ninh Mạng Châu Á
          </h2>
          <p className="text-[#8D6E63] mt-3 italic max-w-3xl mx-auto">
            Tổng hợp và so sánh khung quy định về an toàn thông tin, bảo mật dữ liệu và quản trị rủi ro tại các quốc gia trong khu vực giai đoạn 2025 - 2026.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#EAE0D5] rounded-3xl p-2 md:p-6 shadow-2xl border border-[#D4A373]/30"
        >
          <div className="overflow-x-auto rounded-2xl bg-[#FAF4EB] shadow-inner border-2 border-[#D4A373]/50 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-[#3E2723] text-[#FAF4EB] text-sm md:text-base">
                  <th className="p-5 font-bold sticky left-0 z-20 bg-[#3E2723] shadow-[2px_0_5px_rgba(0,0,0,0.1)] min-w-[150px]">Quốc gia</th>
                  <th className="p-5 font-bold min-w-[200px]">Định nghĩa CII</th>
                  <th className="p-5 font-bold min-w-[200px]">Lưu trữ dữ liệu trong nước</th>
                  <th className="p-5 font-bold min-w-[200px]">Báo cáo sự cố (thời hạn)</th>
                  <th className="p-5 font-bold min-w-[200px]">Cấp phép NCC an ninh</th>
                  <th className="p-5 font-bold min-w-[200px]">Hình phạt (HC/HS)</th>
                  <th className="p-5 font-bold min-w-[200px]">Phạm vi áp dụng ngân hàng</th>
                  <th className="p-5 font-bold min-w-[250px] text-[#D4A373]">Điểm mới 2025-2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D4A373]/30">
                {cyberLawsData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-[#EAE0D5]/50 transition-colors duration-200 group text-sm text-[#3E2723]"
                  >
                    <td className="p-5 font-black sticky left-0 z-10 bg-[#FAF4EB] group-hover:bg-[#EAE0D5] shadow-[2px_0_5px_rgba(0,0,0,0.02)] transition-colors duration-200 border-r border-[#D4A373]/20">
                      {item.country}
                    </td>
                    <td className="p-5 leading-relaxed">{item.cii}</td>
                    <td className="p-5 leading-relaxed">{item.localization}</td>
                    <td className="p-5 leading-relaxed">{item.reporting}</td>
                    <td className="p-5 leading-relaxed">{item.licensing}</td>
                    <td className="p-5 leading-relaxed">{item.penalties}</td>
                    <td className="p-5 leading-relaxed italic text-[#555]">{item.scope}</td>
                    <td className="p-5 leading-relaxed font-semibold text-[#8D6E63] bg-[#D4A373]/5">{item.news}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <p className="text-[#8D6E63] text-xs animate-pulse">
              ↔ Vuốt ngang trên bảng để xem đầy đủ các thông tin pháp lý
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
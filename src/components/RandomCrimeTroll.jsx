import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const crimes = [
  "Điều 174 BLHS: Lừa đảo chiếm đoạt tài sản",
  "Điều 175 BLHS: Lạm dụng tín nhiệm chiếm đoạt tài sản",
  "Điều 206 BLHS: Vi phạm quy định về hoạt động ngân hàng",
  "Điều 324 BLHS: Rửa tiền",
  "Điều 353 BLHS: Tham ô tài sản",
  "Điều 354 BLHS: Nhận hối lộ (bằng một ly trà sữa size L)",
  "Điều 211 BLHS: Thao túng thị trường chứng khoán",
  "Điều 221 BLHS: Vi phạm quy định về kế toán gây hậu quả nghiêm trọng",
  "Điều 356 BLHS: Lợi dụng chức vụ, quyền hạn trong khi thi hành công vụ",
  "Tội vi phạm hợp đồng dân sự (hứa đi chơi nhưng bùng kèo)",
  "Điều 134 BLHS: Cố ý gây thương tích (vì bị giục deadline)",
  "Tội thao túng tâm lý (Gaslighting người chấm điểm)",
  "Điều 288 BLHS: Đưa hoặc sử dụng trái phép thông tin mạng máy tính",
  "Điều 289 BLHS: Xâm nhập trái phép vào mạng máy tính",
  "Điều 200 BLHS: Trốn thuế (tình cảm)",
  "Tội cản trở giao thông (đi chậm giữa đường để ngắm cảnh)",
  "Điều 318 BLHS: Gây rối trật tự công cộng (hát karaoke loa kéo sau 10h tối)",
  "Tội vi phạm bản quyền (copy code không ghi nguồn)",
  "Tội trộm cắp tài sản (đánh cắp trái tim người đối diện)",
  "Tội lừa dối khách hàng",
  "Điều 358 BLHS: Lợi dụng ảnh hưởng đối với người có chức vụ để trục lợi",
  "Điều 360 BLHS: Thiếu trách nhiệm gây hậu quả nghiêm trọng",
  "Tội hủy hoại hoặc cố ý làm hư hỏng tài sản",
  "Tội chứa chấp tài sản do người khác phạm tội mà có",
  "Tội sử dụng trái phép tài sản",
  "Tranh chấp tài sản chung (chia tiền ăn trưa không đều)",
  "Bồi thường thiệt hại ngoài hợp đồng (làm vỡ ly nước của sếp)",
  "Tội đầu cơ",
  "Tội kinh doanh trái phép",
  "Tội vi phạm quy định về quản lý tài sản Nhà nước",
  "Điều 359 BLHS: Giả mạo trong công tác",
  "Tội làm giả con dấu, tài liệu của cơ quan, tổ chức",
  "Tội vận chuyển trái phép hàng hóa qua biên giới",
  "Tội buôn lậu (mang đồ ăn vặt vào phòng thi)",
  "Tội trốn đóng bảo hiểm xã hội",
  "Tội quảng cáo gian dối",
  "Tội vi phạm quy định về cạnh tranh",
  "Tội vô ý làm lộ bí mật (đọc trộm tin nhắn của crush)",
  "Tội lập quỹ trái phép",
  "Tội vi phạm quy định về an toàn lao động (code xuyên đêm không ngủ)"
];

// Danh sách icon dùng để "Chúc mừng"
const boomIcons = ["🎉", "💥", "🎊", "⚖️", "🔥"];

export default function RandomCrimeTroll() {
  const [isRolling, setIsRolling] = useState(false);
  const [currentCrime, setCurrentCrime] = useState("Nhấn nút để nhận bản án của bạn...");
  const [hasRolled, setHasRolled] = useState(false);
  const [showBoom, setShowBoom] = useState(false); // State quản lý hiệu ứng nổ

  const handleRoll = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    setHasRolled(true);
    setShowBoom(false); // Tắt hiệu ứng cũ khi bắt đầu quay mới
    
    let counter = 0;
    const maxRolls = 30; // Số lần đảo chữ
    const intervalTime = 60; // Tốc độ đảo chữ (ms)

    const rollInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * crimes.length);
      setCurrentCrime(crimes[randomIndex]);
      counter++;

      if (counter >= maxRolls) {
        clearInterval(rollInterval);
        setIsRolling(false);
        // Chốt kết quả cuối cùng
        const finalIndex = Math.floor(Math.random() * crimes.length);
        setCurrentCrime(crimes[finalIndex]);
        setShowBoom(true); // Bật hiệu ứng chúc mừng ngay khi chốt án!
      }
    }, intervalTime);
  };

  return (
    <section id="random-crime" className="py-20 px-4 md:px-8 bg-[#EAE0D5]">
      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#3E2723] uppercase tracking-tight mb-4">
            Bản Án Ngẫu Nhiên
          </h2>
          <p className="text-[#8D6E63] italic text-lg">
            Góc thử nhân phẩm pháp lý. Bạn sẽ vướng vào vòng lao lý nào?
          </p>
        </motion.div>

        <div className="bg-[#FAF4EB] p-8 md:p-12 rounded-3xl shadow-xl border-4 border-[#D4A373] relative overflow-visible">
          
          {/* Họa tiết trang trí */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8D6E63] via-[#D4A373] to-[#3E2723]"></div>
          
          {/* Hiệu ứng BOOM Chúc Mừng */}
          <AnimatePresence>
            {showBoom && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-50">
                {Array.from({ length: 25 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [1, 1, 0], // Sáng rõ rồi mờ dần
                      scale: [0.5, 1.5, 1], // Bùng to ra
                      x: (Math.random() - 0.5) * 500, // Bay tứ tung theo chiều ngang
                      y: (Math.random() - 0.5) * 500, // Bay tứ tung theo chiều dọc
                      rotate: Math.random() * 360 // Xoay vòng vòng
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute text-4xl md:text-5xl"
                  >
                    {boomIcons[Math.floor(Math.random() * boomIcons.length)]}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          <div className="min-h-[120px] flex items-center justify-center mb-8 bg-[#EAE0D5]/50 rounded-xl p-6 border border-[#D4A373]/30 relative z-10">
            <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${isRolling ? 'text-[#8D6E63] scale-95' : 'text-[#3E2723] scale-100'}`}>
              {currentCrime}
            </h3>
          </div>

          <button
            onClick={handleRoll}
            disabled={isRolling}
            className={`px-8 py-4 rounded-full font-black text-lg uppercase tracking-wider text-[#FAF4EB] shadow-lg transition-all duration-300 relative z-10 ${
              isRolling 
                ? 'bg-[#8D6E63] cursor-not-allowed opacity-70' 
                : 'bg-[#3E2723] hover:bg-[#D4A373] hover:shadow-xl active:scale-95'
            }`}
          >
            {isRolling ? 'Đang tuyên án...' : (hasRolled ? 'Thử lại nhân phẩm' : 'Tra cứu bản án')}
          </button>
        </div>
      </div>
    </section>
  );
}
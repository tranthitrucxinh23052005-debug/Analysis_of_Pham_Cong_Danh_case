import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const actions = [
  {
    title: "Lập hồ sơ khống vay vốn",
    desc: "Thành lập 29 công ty 'ma' (chỉ có tên không có hoạt động) thuộc Tập đoàn Thiên Thanh để vẽ ra các hợp đồng mua bán khống, rút sạch tiền từ VNCB.",
    icon: "👻"
  },
  {
    title: "Thoả thuận trái phép với ngân hàng bạn",
    desc: "Dùng tiền gửi của VNCB tại Sacombank, TPBank, BIDV để bảo lãnh cho các công ty sân sau vay vốn, sau đó để mặc nợ xấu khiến VNCB mất trắng tiền bảo lãnh.",
    icon: "🤫"
  },
  {
    title: "Hợp đồng khống 'Nâng cấp hệ thống CoreBanking'",
    desc: "Nâng khống giá trị đề án Core Banking chiếm đoạt 63 tỷ đồng.",
    icon: "🦊"
  },
  {
    title: "Hợp đồng thuê trụ sở 'ma'",
    desc: "Ký thuê trụ sở tại Tô Hiến Thành và Lê Đại Hành (TP.HCM) với giá trên trời, dù mặt bằng không đủ điều kiện pháp lý, nhằm chuyển tiền từ ngân hàng sang túi riêng.",
    icon: "🥸"
  }
];

export default function Actions() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 px-8 bg-[#FAF4EB]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-10 text-center drop-shadow-[0_0_5px_#D4A373]"
        >
          4 Tuyệt Kỹ "Bay Màu" Tiền
        </motion.h2>

        <div className="space-y-4">
          {actions.map((action, index) => (
            <div key={index} className="border-b border-[#D4A373]/30 pb-4">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-4 bg-[#EAE0D5] rounded-xl hover:bg-[#D4A373]/30 transition flex justify-between items-center group"
              >
                <span className="font-bold text-[#3E2723] flex items-center gap-3">
                  <span className="text-2xl">{action.icon}</span> {action.title}
                </span>
                <span className={`transform transition-transform duration-300 text-[#3E2723] ${activeIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-[#555] leading-relaxed italic bg-[#EAE0D5]/40 mt-2 rounded-lg border-l-4 border-[#8D6E63]">
                      {action.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
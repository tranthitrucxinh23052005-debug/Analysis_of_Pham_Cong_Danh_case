import { motion } from 'framer-motion';

const events = [
  {
    year: "2012",
    title: "Màn đổi tên định mệnh",
    desc: "TrustBank kiệt quệ với âm vốn chủ sở hữu hơn 2.800 tỷ đồng. Nhóm Thiên Thanh (Phạm Công Danh) nhảy vào tiếp quản và đổi tên thành VNCB."
  },
  {
    year: "2013",
    title: "Thời kỳ 'rút ruột' đỉnh cao",
    desc: "Triển khai hàng loạt phương án tái cơ cấu 'ảo', thực chất là dùng tiền huy động mới để trả nợ cũ và chi tiêu sai mục đích."
  },
  {
    year: "2014",
    title: "Hành vi sai phạm bị phát hiện",
    desc: "Ngân hàng Nhà nước đặt VNCB vào tình trạng kiểm soát đặc biệt. Tháng 7/2014, dàn lãnh đạo chủ chốt bị bắt giữ."
  },
  {
    year: "2016 - 2018",
    title: "Bản án định mệnh",
    desc: "Các phiên tòa sơ thẩm và phúc thẩm diễn ra. Phạm Công Danh nhận án tổng hợp 30 năm tù (mức cao nhất của án tù có thời hạn)."
  }
];

export default function Timeline() {
  return (
    <section className="py-20 px-8 bg-[#FAF4EB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-16 text-center drop-shadow-[0_0_5px_#D4A373]">
          Hành Trình "Từ Biệt Thự Đến Nhà Giam"
        </h2>

        <div className="relative border-l-4 border-[#D4A373] ml-4 md:ml-0 md:left-1/2">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:left-[-50%] md:pr-12 text-right' : 'md:left-[0%] md:pl-12 text-left'} px-6`}
            >
              {/* Nút tròn trên dòng kẻ */}
              <div className={`absolute top-0 w-6 h-6 bg-[#8D6E63] rounded-full border-4 border-[#FAF4EB] shadow-lg ${index % 2 === 0 ? 'right-[-15px]' : 'left-[-15px]'}`}></div>
              
              <div className="bg-[#EAE0D5]/60 backdrop-blur-md p-6 rounded-2xl border border-[#D4A373]/50 shadow-sm hover:shadow-md transition">
                <span className="text-[#8D6E63] font-black text-2xl">{event.year}</span>
                <h3 className="text-xl font-bold text-[#3E2723] mt-2">{event.title}</h3>
                <p className="text-[#555] mt-3 leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
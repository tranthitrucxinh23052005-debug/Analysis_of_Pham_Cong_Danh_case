import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Khai báo danh sách các mục lục tương ứng với id của từng section
const sections = [
  { id: 'hero', label: 'Trang chủ' },
  { id: 'video', label: 'Video vụ án' },
  { id: 'charac', label: 'Đối tượng liên quan' },
  { id: 'timeline', label: 'Dòng thời gian' },
  { id: 'actions', label: 'Hành vi sai phạm' },
  { id: 'analysis', label: 'Phân tích rủi ro' },
  { id: 'newlaws', label: 'Sự thay đổi trong luật pháp' },
  { id: 'needlaws', label: 'Một số điều cần biết' },  
  { id: 'goodgobal', label: 'Điểm hay của luật các nước khác' },   
  { id: 'global', label: 'Bản đồ Châu Á' },
  { id: 'relatecase', label: 'Một số vụ án tương tự' },
  { id: 'team', label: 'Đội ngũ' }
];

export default function FloatingTOC() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Xử lý sự kiện ẩn/hiện khi cuộn chuột
  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      setIsVisible(true); // Hiện menu khi đang cuộn
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false); // Ẩn menu sau 1.5 giây không thao tác
      }, 1500); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Intersection Observer để xác định section nào đang trên màn hình
  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 } // Kích hoạt khi section chiếm 40% màn hình
      );
      
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  // Hàm cuộn mượt đến section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 p-3 bg-[#FFF9E6]/80 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(253,230,138,0.4)] border-2 border-[#FDE68A]"
        >
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`w-3 rounded-full transition-all duration-300 relative group ${
                activeSection === sec.id 
                  ? 'bg-[#FDE68A] h-10 border border-[#D4A373]' // Mục đang active: Màu bơ đậm, dài ra
                  : 'bg-[#EAE0D5] h-3 hover:bg-[#FDE68A]' // Mục bình thường: Màu bánh quy
              }`}
            >
              {/* Tooltip hiển thị tên mục khi di chuột (Hover) */}
              <span className="absolute right-8 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#FFF9E6] text-[#3E2723] text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-sm border border-[#FDE68A] pointer-events-none">
                {sec.label}
              </span>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
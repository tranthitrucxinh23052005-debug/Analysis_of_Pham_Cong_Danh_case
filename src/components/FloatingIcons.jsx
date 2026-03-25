import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Danh sách các biểu tượng bạn muốn hiển thị
const icons = ["🥐", "🍯", "🍰", "🥞", "🧈"];

export default function FloatingIcons() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Tạo mảng gồm 20 biểu tượng với vị trí và thông số chuyển động ngẫu nhiên
    const newElements = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      duration: Math.random() * 15 + 15, // Chu kỳ chuyển động từ 15 - 30 giây
      delay: Math.random() * 5,
    }));
    setElements(newElements);
  }, []);

  return (
    // Lớp phủ cố định toàn màn hình, nằm dưới cùng (z-0) và không cản trở thao tác chuột
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, -60, 0, 60, 0], // Trôi lên xuống
            x: [0, 40, 0, -40, 0], // Trôi qua lại
            rotate: [0, 15, -15, 0] // Lắc lư nhẹ
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
          className="absolute text-2xl md:text-3xl filter drop-shadow-sm"
          style={{ left: el.left, top: el.top }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}
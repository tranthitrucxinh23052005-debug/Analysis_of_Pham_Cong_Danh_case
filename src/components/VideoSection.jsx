export default function VideoSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b3664] mb-4 uppercase tracking-tight">
            Tư Liệu Đa Phương Tiện
          </h2>
          <p className="text-gray-600 text-lg">
            Phóng sự toàn cảnh về diễn biến và sai phạm trong đại án VNCB
          </p>
        </div>
        
        {/* Khối chứa iframe video với tỷ lệ 16:9 */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-gray-50" style={{ paddingTop: '56.25%' }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/QKhPwsz6OtQ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 italic">
            Nguồn tài liệu tham khảo đính kèm bài tiểu luận.
          </p>
        </div>
      </div>
    </section>
  );
}
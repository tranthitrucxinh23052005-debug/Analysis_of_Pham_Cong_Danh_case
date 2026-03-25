# Analysis of Pham Cong Danh Case ⚖️
**Hệ Lụy Nghìn Tỷ: Nhìn Lại Đại Án VNCB**

Dự án website tương tác phân tích chuyên sâu đại án kinh tế Ngân hàng Xây dựng (VNCB) dưới lăng kính Quản trị rủi ro, Hành lang pháp lý và An ninh mạng. Đồ án được thực hiện bởi sinh viên ngành Khoa học Dữ liệu trong Kinh doanh (Data Science in Business) - Trường Đại học Ngân hàng TP.HCM (HUB).

## 📖 Mục tiêu dự án
Dự án nhằm số hóa và trực quan hóa các tài liệu pháp lý phức tạp, giúp người đọc dễ dàng tiếp cận và hiểu rõ:
- Lỗ hổng trong quy trình quản trị rủi ro và thẩm định tín dụng.
- Cấu trúc sở hữu chéo và các thủ đoạn thao túng tài chính tinh vi.
- Sự tiến hóa của Luật Các Tổ chức Tín dụng (từ phiên bản 2010 đến 2024).
- Bản đồ pháp lý về an ninh mạng và bảo vệ dữ liệu khu vực Châu Á (2025 - 2026).

## 🚀 Tính năng nổi bật
Trang web được thiết kế theo dạng Single Page Application (SPA) với các phân hệ chính:
- **Tư liệu Đa phương tiện (Hero & Video):** Tổng quan về diễn biến vụ án.
- **Hành trình Vụ án (Timeline):** Trục thời gian chi tiết từ khi thâu tóm TrustBank đến giai đoạn tuyên án.
- **Phân tích Hành vi (Actions & Analysis):** Bóc tách 4 thủ đoạn rút tiền cốt lõi và ánh xạ vào các rủi ro hệ thống.
- **Đối chiếu Pháp lý (CompareGlobal & Laws):** Bảng dữ liệu so sánh chuẩn mực quốc tế và tiến trình luật pháp. Tích hợp thanh cuộn ngang (Horizontal Scroll) xử lý lượng dữ liệu lớn.
- **Tương tác Học thuật (FateWheel & RandomCrime):** Các module mô phỏng ngẫu nhiên (Vòng quay nhân sự, Tra cứu bản án) nhằm mục đích giáo dục pháp luật trực quan.

## 🛠 Công nghệ sử dụng
- **Core:** React.js, Vite
- **Styling:** Tailwind CSS (Sử dụng dải màu học thuật tùy chỉnh: Espresso `#3E2723`, Cà phê sữa `#8D6E63`, Mật ong `#D4A373`, Bánh quy `#EAE0D5`, Kem sữa `#FAF4EB`).
- **Animation:** Framer Motion (Xử lý hiệu ứng cuộn, trôi nổi và chuyển động mượt mà).
- **Icons:** Lucide React

## ⚙️ Hướng dẫn cài đặt và chạy dự án

### 1. **Sao chép dự án (Clone repository):**
   ```bash
   git clone [https://github.com/tranthitrucxinh23052005-debug/Analysis_of_Pham_Cong_Danh_case.git](https://github.com/tranthitrucxinh23052005-debug/Analysis_of_Pham_Cong_Danh_case.git)
   cd Analysis_of_Pham_Cong_Danh_case
   ```

### 2. **Cài đặt thư viện (Install dependencies):**
  ```bash
  npm install
   hoặc
  yarn install
  ```
    
### 3. **Khởi chạy môi trường phát triển (Run development server):**
 ```bash
npm run dev
 hoặc
yarn dev
 ```
Dự án sẽ khởi chạy tại: **http://localhost:5173**

## **👥 Tác giả**
Trần Thị Trúc Xinh

## 📝 Tuyên bố miễn trừ trách nhiệm (Disclaimer)
Toàn bộ mã nguồn, dữ liệu và nội dung phân tích trong dự án này chỉ phục vụ duy nhất cho mục đích học thuật và nghiên cứu nội bộ. Các thông tin được tổng hợp từ các nguồn báo chí chính thống và văn bản quy phạm pháp luật công khai. Nhóm tác giả không chịu trách nhiệm cho bất kỳ rủi ro pháp lý nào phát sinh từ việc sử dụng thông tin trong dự án này vào các mục đích khác

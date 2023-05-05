# Middleware

### Ý nghĩa 
- Phần mềm trung gian (đứng giữa các thành phần trong mô hình phần mềm)
* Brower (client) =========== Resquest ========> Server (Node)

* Brower (client) <========== Response ========= Server (Node)

### Vai trò 
- Giống như bác bảo vệ 
* Nhà ==================> Bác bảo vệ 1 (middleware 1): Bác bảo vệ 2 (middleware 2): Sự kiện (soát vé)

* Nhà <================== Sự kiện 

1. Soát vé (kiểm soát -> Validation)
2. Không cho vào 
3. Cho phép vào (Validation passed -> cho vào)
4. Chỉnh sửa / thay đổi 

### Ứng dụng 
- Dựng chức năng xác thực (Authentication)
- Chức năng phân quyền (Authorization)
- Để chia sẻ các giá trị của biến tới tất cả các views (BE)
 
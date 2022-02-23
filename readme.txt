* Cách đưa lên Github bằng CMD
git init
git remote add origin https://github.com/nghia64/excel (Để đặt địa chỉ chỏ đến để đẩy từ local lên github)
git add . (Lấy toàn bộ file trong thư mục hoặc lấy file nào thì nhập tên file đó)
git commit -m "Comment lần push"
git push -u origin main (Đẩy sources code lên github)

** 1 số lưu ý:
- Kiểm tra đang làm việc trên branch nào:
git checkout
- Chuyển về branch chính hoặc branch muốn làm việc
git checkout TEN_BRANCH
- Nếu lỗi không đúng địa chỉ github dùng
git remote set-url origin https://github.com/nghia64/excel

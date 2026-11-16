# CLB Gear — Rehearsal Bảng Kỹ thuật

Ứng dụng React + Vite tiếng Việt. Dữ liệu lưu localStorage, không cần backend.

## Chạy

```bash
npm install
npm run dev
```

## Kiến trúc
- `src/data/seed.js`: dữ liệu BTC
- `src/lib/store.js`: lưu dữ liệu, kiểm tra trùng lịch, format ngày
- `src/main.jsx`: UI, thao tác và form
- `src/style.css`: giao diện responsive

## Demo
Nạp dữ liệu mẫu → tìm TB-03 → tạo hai yêu cầu cùng ngày → duyệt yêu cầu thứ nhất → thử duyệt yêu cầu thứ hai (bị chặn) → tải lại trang.

Lưu ý: trạng thái thiết bị trong seed được giữ nguyên như BTC; trạng thái yêu cầu được quản lý riêng. `Đã trả` không chiếm lịch theo quy tắc demo.
